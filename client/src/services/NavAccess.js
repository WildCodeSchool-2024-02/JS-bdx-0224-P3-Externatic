class NavAccess {
  constructor(menuRef) {
    this.menuRef = menuRef;
    this.focusableElementsString = "a, button";
  }

  handleTabKey = (e) => {
    const menuRefCurrent = this.menuRef.current;
    if (menuRefCurrent) {
      const menuLinks = menuRefCurrent.querySelectorAll(
        this.focusableElementsString
      );
      const firstElement = menuLinks[0];
      const lastElement = menuLinks[menuLinks.length - 1];

      if (e.key === "Tab") {
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
        if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }
  };

  addEventListener() {
    const menuRefCurrent = this.menuRef.current;
    if (menuRefCurrent) {
      menuRefCurrent.addEventListener("keydown", this.handleTabKey);
    }
  }

  removeEventListener() {
    const menuRefCurrent = this.menuRef.current;
    if (menuRefCurrent) {
      menuRefCurrent.removeEventListener("keydown", this.handleTabKey);
    }
  }
}

export default NavAccess;
