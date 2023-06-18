import { NavLink } from 'react-router-dom';
import { Nav } from './Navigation.styled';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';

const Navigation = () => {

  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Nav>
      <NavLink to="/">Home</NavLink>

      { isLoggedIn && <NavLink to="/contacts">Contacts</NavLink> }
    </Nav>
  );
};

export default Navigation;
