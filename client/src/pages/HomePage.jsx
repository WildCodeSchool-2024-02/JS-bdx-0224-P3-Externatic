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
    ? "z-30"
    : "";

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
