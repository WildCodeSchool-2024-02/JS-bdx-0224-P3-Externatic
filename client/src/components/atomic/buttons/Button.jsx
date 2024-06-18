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
  img: PropTypes.string,
  alt: PropTypes.string,
  apply: PropTypes.string.isRequired,
};

Button.defaultProps = {
  img: '',
  alt: 'default alt text',
};

export default Button;
