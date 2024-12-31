import { useState, useEffect } from 'react';
import contactsInfo from '../Data/contacts.json';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import ContactForm from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';

export default function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? contactsInfo
  );
  const [search, setSearch] = useState('');
  useEffect(
    () => localStorage.setItem('contacts', JSON.stringify(contacts)),
    [contacts]
  );
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );
  const addContact = (values, actions) => {
    const newContact = {
      ...values,
      id: nanoid(),
    };
    setContacts(prev => [...prev, newContact]);
    actions.resetForm();
  };
  const contactDelete = contactId =>
    setContacts(prev => prev.filter(({ id }) => id !== contactId));
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={addContact} />
      <SearchBox value={search} onFilter={setSearch} />
      <ContactList contacts={visibleContacts} handleDelete={contactDelete} />
    </div>
  );
}
