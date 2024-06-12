function ButtonPostuler() {
  return (
    <button
      className="w-80 h-20 z-30 bg-[var(--primary-color)] rounded-md relative font-semibold text-[var(--primary-background-color)] after:-z-20 after:absolute after:h-1 after:w-1 after:bg-[var(--secondary-color)]  after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 max-md:w-60 max-md:h-11 max-md:text-sm"
      type="button"
    >
      POSTULER
    </button>
  );
}

export default ButtonPostuler;
