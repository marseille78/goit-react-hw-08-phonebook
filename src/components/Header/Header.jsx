import { Block } from './Header.styled';
import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';
import UserMenu from '../UserMenu';

const Header = () => {

  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Block>
      <Navigation/>

      { isLoggedIn ? <UserMenu/> : <AuthNav/> }
    </Block>
  );
};

export default Header;
