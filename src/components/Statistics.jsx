import PropTypes from "prop-types";
import css from "./Statistics.module.css";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
const Statistics = ({ title, stats }) => (
  <section className={css.section}>
    <h2 className={css.title}>{title}</h2>
    <ul className={css.statlist}>
      {stats.map(({ id, label, percentage }) => (
        <li
          className={css.listItem}
          style={{ backgroundColor: getRandomColor() }}
          key={id}>
          {label}: {percentage}%
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
