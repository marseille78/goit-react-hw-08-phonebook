import { Form, FormRow } from './RegisterForm.styled';
import { useState } from 'react';
import { register } from '../../redux/auth/authOperation';
import { useDispatch } from 'react-redux';
import { Button, TextField } from '@mui/material';

const RegisterForm = () => {

  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target }) => {
    switch (target.name) {
      case 'username':
        return setUsername(target.value);
      case 'email':
        return setEmail(target.value);
      case 'password':
        return setPassword(target.value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataUser = { name: username, email, password };

    dispatch(register(dataUser))
      .then(res => {
        if (res.error) {
          alert(res.payload);
        } else {
          setUsername('');
          setEmail('');
          setPassword('');
        }
      })
      .catch(err => {
        console.error(err.message);
      });
  };

  return (
    <Form onSubmit={ handleSubmit }>

      <FormRow>
        <TextField
          label='Username'
          variant='standard'
          type='text'
          name='username'
          value={username}
          onChange={handleChange}
        />
      </FormRow>

      <FormRow>
        <TextField
          label='Email'
          variant='standard'
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
        />
      </FormRow>

      <FormRow>
        <TextField
          label='Password'
          variant='standard'
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
        />
      </FormRow>

      <Button variant="outlined" type="submit">Register</Button>

    </Form>
  );
};

export default RegisterForm;
