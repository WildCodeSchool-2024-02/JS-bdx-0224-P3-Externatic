import PropTypes from "prop-types";

function ButtonMedium({ name }) {
  return (
  <button
  className="active:animate-wiggle animate-once animate-duration-500 animate-ease-in-out animate-alternate w-56 h-11 z-30 bg-[var(--primary-color)] rounded-md relative font-semibold text-[var(--primary-background-color)] after:-z-20 after:absolute after:h-1 after:w-1 after:bg-[var(--secondary-color)]  after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-300 after:transition-all after:duration-300 transition-all duration-300 max-md:w-36 max-md:h-8 max-md:text-sm"
  type="button"
>
  {name}
</button>
  )
}

export default ButtonMedium;

ButtonMedium.propTypes = {
  name: PropTypes.string.isRequired,
};

