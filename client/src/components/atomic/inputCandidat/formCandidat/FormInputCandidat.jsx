import PropTypes from "prop-types";

export default function FormInputCandidat({ id, label, type }) {
  return (
    <section className="w-72 flex flex-col mb-4 gap-4 max-sm:w-64">
      <label className="text-[var(--primary-color)] font-medium max-md:text-sm max-md:font-normal" htmlFor={id}>
        {label}
      </label>
      <input
        className=" h-10 border-2 outline-[var(--primary-color)] rounded-s px-2"
        id={id}
        type={type}
      />
    </section>
  );
}

FormInputCandidat.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
