import { Link } from "react-router-dom";
import linkedin from "../assets/images/linkedin.svg";
import instagram from "../assets/images/instagram.svg";
import x from "../assets/images/twitter.svg";

function Footer() {
  return (
    <footer
      className="mt-auto bg-[var(--secondary-color)] min-w-full flex flex-col gap-5 text-center text-[var(--primary-background-color)] pb-6
    md:flex-row md:min-h-20 md:pb-0 md:justify-between"
    >
      <ul className="flex flex-row self-center mt-6 gap-4 md:mt-0 md:ml-10">
        <li>
          <a
            href="https://www.linkedin.com/company/externatic/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={linkedin}
              alt="lien vers la page linkedin de externatic"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/externatic/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={instagram}
              alt="lien vers la page instagram de externatic"
            />
          </a>
        </li>
        <li>
          <a href="https://x.com/Externatic" target="_blank" rel="noreferrer">
            <img src={x} alt="lien vers la page X de externatic" />
          </a>
        </li>
        <li>
          <Link to="/contact" className="md:self-center ml-10">
            Nous contacter
          </Link>
        </li>
      </ul>
      <ul className=" md:flex md:flex-row md:gap-6 md:self-center md:mr-10">
        <li>
          <Link to="/CGU">CGU</Link>
        </li>
        <li>
          <Link to="/protectionDataPolicy">Politique de confidentialité</Link>
        </li>
        <li>
          <Link to="/legalMentions">Mentions légales</Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
