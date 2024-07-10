import PropTypes from "prop-types";

function Tag({ text, apply }) {
  return (
    <p className={`px-2 text-center w-max max-md:text-base ${apply}`}>{text}</p>
  );
}

Tag.propTypes = {
  text: PropTypes.string.isRequired,
  apply: PropTypes.string.isRequired,
};

export default Tag;
