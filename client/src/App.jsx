import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const navOpen =
    "block bg-[var(--primary-color)] min-h-screen min-w-56 absolute translate-x-0 top-0 delay-75 duration-500 text-[var(--text-content-size)] text-[var(--primary-background-color)]";
  const navNotOpen =
    "block duration-500 bg-[var(--primary-color)] min-h-screen min-w-56 absolute -translate-x-56 top-0 text-[var(--text-content-size)] text-[var(--primary-background-color)]";
  const navVisible = "block";
  const navNotVisible = "hidden";

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
  return (
    <>
      <Navbar
        handleChange={handleChange}
        isOpen={isOpen}
        isVisible={isVisible}
        navOpen={navOpen}
        navNotOpen={navNotOpen}
        navVisible={navVisible}
        navNotVisible={navNotVisible}
      />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
