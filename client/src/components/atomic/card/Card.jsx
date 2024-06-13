import ButtonOffer from "../buttons/ButtonOffer";
import Tag from "../tag/Tag";

export default function Card() {
  return (
    <article className=" max-w-xl border border-[var(--primary-color)] rounded-md shadow-lg custom-shadow min-h-44 p-4 bg-[var(--secondary-background-color)] mb-4 max-md:max-w-96 ">
      <header className="flex justify-between items-center mb-4">
        <h3 className="text-[var(--primary-color)] max-md:text-lg">Title-3 </h3>
        <img src="./src/assets/images/signet.svg" alt="" />
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
      <footer className="flex justify-center">
        <ButtonOffer />
      </footer>
    </article>
  );
}
