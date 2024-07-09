import PropTypes from "prop-types";
import Button from "../buttons/Button";
import Tag from "../tag/Tag";

export default function CardConsultant({
  name = "Nom Prénom",
  textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam perspiciatis officia consequuntur expedita, sequi doloremque dolor, aut quasi exercitationem doloribus dicta, facere ipsum rerum ratione cumque.Aperiam debitis sit eaque.",
}) {
  return (
    <article className="animate-fade-up animate-once animate-duration-700 animate-delay-200 animate-ease-in-out animate-alternate max-w-xl border border-[var(--primary-color)] rounded-md shadow-lg custom-shadow min-h-44 p-4 bg-[var(--secondary-background-color)] mb-4 max-md:max-w-96 ">
      <header className="flex justify-between items-center mb-4">
        <h3 className="text-[var(--primary-color)] max-md:text-lg">{name}</h3>
        <Tag text="DISPONIBLE" apply="tagStatusGreen" />
      </header>
      <ul className="flex gap-1 relative mb-4">
        <li>
          <Tag text="REACT" apply="tag" />
        </li>
        <li>
          <Tag text="JAVA" apply="tag" />
        </li>
        <li>
          <Tag text="CSS" apply="tag" />
        </li>
      </ul>
      <p className="text-content mb-4 max-md:text-sm">{textContent}</p>
      <footer className="flex justify-center gap-4">
        <Button
          name="Téléphone"
          img="/src/assets/images/phone.svg"
          apply="small"
        />
        <Button name="Email" img="/src/assets/images/mail.svg" apply="small" />
        <Button name="CV" img="/src/assets/images/cv.svg" apply="small" />
      </footer>
    </article>
  );
}

CardConsultant.propTypes = {
  name: PropTypes.string.isRequired,
  textContent: PropTypes.string.isRequired,
};
