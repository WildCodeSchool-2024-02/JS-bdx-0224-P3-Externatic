import PropTypes from "prop-types";
import { useModal } from "../../../contexts/ModalContext";
import FormRegistration from "../formCandidat/FormRegistration";
import FormConnexion from "../formCandidat/FormConnexion";

function FormModal({
  handleChange,
  formData,
  handleSubmitLogin,
  handleSubmitRegistration,
}) {
  const { isClicked } = useModal();

  return isClicked ? (
    <FormConnexion
      handleChange={handleChange}
      formData={formData}
      handleSubmitLogin={handleSubmitLogin}
    />
  ) : (
    <FormRegistration
      handleChange={handleChange}
      formData={formData}
      handleSubmitRegistration={handleSubmitRegistration}
    />
  );
}

FormModal.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmitLogin: PropTypes.func.isRequired,
  handleSubmitRegistration: PropTypes.func.isRequired,
  formData: PropTypes.shape({
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
};

export default FormModal;
