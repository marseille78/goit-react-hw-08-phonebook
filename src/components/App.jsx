import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { lazy, useEffect } from 'react';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { refresh } from '../redux/auth/authOperation';
import { useDispatch } from 'react-redux';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <HomePage /> } />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={ RegisterPage }
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={ LoginPage }
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute
                component={ ContactsPage }
                redirectTo="/login"
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
};
