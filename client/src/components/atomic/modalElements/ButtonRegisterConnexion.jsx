import PropTypes from "prop-types";
import { useModal } from "../../../contexts/ModalContext";
import Button from "../buttons/Button";

function ButtonRegisterConnexion({ type }) {
  const { isClicked, handleChangeModal } = useModal();

  return isClicked ? (
    <Button
      form="connexion"
      name="Connexion"
      apply="big"
      type={type}
      onClick={handleChangeModal}
    />
  ) : (
    <Button
      form="registration"
      name="Valider mon inscription"
      apply="big"
      type={type}
      onClick={handleChangeModal}
    />
  );
}
ButtonRegisterConnexion.propTypes = {
  type: PropTypes.string.isRequired,
};

export default ButtonRegisterConnexion;
