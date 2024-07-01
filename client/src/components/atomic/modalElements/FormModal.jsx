import { useModal } from "../../../contexts/ModalContext";
import FormInputCandidat from "../inputCandidat/formCandidat/FormInputCandidat";

function FormModal() {
  const { isClicked } = useModal();

  return isClicked ? (
    <form id="connexion" method="post">
      <FormInputCandidat id="email" label="E-mail" type="email" />
      <FormInputCandidat id="password" label="Mot de passe" type="password" />
    </form>
  ) : (
    <form id="registration" method="post">
      <FormInputCandidat id="firstName" label="Prénom" type="text" />
      <FormInputCandidat id="lastName" label="Nom" type="text" />
      <FormInputCandidat id="email" label="E-mail" type="email" />
      <FormInputCandidat id="password" label="Mot de passe" type="password" />
      <FormInputCandidat
        id="confirmPassword"
        label="Confirmer votre mot de passe"
        type="password"
      />
    </form>
  );
}

export default FormModal;
