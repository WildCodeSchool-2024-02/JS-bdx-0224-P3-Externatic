import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import NavAccess from "../services/NavAccess";

function Navbar({ handleChange, navOpen, navVisible }) {
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
    <>
      <button
        type="button"
        className="block absolute left-4 top-4 md:hidden"
        onClick={handleChange}
      >
        <img src="/src/assets/images/menuBurger.svg" alt="ouvrir le menu"/>
      </button>
      <nav
        ref={menuRef}
        className={`${navOpen} ${navVisible}
          md:min-h-20 md:min-w-full md:bg-[var(--secondary-background-color)] md:translate-x-0 md:flex`}
      >
        <button
          type="button"
          className="block absolute right-5 top-2 w-10 md:hidden"
          onClick={handleChange}
          aria-label="Fermer le menu"
        >
          <img
            src="/src/assets/images/cross-svgrepo-com.svg"
            alt="icone fermeture menu"
          />
        </button>
        <Link to="/" className="hidden md:min-w-1 md:max-w-10 md:ml-6 md:flex md:items-center">
          <img
            src="/src/assets/Externatic.svg"
            alt="logo externatic"
          />
        </Link>
        <ul
          className="text-[var(--primary-background-color)] flex flex-col gap-8 text-center mt-20
        md:flex-row md:gap-10 md:ml-auto md:mr-6 md:text-[var(--text-color)] md:self-center md:mt-0"
        >
          <li>
            <Link to="/" onClick={handleChange}>
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/offer" onClick={handleChange}>
              Rechercher
            </Link>
          </li>
          <li>
            <Link to="/dashboard/:id" onClick={handleChange}>
              Profil
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={handleChange}
              className="bg-[var(--secondary-background-color)] pt-1 pb-1 pr-2 pl-2 rounded-md text-[var(--primary-color)] font-medium 
              md:bg-[var(--primary-color)] md:text-[var(--primary-background-color)] md:-mr-8"
            >
              S'inscrire
            </Link>
          </li>
          <li>
            <Link to="/" onClick={handleChange}>
              Se connecter
            </Link>
          </li>
            <img
            className="hidden self-center max-w-7"
              src="/src/assets/images/iconDisconnect.svg"
              alt="icone profil non connecté"
            />
        </ul>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  handleChange: PropTypes.func.isRequired,
  navOpen: PropTypes.string.isRequired,
  navVisible: PropTypes.string.isRequired,
};

export default Navbar;
