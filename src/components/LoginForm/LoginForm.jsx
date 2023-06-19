import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/authOperation';
import { Button, TextField } from '@mui/material';
import { Form, FormRow } from './LoginForm.styled';

const LoginForm = () => {

  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target }) => {
    switch (target.name) {
      case 'email':
        return setEmail(target.value);
      case 'password':
        return setPassword(target.value);
      default:
        return;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataUser = { email, password };

    dispatch(login(dataUser))
      .then(res => {
        if (res.error) {
          alert(res.payload);
        } else {
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

      <Button variant="outlined" type="submit">Log In</Button>
    </Form>
  );
};

export default LoginForm;
