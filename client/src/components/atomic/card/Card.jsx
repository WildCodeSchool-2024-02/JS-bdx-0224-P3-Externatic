export default function Card() {
  return (
    <article className=" max-w-xl border border-[var(--primary-color)] rounded-md shadow-lg shadow-slate-300 min-h-44 p-4 bg-[var(--secondary-background-color)] mb-4 max-md:max-w-96 ">
            <header className="flex justify-between items-center mb-4">
              <h3 className="text-[var(--primary-color)] max-md:text-lg">
                Title-3{" "}
              </h3>
              <img src="./src/assets/images/signet.svg" alt="" />
            </header>
            <ul className="flex gap-1 relative mb-4">
              <li className="w-14 bg-[var(--secondary-color)] text-[var(--primary-background-color)] text-center max-md:w-10 max-md:text-xs">
                REACT
              </li>
              <li className="w-14 bg-[var(--secondary-color)] text-[var(--primary-background-color)] text-center max-md:w-10 max-md:text-xs">
                REACT
              </li>
              <li className="w-14 bg-[var(--secondary-color)] text-[var(--primary-background-color)] text-center max-md:w-10 max-md:text-xs">
                REACT
              </li>
              <li className="w-28 bg-[var(--secondary-color)] text-[var(--primary-background-color)] text-center absolute right-0 max-md:w-20 max-md:text-xs">
                BORDEAUX
              </li>
            </ul>
            <p className="text-content mb-4 max-md:text-sm">
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
              perspiciatis officia consequuntur expedita, sequi doloremque
              dolor, aut quasi exercitationem doloribus dicta, facere ipsum
              rerum ratione cumque. Aperiam debitis sit eaque.
            </p>
            <footer className="flex justify-center">
              <button
                className="w-40 h-8 bg-[var(--primary-color)] font-semibold text-[var(--primary-background-color)] rounded-lg cursor-pointer max-md:w-36 max-md:h-8 max-md:text-sm"
                type="button"
              >
                LOREM IPSUM
              </button>
            </footer>
          </article>
  )
}
