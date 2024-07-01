import { useModal } from "../../../contexts/ModalContext";

function TitleModal() {
  const { isClicked } = useModal();
  return isClicked ? (
    <h2 className="mt-10 font-medium md:text-xl text-center text-lg mb-4 text-[var(--secondary-color)] underline">
      SE CONNECTER
    </h2>
  ) : (
    <h2 className="mt-10 font-medium md:text-xl text-lg text-center text-[var(--secondary-color)] underline">
      CRÉER UN COMPTE
    </h2>
  );
}

export default TitleModal;
