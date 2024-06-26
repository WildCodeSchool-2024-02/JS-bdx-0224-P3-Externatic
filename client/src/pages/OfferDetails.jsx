import { useLoaderData } from "react-router-dom";
import Tag from "../components/atomic/tag/Tag";
import ReturnButton from "../components/atomic/buttons/ReturnButton";


function OfferDetails() {
const offerData = useLoaderData();

  return (
    <main>
      <ReturnButton source="/offers"/>
      <article>
        <header>
          <h1 className="text-center my-16">{offerData.title}</h1>
          <label className="peer text-[0] cursor-pointer">
            favoris
            <input type="checkbox" className="peer hidden" />
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
          <Tag text="REACT" apply="tag" />
          <Tag text="REACT" apply="tag" />
          <Tag text="REACT" apply="tag" />
        </header>
      </article>
    </main>
  );
}

export default OfferDetails;
