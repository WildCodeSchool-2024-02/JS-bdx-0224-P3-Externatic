import Button from "../buttons/Button";
import Tag from "../tag/Tag";

export default function CardConsultant( ) {
  return (
    <article className="animate-fade-up animate-once animate-duration-700 animate-delay-200 animate-ease-in-out animate-alternate max-w-xl border border-[var(--primary-color)] rounded-md shadow-lg custom-shadow min-h-44 p-4 bg-[var(--secondary-background-color)] mb-4 max-md:max-w-96 ">
      <header className="flex justify-between items-center mb-4">
        <h3 className="text-[var(--primary-color)] max-md:text-lg">c</h3>
        <Tag text="DISPONIBLE" apply="tagStatusGreen" />
      </header>
      <ul className="flex gap-1 relative mb-4">
        <li>
          <Tag apply="tag" />
        </li>
        <li>
          <Tag apply="tag" />
        </li>
        <li>
          <Tag apply="tag" />
        </li>
      </ul>
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
