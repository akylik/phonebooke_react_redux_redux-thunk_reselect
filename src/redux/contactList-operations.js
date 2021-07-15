import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
} from '../redux/contactList-action';

axios.defaults.baseURL = 'http://localhost:4040';

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactRequest());

  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactSuccess(data));
  } catch (error) {
    dispatch(fetchContactError(error));
  }
};

// const fetchContacts = () => dispatch => {
//   dispatch(fetchContactRequest());
//   axios
//     .get('/contacts')
//    //  .then(({ data }) => dispatch(console.log(data))
//     .then(({ data }) => dispatch(fetchContactSuccess(data))
//     .catch(error => dispatch(fetchContactError(error))));
// };

const addContact = data => dispatch => {
  dispatch(addContactRequest());
  axios
    .post('/contacts', data)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error)));
};

export default {
  fetchContacts,
  addContact,
  deleteContact,
};
