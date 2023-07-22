import { useDispatch, useSelector } from 'react-redux';
import { List, Item, Button } from './ContactList.styled';
import { getFilter, getContacts } from '../../redux/selectors';
import { deleteContact } from '../../redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = (contacts, filter) => {
    if (filter === '') {
      return contacts;
    } else {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  };

  const filtered = filteredContacts(contacts, filter);

  const removeContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <List>
      {filtered.map(contact => (
        <Item key={contact.id}>
          {contact.name}: {contact.number}
          <Button
            type="button"
            name="delete"
            onClick={() => removeContact(contact.id)}
          >
            delete
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default ContactList;
