import css from './Contact.module.css';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.mainWrapper}>
      <div className={css.contactWrapper}>
        <p className={css.contactInfo}>
          <FaUser className={css.contactIcon} />
          {name}
        </p>
        <p className={css.contactInfo}>
          <FaPhoneAlt className={css.contactIcon} />
          {number}
        </p>
      </div>
      <button
        className={css.contactButton}
        type="button"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </div>
  );
}
