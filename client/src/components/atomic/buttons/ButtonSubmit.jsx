import PropTypes from "prop-types";

function ButtonSubmit({ apply, name, onClick }) {
  return (
    <button
      className={`${apply} buttonAnimate`}
      type="submit"
      onClick={onClick}
    >
      {name}
    </button>
  );
}

ButtonSubmit.propTypes = {
  apply: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ButtonSubmit;