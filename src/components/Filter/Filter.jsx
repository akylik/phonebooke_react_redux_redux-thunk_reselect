import React from 'react';
import styles from './Filter.module.css';
import { connect } from 'react-redux';

import { getFilter } from '../../redux/contactList-selector';
import { filteredContact } from '../../redux/contactList-action';


const Filter = ({ value, onChange }) => (
  <label className={styles.container} >
    Find contacts by name <input type="text" value={value} onChange={onChange} />
  </label>
);

const mapStateToProps = state => ({
  value: getFilter(state),
   //  value: state.filter.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(filteredContact(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
