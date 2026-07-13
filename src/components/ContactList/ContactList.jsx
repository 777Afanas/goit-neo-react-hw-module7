import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import style from './ContactList.module.css';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

const ContactList = () => {
  const selectedContacts = useSelector(selectContacts);
  const nameFilter = useSelector(selectNameFilter);
  const contacts = selectedContacts.filter(contact => {
    return contact.name?.toLowerCase().includes(nameFilter.toLowerCase());
  });

  return (
    <ul className={style.list}>
      {contacts.map(contact => (
        <li className={style.item} key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
