import PropTypes from "prop-types";

function Button({ name, img, alt, apply }) {
  return (
    <button className={`${apply} buttonAnimate`} type="button">
      {name}
      <img src={img} alt={alt} className="w-6 max-md:w-4" />
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  apply: PropTypes.string.isRequired,
};

export default Button;
