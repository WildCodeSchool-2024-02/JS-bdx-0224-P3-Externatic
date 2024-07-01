import { useModal } from "../../../contexts/ModalContext";
import Button from "../buttons/Button";

function ButtonRegisterConnexion() {
  const { isClicked, handleChangeModal } = useModal();

  return isClicked ? (
    <Button
      form="connexion"
      name="Connexion"
      apply="big"
      type="submit"
      onClick={handleChangeModal}
    />
  ) : (
    <Button
      form="registration"
      name="Valider mon inscription"
      apply="big"
      type="submit"
      onClick={handleChangeModal}
    />
  );
}

export default ButtonRegisterConnexion;
