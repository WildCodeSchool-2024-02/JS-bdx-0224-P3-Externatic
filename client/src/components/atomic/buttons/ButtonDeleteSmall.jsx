import PropTypes from "prop-types";

function ButtonDeleteSmall({ name, img, alt }) {
  return (
    <button
      className=" flex justify-around items-center w-36 h-11 z-30 bg-[var(--primary-color)] rounded-md relative font-semibold text-[var(--primary-background-color)] after:-z-20 after:absolute after:h-1 after:w-1 after:bg-[var(--secondary-color)]  after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-300 after:transition-all after:duration-300 transition-all duration-300 max-md:w-24 max-md:h-8 max-md:font-normal max-md:text-sm"
      type="button"
    >
      {name}
      <img src={img} alt={alt} />
    </button>
  );
}

ButtonDeleteSmall.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ButtonDeleteSmall;
