import { FaUser, FaPhoneAlt } from 'react-icons/fa';
export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div>
      <p>
        <FaUser />
        {name}
      </p>
      <p>
        <FaPhoneAlt />
        {number}
      </p>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
