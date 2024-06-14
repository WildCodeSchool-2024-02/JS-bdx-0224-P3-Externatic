import ButtonOffer from "../buttons/ButtonOffer";
import Tag from "../tag/Tag";

export default function Card() {
  return (
    <article className="animate-fade-up animate-once animate-duration-700 animate-delay-200 animate-ease-in-out animate-alternate max-w-xl border border-[var(--primary-color)] rounded-md shadow-lg custom-shadow min-h-44 p-4 bg-[var(--secondary-background-color)] mb-4 max-md:max-w-96 ">
      <header className="flex justify-between items-center mb-4">
        <h3 className="text-[var(--primary-color)] max-md:text-lg">Title-3 </h3>
        <label className="peer text-[0] cursor-pointer">favoris
          <input type="checkbox" className="peer hidden"/>
        <svg
          className=" peer-checked:fill-[var(--primary-color)] peer-checked:animate-jump animate-once animate-duration-500 animate-ease-in-out animate-alternate"
          width="23"
          height="29"
          viewBox="0 0 13 19"
          fill="#F9F9F9"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 3.92893C1 2.9037 1 2.39109 1.17128 1.99952C1.32193 1.65506 1.56233 1.37502 1.85802 1.19952C2.19416 1 2.6342 1 3.51429 1H9.48571C10.3658 1 10.8059 1 11.142 1.19952C11.4377 1.37502 11.6781 1.65506 11.8287 1.99952C12 2.39109 12 2.9037 12 3.92893V17.4752L6.5 12.8988L1 17.4752V3.92893Z"
            stroke="#CA2061"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
        </label>
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
