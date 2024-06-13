import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import NavAccess from "../services/NavAccess";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const menuRef = useRef(null);

  const handleChange = () => {
    setIsVisible(true);
    if (isVisible) {
      setTimeout(() => {
        setIsVisible(false);
      }, 500);
    }
    setTimeout(() => {
      setIsOpen(!isOpen);
    }, 1);
  };

  NavAccess(menuRef);

  return (
    <>
      <button
        type="button"
        className="block absolute left-4 top-4 md:hidden"
        onClick={handleChange}
        aria-label="Ouvrir le menu"
      >
        <img src="/src/assets/images/menuBurger.svg" alt="icone menu burger" />
      </button>
      <nav
        ref={menuRef}
        className={`
          ${
            isOpen
              ? "block bg-[var(--primary-color)] min-h-screen min-w-56 absolute translate-x-0 top-0 delay-75 duration-500 text-[var(--text-content-size)] text-[var(--primary-background-color)]"
              : "block duration-500 bg-[var(--primary-color)] min-h-screen min-w-56 absolute -translate-x-56 top-0 text-[var(--text-content-size)] text-[var(--primary-background-color)]"
          } 
              ${
                isVisible ? "block" : "hidden"
              } md:min-h-16 md:min-w-full md:bg-[var(--secondary-background-color)] md:translate-x-0 md:flex `}
      >
        <img
          className="hidden md:block md:min-w-1 md:max-w-10 md:ml-6"
          src="/src/assets/Externatic.svg"
          alt="logo externatic"
        />
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
        <ul
          className="text-[var(--primary-background-color)] flex flex-col gap-8 text-center 
        md:flex-row md:gap-10 md:self-center md:justify-end md:ml-auto md:mr-6 md:text-[var(--text-color)] mt-24"
        >
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/">Rechercher</Link>
          </li>
          <li>
            <Link to="/">Profil</Link>
          </li>
          <li>
            <Link
              to="/"
              className="bg-[var(--secondary-background-color)] pt-1 pb-1 pr-2 pl-2 rounded-md text-[var(--primary-color)] font-medium 
              md:bg-[var(--primary-color)] md:text-[var(--primary-background-color)] md:-mr-8"
            >
              S'inscrire
            </Link>
          </li>
          <li>
            <Link to="/">Se connecter</Link>
          </li>
          <li className="self-center max-w-7">
            <img
              src="/src/assets/images/iconDisconnect.svg"
              alt="icone profil non connecté"
            />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
