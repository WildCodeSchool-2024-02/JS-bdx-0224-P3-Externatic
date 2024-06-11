import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className={`${!isOpen ? "block absolute right-4 top-4" : "hidden"}`}
        onClick={handleChange}
      >
        <img src="/src/assets/images/menuBurger.svg" alt="" />
      </button>
      <nav
        className={`${isOpen ? "block bg-[var(--primary-color)] min-h-screen min-w-64 absolute right-0 top-0 text-[var(--text-content-size)] text-[var(--primary-background-color)]" : "hidden"}`}
      >
        <ul className="listeNav flex flex-col gap-8 text-center">
          <li className="self-end mr-2 mt-2">
            <button
              className={`${isOpen ? "block w-10" : "hidden"}`}
              onClick={handleChange}
            >
              <img src="/src/assets/images/cross-svgrepo-com.svg" alt="" />
            </button>
          </li>
          <li>
            <Link to="null">Accueil</Link>
          </li>
          <li>
            <Link to="null">Rechercher</Link>
          </li>
          <li>
            <Link to="null">Profil</Link>
          </li>
          <li>
            <Link
              to="null"
              className="bg-[var(--secondary-background-color)] pt-1 pb-1 pr-2 pl-2 rounded-md text-[var(--primary-color)] font-medium"
            >
              S'inscrire
            </Link>
          </li>
          <li>
            <Link to="null">Se connecter</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
