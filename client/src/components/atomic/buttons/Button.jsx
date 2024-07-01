import PropTypes from "prop-types";

function Button({ name, img, apply, handleChange, buttonAnimate }) {
  return (
    <button
      onClick={handleChange}
      className={`${apply} ${buttonAnimate}`}
      type="button"
    >
      {name}
      <img src={img} alt="" className="w-6 max-md:w-4" />
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string,
  apply: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  buttonAnimate: PropTypes.string,
};

Button.defaultProps = {
  img: "",
  buttonAnimate: "buttonAnimate",
};

export default Button;
