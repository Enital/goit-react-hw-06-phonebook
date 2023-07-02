import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import React, { useMemo } from "react";
import css from './filter.module.css';
// import getStorage from "redux-persist/es/storage/getStorage";

function Filter() {
    const [filter, setFilter] = useState('')
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts);
    // const filter = useSelector(state => state.contacts.filter);
    // console.log(filter)
    console.log(contacts);

    const filterContacts = (e) => {
        setFilter(e);
        console.log(e)
        contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
    };

    if (filter) {
        console.log('filter')
    } else {
        console.log('else');
    }

    return (
        <>
            <h3>Find contacts by name</h3>
            <label>
                <input
                    type="text"
                    name='filter'
                    value={filter}
                    onChange={event => { filterContacts(event.currentTarget.value) }}
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