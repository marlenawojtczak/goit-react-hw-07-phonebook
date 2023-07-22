import { Container, Content, AppTitle, ListTitle } from './App.styled';
import { ContactForm } from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

export const App = () => {
  return (
    <Container>
      <Content>
        <AppTitle>Phonebook</AppTitle>
        <ContactForm />
        <ListTitle>Contacts</ListTitle>
        <Filter />
        <ContactList />
      </Content>
    </Container>
  );
};
