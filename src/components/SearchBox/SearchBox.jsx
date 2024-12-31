import css from './SearchBox.module.css';

export default function SearchBox({ value, onFilter }) {
  return (
    <div className={css.searchBox}>
      <label className={css.labelSearchBox}>
        Find contacts by name
        <input
          className={css.inputSearchBox}
          type="text"
          value={value}
          onChange={e => onFilter(e.target.value)}
        />
      </label>
    </div>
  );
}
