import { useModal } from "../../../contexts/ModalContext";

function ChangeRegisterConnexion() {
  const { isClicked, handleClickModal } = useModal();
  return isClicked ? (
    <p className="flex flex-col">
      Vous n'avez pas de compte ?{" "}
      <button
        className="underline text-[var(--primary-color)]"
        onClick={handleClickModal}
        type="button"
      >
        Inscrivez-vous
      </button>
    </p>
  ) : (
    <p className="flex flex-col">
      Vous avez déjà un compte ?
      <button
        className="underline text-[var(--primary-color)]"
        onClick={handleClickModal}
        type="button"
      >
        Se connecter
      </button>
    </p>
  );
}

export default ChangeRegisterConnexion;
