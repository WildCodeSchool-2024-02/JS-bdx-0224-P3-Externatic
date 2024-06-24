import { useState } from "react";

import Presentation from "../components/Presentation";
import Slider from "../components/atomic/slider/Slider";
import Values from "../components/Values";
import ModalRegistration from "../components/ModalRegistration";

function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleChange = () => {

    setIsVisible(true);
    setIsOpen(true);
  };

  const modalOpen = isOpen
    ? "block bg-[var(--primary-color)] min-h-full min-w-56 absolute z-20 translate-x-0 top-0 delay-75 duration-500 text-[var(--text-content-size)] text-[var(--primary-background-color)]"
    : "block duration-500 bg-[var(--primary-color)] min-h-screen min-w-56 absolute z-20 -translate-x-56 top-0 text-[var(--text-content-size)] text-[var(--primary-background-color)]";

  const modalVisible = isVisible ? "block" : "hidden";

  return (
    <>
      <Presentation handleChange={handleChange} modalOpen={modalOpen} modalVisible={modalVisible}/>
      <ModalRegistration
        handleChange={handleChange} modalOpen={modalOpen} modalVisible={modalVisible}
      />
      <Values />
      <Slider />
    </>
  );
}

export default HomePage;
