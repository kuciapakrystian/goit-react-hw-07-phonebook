import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  useAddContactMutation,
  useGetContactsQuery,
} from '../../Redux/contactsSlice';

import { Form, Input, Button } from './ContactForm.styled';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const [createContact] = useAddContactMutation();
  const { data: contacts } = useGetContactsQuery();

  const reset = () => {
    setName('');
    setNumber('');
  };

  const createNewContact = async () => {
    const newContact = { name, number };
    const isAlreadyInContacts = contacts.some(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );
    if (isAlreadyInContacts) {
      toast.error(`${newContact.name} is already in contacts`);
      return;
    }
    try {
      await createContact(newContact);
      toast.success(`Contact ${newContact.name} was added`);
    } catch (error) {
      toast.error('Something went wrong');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    createNewContact();
    reset();
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Name"
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          required
        />

        <Input
          placeholder="Number"
          type="tel"
          name="number"
          value={number}
          onChange={handleInputChange}
          required
        />
        <Button type="submit">Add contact</Button>
      </Form>
    </div>
  );
};

export default ContactForm;