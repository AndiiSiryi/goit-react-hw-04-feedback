import PropTypes from 'prop-types';
import css from './Statistics.module.css'

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={css.list}>
      <li  className={css.item}>
        <p className={css.component}>Good: {good}</p>
      </li>
      <li className={css.item}>
        <p className={css.component}>Neutral: {neutral}</p>
      </li>
      <li className={css.item}>
        <p className={css.component}>Bad: {bad}</p>
      </li>
      <li className={css.item}>
        <p className={css.component}>Total: {total}</p>
      </li>
      <li className={css.item}>
        <p className={css.component}>Positive Feedback: {positivePercentage}%</p>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };