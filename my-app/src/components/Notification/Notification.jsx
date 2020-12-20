import s from '../Notification/Notification.module.css';
import PropTypes from 'prop-types';

const Notification = ({ message }) => (
  <div className={s.notification}>{message}</div>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
