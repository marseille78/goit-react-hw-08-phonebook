import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeFilterReducer } from '../../redux/filter/filterSlice';
import { TextField } from '@mui/material';

import { Container } from './Filter.styled';

const Filter = () => {

  const dispatch = useDispatch();

  const [valueFilter, setValueFilter] = useState('');

  const handleChange = (e) => {
    setValueFilter(e.target.value);
    dispatch(changeFilterReducer(e.target.value));
  }

  return (
    <Container>

      <TextField
        label="Search..."
        variant="standard"
        type="text"
        name="filter"
        value={ valueFilter }
        onChange={ handleChange }
      />

    </Container>
  );
};

export default Filter;
