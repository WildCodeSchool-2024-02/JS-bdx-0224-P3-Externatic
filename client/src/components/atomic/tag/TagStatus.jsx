import PropTypes from 'prop-types';

function TagStatus ({ text, textColor, borderColor }) {
  return (
    <p className={`px-2 border text-center max-md:text-xs ${textColor} ${borderColor}`}>
      {text}
    </p>
  );
};

TagStatus.propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  borderColor: PropTypes.string,
};

TagStatus.defaultProps = {
  textColor: 'text-[var(--validation-color-ok)]',
  borderColor: 'border-[var(--green-color)]',
};

export default TagStatus;