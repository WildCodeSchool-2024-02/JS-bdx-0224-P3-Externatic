import { useContext } from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function ProtectedRoute({ element, roles }) {
  const {auth} = useContext(AuthContext);
  
  return auth && roles.includes(auth?.role) ? (
    element
  ) : (
    <Navigate to="/" replace />
  );
}

ProtectedRoute.propTypes = {
  element: PropTypes.elementType.isRequired,
  roles: PropTypes.string.isRequired,
};


export default ProtectedRoute;
