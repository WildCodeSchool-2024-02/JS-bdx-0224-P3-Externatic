import ButtonSmall from "../buttons/ButtonSmall";
import Tag from "../tag/Tag";
import TagStatus from "../tag/TagStatus";

export default function Card() {
  return (
    <article className="animate-fade-up animate-once animate-duration-700 animate-delay-200 animate-ease-in-out animate-alternate max-w-xl border border-[var(--primary-color)] rounded-md shadow-lg custom-shadow min-h-44 p-4 bg-[var(--secondary-background-color)] mb-4 max-md:max-w-96 ">
      <header className="flex justify-between items-center mb-4">
        <h3 className="text-[var(--primary-color)] max-md:text-lg">Prénom Nom</h3>
        <TagStatus
          text="DISPONIBLE"
          textColor="text-[var(--validation-color-ok)]"
          borderColor="border-[var(--validation-color-ok)]"
        />
      </header>
      <ul className="flex gap-1 relative mb-4">
        <Tag tag="REACT" />
        <Tag tag="JAVA" />
        <Tag tag="CSS" />
      </ul>
      <p className="text-content mb-4 max-md:text-sm">
        {" "}
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
        perspiciatis officia consequuntur expedita, sequi doloremque dolor, aut
        quasi exercitationem doloribus dicta, facere ipsum rerum ratione cumque.
        Aperiam debitis sit eaque.
      </p>
      <footer className="flex justify-center gap-4">
        <ButtonSmall
          name="Téléphone"
          img="/src/assets/images/phone.svg"
          alt="téléphone"
        />
        <ButtonSmall
          name="Email"
          img="/src/assets/images/mail.svg"
          alt="Email"
        />
        <ButtonSmall name="CV" img="/src/assets/images/cv.svg" alt="cv" />
      </footer>
    </article>
  );
}
