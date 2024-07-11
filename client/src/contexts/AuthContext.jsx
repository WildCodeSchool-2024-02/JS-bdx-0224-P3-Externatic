import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import PropTypes from "prop-types";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState({ role: null, id: null });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setAuth({
          role: decodedToken.role,
          id: decodedToken.id,
        });
      } catch (error) {
        throw new Error("Invalid token");
      }
    }
  }, [auth]);
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => useContext(AuthContext);
export { AuthProvider };
