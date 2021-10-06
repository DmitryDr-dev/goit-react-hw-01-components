import PropTypes from 'prop-types';
import s from './StatisticsItem.module.css';

function StaticsItem({ label, percentage }) {
  return (
    <div className={s.item}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </div>
  );
}

StaticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StaticsItem;
