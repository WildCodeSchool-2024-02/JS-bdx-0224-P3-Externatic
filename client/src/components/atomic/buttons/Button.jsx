import PropTypes from "prop-types";

function Button({ name, img, apply }) {
  return (
    <button className={`${apply} buttonAnimate`} type="button">
      {name}
      <img src={img} alt="" className="w-6 max-md:w-4" />
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string,
  apply: PropTypes.string.isRequired,
};

Button.defaultProps = {
  img: ''
};

export default Button;
