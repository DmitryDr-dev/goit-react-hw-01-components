import PropTypes from 'prop-types';
import s from './Transactions.module.css';

function Transactions({ transactions }) {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th className={s.tableHeadCell}>Type</th>
          <th className={s.tableHeadCell}>Amount</th>
          <th className={s.tableHeadCell}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <tr className={s.tableRow} key={id}>
            <td className={s.tableCell}>{type}</td>
            <td className={s.tableCellData}>{amount}</td>
            <td className={s.tableCellData}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Transactions.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default Transactions;
