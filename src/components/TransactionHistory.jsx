import PropTypes from "prop-types";

const TransactionHistory = ({ items }) => (
  <table className="transaction-history">
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>Invoice</td>
        <td>125</td>
        <td>USD</td>
      </tr>
      <tr>
        <td>Withdrawal</td>
        <td>85</td>
        <td>USD</td>
      </tr>
      <tr>
        <td>Deposit</td>
        <td>103.10</td>
        <td>BWP</td>
      </tr>
      <tr>
        <td>Payment</td>
        <td>862.44</td>
        <td>AUD</td>
      </tr>
      <tr>
        <td>Withdrawal</td>
        <td>371.43</td>
        <td>MUR</td>
      </tr>
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
