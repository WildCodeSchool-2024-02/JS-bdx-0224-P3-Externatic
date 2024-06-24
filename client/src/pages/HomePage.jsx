import { useState } from "react";

import Presentation from "../components/Presentation";
import Slider from "../components/Slider";
import Values from "../components/Values";
import ModalRegistration from "../components/ModalRegistration";

function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleChange = () => {
    setIsVisible(true);
    if (isVisible) {
      setTimeout(() => {
        setIsVisible(false);
      }, 500);
    }
    setTimeout(() => {
      setIsOpen(!isOpen);
    }, 1);
  };

  const modalOpen = isOpen
    ? "absolute opacity-100 delay-75 duration-500 top-96 md:top-56 bg-[var(--primary-background-color)] z-50 pb-16 flex flex-col items-center mt-6 border border-[var(--primary-color)] rounded-md shadow-lg custom-shadow mx-4 md:mx-0"
    : "absolute duration-500 opacity-0 top-1/2 md:top-96 bg-[var(--primary-background-color)] z-50 pb-16 flex flex-col items-center mt-6 border border-[var(--primary-color)] rounded-md shadow-lg custom-shadow mx-4 md:mx-0";

  const modalVisible = isVisible ? "block" : "hidden";

  return (
    <main className="relative">
      <Presentation
        handleChange={handleChange}
        modalOpen={modalOpen}
        modalVisible={modalVisible}
      />
      <ModalRegistration
        handleChange={handleChange}
        modalOpen={modalOpen}
        modalVisible={modalVisible}
      />
      <Values />
      <Slider />
    </main>
  );
}

export default HomePage;
