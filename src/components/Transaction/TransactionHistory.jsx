import css from '../Transaction/TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={css.transactionTable}>
      <thead>
        <tr className={css.tableNames}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr className={css.transactionInfo} key={item.id}>
            <td className={css.infoName}>{item.type}</td>
            <td className={css.infoName}>{item.amount}</td>
            <td className={css.infoName}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
