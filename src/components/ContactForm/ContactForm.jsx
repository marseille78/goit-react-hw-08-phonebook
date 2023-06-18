import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllContacts } from '../../redux/contacts/contactsSelectors';
import { addContact } from '../../redux/contacts/contactsOperations';

import { Container, FormRow } from './ContactForm.styled';
import { Button, TextField } from '@mui/material';

const ContactForm = () => {

  const contacts = useSelector(getAllContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleAddUser = (user) => {

    const repeated = contacts.find(({ name }) => name === user.name);

    if (repeated) {
      alert(`${user.name} is already in contacts`);
      return;
    }
    dispatch(addContact(user));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isInvalid()) return;

    const user = {
      name,
      phone,
    };

    handleAddUser(user);

    clearForm();
  }

  const handleInput = (e) => {
    const target = e.target;

    switch (target.name) {
      case 'name':
        setName(target.value);
        break;
      case 'phone':
        setPhone(target.value);
        break;
      default:
        return;
    }
  }

  const clearForm = () => {
    setName('');
    setPhone('');
  }

  const isInvalid = () => {
    return !(name.length > 0 && phone.length > 0);
  }

  return (
    <Container>
      <form onSubmit={ handleSubmit }>

        <FormRow>
          <TextField
            label="Name"
            variant="standard"
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={ name }
            onChange={ handleInput }
          />
        </FormRow>

        <FormRow>
          <TextField
            label="Number"
            variant="standard"
            type="tel"
            name="phone"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={ phone }
            onChange={ handleInput }
          />
        </FormRow>

        <FormRow>
          <Button
            variant="outlined"
            type="submit"
          >
            Add contact
          </Button>
        </FormRow>
      </form>
    </Container>
  );
};

export default ContactForm;
