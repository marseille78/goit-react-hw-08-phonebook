import RegisterForm from '../components/RegisterForm';
import { Typography } from '@mui/material';

const Register = () => {
  return (
    <>
      <Typography variant="h3" component="h2">
        Registration
      </Typography>

      <RegisterForm/>
    </>
  );
};

export default Register;
