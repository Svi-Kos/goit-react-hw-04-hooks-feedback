import PropTypes from 'prop-types';
import s from '../FeedbackOptions/FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback, showStatistics }) => {
  return (
    <div>
      {options.map(option => (
        <button
          type="button"
          className={s.button}
          key={option.id}
          onClick={() => {
            onLeaveFeedback(option.label);
            showStatistics();
          }}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  option: PropTypes.objectOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default FeedbackOptions;
