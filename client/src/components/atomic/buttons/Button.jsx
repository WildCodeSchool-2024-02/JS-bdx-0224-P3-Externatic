import PropTypes from "prop-types";

function Button({ name, img, apply, handleChange, buttonAnimate }) {
  return (
    <button
      onClick={handleChange}
      className={`${apply} ${buttonAnimate}`}
      type="button"
    >
      {name}
      {img && <img src={img} alt="" className="w-4" />}
    </button>
  );
}
Button.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string,
  apply: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  buttonAnimate: PropTypes.bool,
};
Button.defaultProps = {
  buttonAnimate: true,
  img: null,
};
export default Button;
