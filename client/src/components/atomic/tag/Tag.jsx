import PropTypes from "prop-types"

function Tag({ tag }) {
  return (
    <p className="px-2 bg-[var(--secondary-color)] text-[var(--primary-background-color)] text-center max-md:text-xs">
      {tag}
    </p>
  );
}

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
};

export default Tag;
