import { createAsyncThunk } from '@reduxjs/toolkit';
import { createContact, getContacts, removeContact } from '../service';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  (_, { rejectWithValue }) => {
    try {
      return getContacts();
    } catch (e) {
      return rejectWithValue(e);
    }
  });

export const addContact = createAsyncThunk(
  'contacts/addContact',
  (data, { rejectWithValue }) => {
    try {
      return createContact(data);
    } catch (e) {
      return rejectWithValue(e);
    }
  });

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  (id, { rejectWithValue }) => {
    try {
      return removeContact(id);
    } catch (e) {
      return rejectWithValue(e);
    }
});
