import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useModal } from "../contexts/ModalContext";

import NavAccess from "../services/NavAccess";
import FormInputCandidat from "./atomic/inputCandidat/formCandidat/FormInputCandidat";
import CheckBox from "./atomic/checkBox/CheckBox";
import Button from "./atomic/buttons/Button";

function ModalRegistration() {
  const modalRef = useRef(null);

  const {handleChangeModal, modalOpen, modalVisible} = useModal()

  useEffect(() => {
    if (modalRef.current) {
      const navAccessKeyboard = new NavAccess(modalRef);
      navAccessKeyboard.addEventListener();

      return () => {
        navAccessKeyboard.removeEventListener();
      };
    }
    return () => {};
  }, [modalRef]);

  return (
    <section
      ref={modalRef}
      className={` ${modalOpen} ${modalVisible} md:left-1/2 md:transform md:-translate-x-1/2`}
    >
      <header className="mb-10">
        <button
          type="button"
          className="w-10 block absolute right-1 top-1 mr-5"
          onClick={handleChangeModal}
        >
          <svg
            width="50px"
            height="50px"
            viewBox="0 -0.5 25 25"
            fill="#010101"
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />

            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z"
                fill="#010101"
              />{" "}
            </g>
          </svg>
        </button>
        <h3 className="mt-16 mb-10 mx-4 text-center text-[var(--primary-color)] md:text-xl text-lg font-semibold">
          INSCRIVEZ-VOUS EN UN CLIC !
        </h3>
        <h4 className="font-medium text-center mb-4 md:inline md:text text-[var(--secondary-color)] mx-4">
          SE CONNECTER
        </h4>
        <h4 className="font-medium text-center md:inline text-[var(--secondary-color)] mx-4 underline">
          CRÉER UN COMPTE
        </h4>
      </header>
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
      <footer className="mt-10 mx-4 flex flex-col gap-10 items-center">
        <CheckBox
          id="CGU"
          apply="bigCheckbox"
          labelContent={
            <>
              J’ai lu et j’accepte les{" "}
              <Link
                to="/"
                target="_blank"
                className="text-[var(--primary-color)]"
              >
                CGU
              </Link>{" "}
              et la{" "}
              <Link
                to="/"
                target="_blank"
                className="text-[var(--primary-color)]"
              >
                politique de protection des données
              </Link>
            </>
          }
        />
        <Button
          form="registration"
          name="Valider mon inscription"
          img=""
          apply="big"
          type="submit"
          onClick={handleChangeModal}
        />
      </footer>
    </section>
  );
}

export default ModalRegistration;
