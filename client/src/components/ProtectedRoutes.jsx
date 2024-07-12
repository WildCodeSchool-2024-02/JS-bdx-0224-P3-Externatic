import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function ProtectedRoute({ element, roles }) {
  const userData = useAuth();
  
  return userData && roles.includes(userData.role) ? (
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
