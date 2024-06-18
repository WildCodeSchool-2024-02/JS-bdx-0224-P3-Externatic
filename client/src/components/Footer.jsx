import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="relative z-10 mt-6 bottom-0 bg-[var(--secondary-color)] min-w-full flex flex-col gap-5 text-center text-[var(--primary-background-color)] pb-6
    md:flex-row md:min-h-20 md:pb-0 md:justify-between"
    >
      <ul className="flex flex-row self-center mt-6 gap-4 md:mt-0 md:ml-10">
        <li>
          <a
            href="https://www.linkedin.com/company/externatic/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/src/assets/images/linkedin.svg" alt="lien vers la page linkedin de externatic" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/externatic/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/src/assets/images/instagram.svg" alt="lien vers la page instagram de externatic" />
          </a>
        </li>
        <li>
          <a href="https://x.com/Externatic" target="_blank" rel="noreferrer">
            <img src="/src/assets/images/twitter.svg" alt="lien vers la page X de externatic" />
          </a>
        </li>
      </ul>
      <Link to="/" className="md:self-center">
        Nous contacter
      </Link>
      <ul className=" md:flex md:flex-row md:gap-6 md:self-center md:mr-10">
        <li>
          <Link to="/">CGU</Link>
        </li>
        <li>
          <Link to="/">Politique de confidentialité</Link>
        </li>
        <li>
          <Link to="/">Mentions légales</Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
