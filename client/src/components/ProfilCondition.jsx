import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "./atomic/buttons/Button";

function ProfilCondition({ handleChangeNav, handleClick, authId, userData }) {
  return (
    <>
      {userData.auth?.role === "consultant" && (
        <Link to={`/dashboardConsultant/${authId}`} onClick={handleChangeNav}>
          Gestion
        </Link>
      )}
      {userData.auth?.role === "candidat" && (
        <Link to={`/dashboardCandidate/${authId}`} onClick={handleChangeNav}>
          Profil
        </Link>
      )}
      {!["consultant", "candidat"].includes(userData.auth?.role) && (
        <Button
          type="button"
          apply="text-[var(--primary-background-color)] md:text-[var(--text-color)]"
          handleChange={handleClick}
          buttonAnimate={false}
          name="Profil"
        />
      )}
    </>
  );
}

ProfilCondition.propTypes = {
  handleChangeNav: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  authId: PropTypes.string.isRequired,
  userData: PropTypes.shape({
    auth: PropTypes.shape({
      id: PropTypes.string,
      role: PropTypes.string,
    }),
  }).isRequired,
};

export default ProfilCondition;
