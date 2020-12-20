import s from '../Statistics/Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={s.statistics}>
    <h3>Statistics</h3>
    <p className={s.statisticsItem}>Good: {good}</p>
    <p className={s.statisticsItem}>Neutral: {neutral}</p>
    <p className={s.statisticsItem}>Bad: {bad}</p>
    <p className={s.statisticsItem}>Total: {total}</p>
    <p className={s.statisticsItem}>
      positivePercentage: {positivePercentage}%
    </p>
  </div>
);

Statistics.propTypes = {
  Good: PropTypes.number,
  Neutral: PropTypes.number,
  Bad: PropTypes.number,
  Total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
