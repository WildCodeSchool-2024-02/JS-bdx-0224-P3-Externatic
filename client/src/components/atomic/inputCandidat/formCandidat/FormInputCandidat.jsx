import PropTypes from "prop-types";

export default function FormInputCandidat({
  id,
  label,
  type,
  handleChange,
  name,
  value,
}) {
  return (
    <label
      className="text-[var(--primary-color)] font-medium max-md:text-sm max-md:font-normal w-72 flex flex-col mb-4 gap-4 max-sm:w-64"
      htmlFor={id}
    >
      {label}
      <input
        className=" h-10 border-2 outline-[var(--primary-color)] rounded-s px-2"
        id={id}
        type={type}
        onChange={handleChange}
        name={name}
        value={value}
      />
    </label>
  );
}

FormInputCandidat.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired,
};
