import PropTypes from "prop-types";

function CheckBox({ apply }) {
  return (
    <input
      type="checkbox"
      className={` ${apply} accent-[var(--primary-color)] hover:accent-[var(--primary-color)]`}
    />
  );
}

CheckBox.propTypes = {
  apply: PropTypes.string.isRequired,
};

export default CheckBox;
