import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import { Card, Descr } from './ContactForm/ContactForm.styled';

export const App = () => {
  return (
    <Card>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Descr>Find contacts by name</Descr>
      <Filter />
      <ContactList />
    </Card>
  );
};

export default App;