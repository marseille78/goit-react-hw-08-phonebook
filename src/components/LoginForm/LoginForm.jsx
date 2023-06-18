import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getErrorAuth } from '../../redux/auth/authSelectors';
import { login } from '../../redux/auth/authOperation';
import { Button, TextField } from '@mui/material';
import { Form, FormRow } from './LoginForm.styled';

const LoginForm = () => {

  const dispatch = useDispatch();
  const errorRequest = useSelector(getErrorAuth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (errorRequest) {
      alert(errorRequest);
    } else {
      setEmail('');
      setPassword('');
      setIsValid(false);
    }
  }, [errorRequest]);

  const checkValid = useCallback(() => {
    setIsValid(
      email.trim().length > 0
      && password.trim().length > 0
    );
  }, [email, password]);

  useEffect(() => {
    checkValid();
  }, [email, password, checkValid]);

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

    dispatch(login(dataUser));
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

      { isValid && <Button variant="outlined" type="submit">Log In</Button> }
    </Form>
  );
};

export default LoginForm;
