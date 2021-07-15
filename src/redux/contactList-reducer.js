import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  addContactSuccess,
  filteredContact,
  deleteContactSuccess,
  fetchContactSuccess,
} from '../redux/contactList-action';

const contactListInitialState = [];

const contacts = createReducer(contactListInitialState, {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => {
    const { name } = payload;
    console.log(payload);
    const isFinded = state.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
    if (isFinded) {
      alert('Контакт уже есть в списке !');
      return;
    }
    return [payload, ...state];
  },
  [deleteContactSuccess]: (state, { payload }) => {
    return state.filter(contact => contact.id !== payload);
  },
});

// const contacts = createReducer(contactListInitialState, {
//   [fetchContactSuccess]: (_, { payload }) => payload,
//   [addContactSuccess]: (state, { payload }) => {
//     const { name } = payload;
//     console.log(payload.name);
//     const isFinded = state.contacts.find(
//       contact => contact.name.toLowerCase() === name.toLowerCase(),
//     );
//     if (isFinded) {
//       alert('Контакт уже есть в списке !');
//       return state;
//     }
//     return [payload, ...state.contacts];
//   },
//   [deleteContactSuccess]: (state, { payload }) => ({
//     contacts: state.contacts.filter(contact => contact.id !== payload),
//   }),
// });

const filterInitialState = '';

const filter = createReducer(filterInitialState, {
  [filteredContact]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});
