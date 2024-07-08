import PropTypes from "prop-types";
import { Navigate, useLoaderData } from "react-router-dom";

function ProtectedRoute({ element, roles }) {
  const userData = useLoaderData();

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
