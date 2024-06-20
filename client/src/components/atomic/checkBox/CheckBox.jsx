import PropTypes from "prop-types";

function CheckBox({ apply }) {
  return (
    <label className="text-[0]">
      Checkbox
      <input
        type="checkbox"
        className={` ${apply} accent-[var(--primary-color)] hover:accent-[var(--primary-color)]`}
      />
    </label>
  );
}

CheckBox.propTypes = {
  apply: PropTypes.string.isRequired,
};

export default CheckBox;
