import { Block, Welcome } from './UserMenu.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getUserEmail } from '../../redux/auth/authSelectors';
import { logout } from '../../redux/auth/authOperation';
import { Button } from '@mui/material';

const UserMenu = () => {

  const userEmail = useSelector(getUserEmail);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  }

  return (
    <Block>
      <Welcome>{ userEmail }</Welcome>
      <Button variant="outlined" type="button" onClick={ handleLogout }>Logout</Button>
    </Block>
  );
};

export default UserMenu;
