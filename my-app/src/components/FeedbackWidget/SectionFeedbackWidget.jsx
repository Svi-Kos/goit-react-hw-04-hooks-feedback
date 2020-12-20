import PropTypes from 'prop-types';
import s from '../FeedbackWidget/FeedbackWidget.module.css';

function SectionFeedbackWidget({ title, children }) {
  return (
    <div className={s.feedback}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

SectionFeedbackWidget.propTypes = {
  title: PropTypes.string,
};

export default SectionFeedbackWidget;
