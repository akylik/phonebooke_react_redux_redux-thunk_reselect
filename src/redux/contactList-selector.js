import { createSelector } from '@reduxjs/toolkit';


const getAllContacts = state => state.contacts;

const getFilter = state => state.filter;

const filteredContacts = createSelector(
   [getAllContacts, getFilter],
   (contacts, filter) => {
      const normaliseNameContact = filter.toLowerCase();
      return contacts.filter(contact =>
         contact.name.toLowerCase().includes(normaliseNameContact))
   }
);

export {getFilter, filteredContacts };
