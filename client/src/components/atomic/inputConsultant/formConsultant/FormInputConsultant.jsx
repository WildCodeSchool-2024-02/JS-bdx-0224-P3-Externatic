import PropTypes from "prop-types";

export default function FormInputConsultant({ id, label, type }) {
  return (
    <section className="w-[34rem] flex flex-col mb-4 gap-4 max-sm:w-64 max-md:w-96">
      <label
        className="text-[var(--primary-color)] font-medium max-md:text-sm max-md:font-normal"
        htmlFor={id}
      >
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          className="h-72 border-2 outline-[var(--primary-color)] rounded-s px-2 py-2"
          id={id}
        />
      ) : (
        <input
          className="h-12 border-2 outline-[var(--primary-color)] rounded-s px-2"
          id={id}
          type={type}
        />
      )}
    </section>
  );
}
FormInputConsultant.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "textarea"]).isRequired,
};