import { createSlice } from '@reduxjs/toolkit';
import dataJson from '../contacts.json';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: dataJson },
  reducers: {
    addContact: (state, { payload }) => {
      state.items.push(payload);
    },
    // deleteContact: (state, { payload }) => {
    //   state.items = state.items.filter(item => item.id !== payload);
    // },
    deleteContact: (state, { payload }) => {
      const index = state.items.findIndex(item => item.id === payload);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const selectContacts = state => state.contacts.items;
// state.contacts.items; contacts - ключ редюсера
