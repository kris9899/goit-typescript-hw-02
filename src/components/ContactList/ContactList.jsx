import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
export default function ContactList({ contacts, handleDelete }) {
  return (
    <ul className={css.contactList}>
      {contacts.map(contact => (
        <li key={contact.id}>
          <Contact data={contact} onDelete={handleDelete} />
        </li>
      ))}
    </ul>
  );
}
