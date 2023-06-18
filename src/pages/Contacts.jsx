import { Typography } from '@mui/material';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactsList from '../components/ContactsList';

const Contacts = () => {
  return (
    <>
      <Typography variant="h3" component="h2">
        Contacts
      </Typography>

      <ContactForm/>

      <Filter/>

      <ContactsList/>
    </>
  );
};

export default Contacts;
