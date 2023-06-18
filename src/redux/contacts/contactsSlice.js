import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './contactsOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

const arrThunk = [addContact, deleteContact, fetchContacts];

const fn = (type) => arrThunk.map(el => el[type]);

const handlePending = (state) => {
  state.isLoading = true;
}

const handleFullfiled = (state) => {
  state.isLoading = false;
  state.error = null;
}

const handleFulfilledGet = (state, { payload }) => {
  state.items = payload;
};

const handleFulfilledCreate = (state, { payload }) => {
  state.items.push(payload);
};

const handleFulfilledRemove = (state, { payload }) => {
  state.items = state.items.filter(item => item.id !== payload.id);
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: (builder) => {
    const { PENDING, FULFILLED, REJECTED } = STATUS;
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilledGet)
      .addCase(addContact.fulfilled, handleFulfilledCreate)
      .addCase(deleteContact.fulfilled, handleFulfilledRemove)
      .addMatcher(isAnyOf(...fn(PENDING)), handlePending)
      .addMatcher(isAnyOf(...fn(REJECTED)), handleRejected)
      .addMatcher(isAnyOf(...fn(FULFILLED)), handleFullfiled);
  }
});

export default contactsSlice.reducer;
