import PropTypes from "prop-types";
import { useModal } from "../../../contexts/ModalContext";
import FormInputCandidat from "../inputCandidat/formCandidat/FormInputCandidat";

function FormModal({ handleChange, formData }) {
  const { isClicked } = useModal();

  return isClicked ? (
    <form id="connexion" method="POST">
      <FormInputCandidat
        handleChange={handleChange}
        value={formData.email}
        id="email"
        label="E-mail"
        type="email"
        name="email"
      />
      <FormInputCandidat
        handleChange={handleChange}
        value={formData.password}
        id="password"
        label="Mot de passe"
        type="password"
        name="password"
      />
    </form>
  ) : (
    <form id="registration" method="POST">
      <FormInputCandidat
        handleChange={handleChange}
        value={formData.firstname}
        id="firstname"
        label="Prénom"
        type="text"
        name="firstname"
      />
      <FormInputCandidat
        handleChange={handleChange}
        value={formData.lastname}
        id="lastname"
        label="Nom"
        type="text"
        name="lastname"
      />
      <FormInputCandidat
        handleChange={handleChange}
        value={formData.email}
        id="email"
        label="E-mail"
        type="email"
        name="email"
      />
      <FormInputCandidat
        handleChange={handleChange}
        value={formData.password}
        id="password"
        label="Mot de passe"
        type="password"
        name="password"
      />
    </form>
  );
}

FormModal.propTypes = {
  handleChange: PropTypes.func.isRequired,
  formData: PropTypes.shape({
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
};

export default FormModal;
