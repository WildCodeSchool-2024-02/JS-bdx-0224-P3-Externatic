import PropTypes from 'prop-types'

export default function SearchInputCandidat({ id, placeholder, iconSrc }) {
  return (
    <section className="relative flex items-center w-96 h-20 max-sm:w-64 max-sm:h-14">
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
        src={iconSrc}
        alt="Search Icon"
        className="absolute left-4 w-6 h-6"
      />
    </section>
  )
}

SearchInputCandidat.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  iconSrc: PropTypes.string.isRequired,
};
