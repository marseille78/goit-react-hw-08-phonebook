import { Form, FormRow } from './RegisterForm.styled';
import { useCallback, useEffect, useState } from 'react';
import { register } from '../../redux/auth/authOperation';
import { useDispatch, useSelector } from 'react-redux';
import { getErrorAuth } from '../../redux/auth/authSelectors';
import { Button, TextField } from '@mui/material';

const RegisterForm = () => {

  const dispatch = useDispatch();
  const errorRequest = useSelector(getErrorAuth);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (errorRequest) {
      alert(errorRequest);
    } else {
      setUsername('');
      setEmail('');
      setPassword('');
      setIsValid(false);
    }
  }, [errorRequest]);

  const checkValid = useCallback(() => {
    setIsValid(
      username.trim().length > 0
      && email.trim().length > 0
      && password.trim().length > 0
    );
  }, [username, email, password]);

  useEffect(() => {
    checkValid();
  }, [username, email, password, checkValid]);

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

    dispatch(register(dataUser));
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

      { isValid && <Button variant="outlined" type="submit">Register</Button> }

    </Form>
  );
};

export default RegisterForm;
