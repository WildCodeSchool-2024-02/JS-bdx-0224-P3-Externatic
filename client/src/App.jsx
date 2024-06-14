import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
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
  const navOpen = isOpen
    ? "block bg-[var(--primary-color)] min-h-screen min-w-56 absolute translate-x-0 top-0 delay-75 duration-500 text-[var(--text-content-size)] text-[var(--primary-background-color)]"
    : "block duration-500 bg-[var(--primary-color)] min-h-screen min-w-56 absolute -translate-x-56 top-0 text-[var(--text-content-size)] text-[var(--primary-background-color)]";

  const navVisible = isVisible ? "block" : "hidden";
  return (
    <>
      <Navbar
        handleChange={handleChange}
        isOpen={isOpen}
        isVisible={isVisible}
        navOpen={navOpen}
        navVisible={navVisible}
      />
      <Outlet />
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default App;
