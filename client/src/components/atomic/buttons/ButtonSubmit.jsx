import PropTypes from "prop-types";

function ButtonSubmit({ apply, name }) {
  return (
    <button
      className={`${apply} buttonAnimate`}
      type="submit"
    >
      {name}
    </button>
  );
}

ButtonSubmit.propTypes = {
  apply: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ButtonSubmit;