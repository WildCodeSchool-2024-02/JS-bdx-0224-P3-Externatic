import PropTypes from "prop-types";

function DashboardCandidate({ lastname }) {
  return <h1>{lastname}</h1>;
}

DashboardCandidate.propTypes = {
  lastname: PropTypes.string.isRequired,
};
export default DashboardCandidate;
