import css from '../Description/Description.module.css';
export function Description() {
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Sip Happens Café</h1>
      <p className={css.description}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
}
