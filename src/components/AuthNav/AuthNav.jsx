import { Block } from './AuthNav.styled';
import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <Block>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </Block>
  );
};

export default AuthNav;
