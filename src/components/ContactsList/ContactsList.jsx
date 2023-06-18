import Loader from '../Loader';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from '../../redux/contacts/contactsOperations';
import { getFilter } from '../../redux/filter/filterSelector';
import { BsFillXCircleFill } from "react-icons/bs";

import { Button, Item, List } from './ContactsList.styled';

const ContactsList = () => {

  const { items, error, isLoading } = useSelector(state => state.contacts);
  const filterState = useSelector(getFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = async (id) => {
    await dispatch(deleteContact(id));
  }

  const getVisibleItems = () => {
    return items.filter(({ name }) => name.toLowerCase().includes(filterState.toLowerCase()));
  }

  const listContacts = getVisibleItems().map(({ id, name, phone }) => {
    return (
      <Item key={ id }>
        { name }: <span>{ phone }</span>
        <Button
          type="button"
          onClick={() => handleDelete(id)}
        >
          <BsFillXCircleFill/>
        </Button>
      </Item>
    );
  });

  return (
    <>
      { isLoading && <Loader/> }
      {
        items && (
          <List>
            {listContacts}
          </List>
        )
      }
      { error && <h2>Error</h2> }
    </>
  );
};

export default ContactsList;
