import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../../redux/selectors';
import { fetchContacts } from 'redux/operations';
import { Container, Content, AppTitle, ListTitle } from './App.styled';
import { ContactForm } from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { Loader } from '../Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Content>
        <AppTitle>Phonebook</AppTitle>
        <ContactForm />
        <ListTitle>Contacts</ListTitle>
        <Filter />
        {isLoading && <Loader />}
        {error && <p>{error}</p>}
        {contacts.length > 0 && <ContactList />}
        <ContactList />
      </Content>
    </Container>
  );
};
