import React, { Component } from 'react';
import styles from './ContactsList.module.css';
import { connect } from 'react-redux';
import contactOperation from '../../redux/contactList-operations';
import {filteredContacts} from '../../redux/contactList-selector';


const ContactsList = ({ contacts, onDeleteContact }) => (
  <div className={styles.container}>
    <h2>Contacts</h2>
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.item}>
          <div className={styles.item__container}>
            <p className={styles.name}>
              {name}: {number}
            </p>
            <button
              type="button"
              className={styles.btn}
              onClick={() => {
                onDeleteContact(id);
              }}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

const mapStateToProps = state => {
   return { contacts: filteredContacts(state)};
   
//   const { filter, contacts } = state;
//   const normaliseNameContact = filter.filter.toLowerCase();
//   const filteredContacts = contacts.contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normaliseNameContact),
//   );
//   return { contacts: filteredContacts };
};

const mapDispatchToProps = dispatch => ({
   onDeleteContact: id => dispatch(contactOperation.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
