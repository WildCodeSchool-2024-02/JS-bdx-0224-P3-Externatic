import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import NavAccess from "../services/NavAccess";
import FormInputCandidat from "./atomic/inputCandidat/formCandidat/FormInputCandidat";
import CheckBox from "./atomic/checkBox/CheckBox";
import Button from "./atomic/buttons/Button";

function ModalRegistration({ handleChange }) {
  const menuRef = useRef(null);

  useEffect(() => {
    if (menuRef.current) {
      const navAccessKeyboard = new NavAccess(menuRef);
      navAccessKeyboard.addEventListener();

      return () => {
        navAccessKeyboard.removeEventListener();
      };
    }
    return () => {};
  }, [menuRef]);

  return (
    <section
      ref={menuRef}
      className="flex relative flex-col items-center mt-6 border border-[var(--primary-color)] rounded-md shadow-lg custom-shadow max-w-screen-md mx-auto pb-20"
    >
      <header className="mb-10">
        <button
          type="button"
          className="w-10 block absolute right-1 top-1 "
          onClick={handleChange}
        >
          <img
            src="/src/assets/images/cross-svgrepo-com.svg"
            className="stroke-[var(--primary-color)]"
            alt="fermer le menu"
          />
        </button>
        <h3 className="my-10 text-center text-[var(--primary-color)] font-semibold">
          INSCRIVEZ-VOUS EN UN CLIC !
        </h3>
        <h4 className="inline font-medium text-[var(--secondary-color)] mx-4">
          SE CONNECTER
        </h4>
        <h4 className="inline font-medium text-[var(--secondary-color)] mx-4 underline">
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
          onClick={handleChange}
        />
      </footer>
    </section>
  );
}

ModalRegistration.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default ModalRegistration;
