// import React, { useMemo } from "react";
import css from './filter.module.css';
// import PropTypes from 'prop-types';
// import getStorage from "redux-persist/es/storage/getStorage";

function Filter() {
    // const contacts = getStorage();
    // const filterContacts = ()=> {
    //     return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
    // };
    return (
        <>
            <h3>Find contacts by name</h3>
            <label>
                <input
                    type="text"
                    name='filter'
                    // value={filter}
                    // onChange={event => { setFilter(event.currentTarget.value) }}
                    className={css.input}
                    />
                </label>
        </>
    )
}
export default Filter;

// Filter.propTypes = {
//     filter: PropTypes.string.isRequired,
//     setFilter: PropTypes.func.isRequired,
// };