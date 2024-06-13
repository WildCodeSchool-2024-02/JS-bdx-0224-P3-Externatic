// src/hooks/useKeyboardNavigation.js
import { useEffect } from "react";

const NavAccess = (menuRef) => {
  useEffect(() => {
    const menuRefCurrent = menuRef.current;
    const focusableElementsString = "a, button";
    const menuLinks = menuRefCurrent.querySelectorAll(focusableElementsString);
    const firstElement = menuLinks[0];
    const lastElement = menuLinks[menuLinks.length - 1];

    const handleTabKey = (e) => {
      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          (document.activeElement === lastElement);
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    menuRefCurrent.addEventListener("keydown", handleTabKey);

    return () => {
      menuRefCurrent.removeEventListener("keydown", handleTabKey);
    };
  }, [menuRef]);
};

export default NavAccess;
