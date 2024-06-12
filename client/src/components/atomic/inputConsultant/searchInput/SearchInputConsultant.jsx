import PropTypes from 'prop-types'

export default function SearchInputConsultant({ id, placeholder }) {
  return (
    <section className="relative flex items-center w-[37rem] h-24 max-sm:w-64 max-sm:h-14">
      <label className="hidden" htmlFor={id}>
        Search
      </label>
      <input
        className="bg-[var(--secondary-background-color)] w-full h-full pl-12 pr-4 rounded-lg outline-[var(--primary-color)]"
        id={id}
        type="search"
        placeholder={placeholder}
      />
      <img
        src="./src/assets/images/ICONSEARCH.svg"
        alt="Search Icon"
        className="absolute left-4 w-6 h-6"
      />
    </section>
  )
}

SearchInputConsultant.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};