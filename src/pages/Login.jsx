import LoginForm from '../components/LoginForm';
import { Typography } from '@mui/material';

const Login = () => {
  return (
    <>
      <Typography variant="h3" component="h2">
        Log In
      </Typography>

      <LoginForm/>
    </>
  );
};

export default Login;
