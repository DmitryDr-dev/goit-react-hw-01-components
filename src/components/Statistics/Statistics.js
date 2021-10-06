import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import StaticsItem from '../Statisticsitem/StatisticsItem';

function Statistics({ title, items }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statsList}>
        {items.map(({ id, label, percentage }) => (
          <li key={id}>
            <StaticsItem label={label} percentage={percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default Statistics;
