import css from '../Options/Options.module.css';
export default function Options({ onFeedback, onReset, totalFeedback }) {
  return (
    <div className={css.buttonsList}>
      <button
        className={css.optionButton}
        type="button"
        onClick={() => onFeedback('good')}
      >
        good
      </button>
      <button
        className={css.optionButton}
        type="button"
        onClick={() => onFeedback('neutral')}
      >
        neutral
      </button>
      <button
        className={css.optionButton}
        type="button"
        onClick={() => onFeedback('bad')}
      >
        bad
      </button>
      {totalFeedback > 0 && (
        <button
          className={css.optionButton}
          type="button"
          onClick={() => onReset()}
        >
          reset
        </button>
      )}
    </div>
  );
}
