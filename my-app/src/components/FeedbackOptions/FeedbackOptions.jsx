import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from '../FeedbackOptions/FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  render() {
    return (
      <div>
        {this.props.options.map(option => (
          <button
            type="button"
            className={s.button}
            key={option.id}
            onClick={() => {
              this.props.onLeaveFeedback(option.label);
              this.props.showStatistics();
            }}
          >
            {option.label}
          </button>
        ))}
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  option: PropTypes.objectOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default FeedbackOptions;
