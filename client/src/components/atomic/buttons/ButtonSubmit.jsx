import PropTypes from "prop-types";
import { useModal } from "../../../contexts/ModalContext";

function ButtonSubmit({
  apply,
  handleSubmitRegistration,
  handleSubmitLogin,
}) {
  const { isClicked } = useModal();

  return isClicked ? (
    <button
      className={`${apply} buttonAnimate`}
      type="submit"
      onClick={handleSubmitLogin}
    >
      Connexion
    </button>
  ) : (
    <button
      className={`${apply} buttonAnimate`}
      type="submit"
      onClick={handleSubmitRegistration}
    >
      {" "}
      Valider mon inscription
    </button>
  );
}

ButtonSubmit.propTypes = {
  apply: PropTypes.string.isRequired,
  handleSubmitRegistration: PropTypes.func,
  handleSubmitLogin: PropTypes.func,
};

ButtonSubmit.defaultProps = {
  handleSubmitRegistration: null,
  handleSubmitLogin: null,
};
export default ButtonSubmit;
