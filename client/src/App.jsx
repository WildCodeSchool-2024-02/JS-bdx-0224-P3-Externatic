import { Outlet } from "react-router-dom";
import { useState } from "react";
import { ModalProvider } from "./contexts/ModalContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const handleChangeNav = () => {
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
  const isNavOpen = isOpen
    ? "block bg-[var(--primary-color)] min-h-full min-w-56 absolute z-20 translate-x-0 top-0 delay-75 duration-500 text-[var(--text-content-size)] text-[var(--primary-background-color)]"
    : "block duration-500 bg-[var(--primary-color)] min-h-screen min-w-56 absolute z-20 -translate-x-56 top-0 text-[var(--text-content-size)] text-[var(--primary-background-color)]";

  const isNavVisible = isVisible ? "block" : "hidden";

  return (
    <>
      <ModalProvider>
        <header className="bg-[var(--secondary-background-color)] w-full h-16">
          <Navbar
            handleChange={handleChangeNav}
            isNavOpen={isNavOpen}
            isNavVisible={isNavVisible}
          />
        </header>
        <Outlet />
      </ModalProvider>
      <Footer />
    </>
  );
}

export default App;
