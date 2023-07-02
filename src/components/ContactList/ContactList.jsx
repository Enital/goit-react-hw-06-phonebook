import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contactSlice";
// import PropTypes from 'prop-types';
import { store } from "redux/store";

import css from './contactList.module.css'

function ContactList() {
    const dispatch = useDispatch();
    // const [isAddContact, setIsAddContact] = useState(false);

    const { contacts } = store.getState();
    console.log(contacts);
    // const deleteContact = id => {
    //     contacts.filter(contact => contact.id !== id);

    // }
    const deleteContactBtn = id => {
        dispatch(deleteContact(id));
    }
    // useEffect(() => {
        
    // },[isAddContact])
    if (contacts) {
        return (
            <>
                <h2>Contacts</h2>
                <ul>
                    {contacts.map(({ id, name, number }) => {                    
                        return (
                            <li key={id} className={css.li}>
                                <span>{name}: {number}</span>
                            <button className={css.delete} type='button' onClick={() => deleteContactBtn(id)}>Delete contact</button>
                        </li>
                        )
                    })}
                </ul>
            </>
        )
    }
}

export default ContactList;

// ContactList.propTypes = {
//     contacts: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.string.isRequired,
//             name: PropTypes.string.isRequired,
//             number: PropTypes.string.isRequired,
//         })
//     ),
//     deleteContact: PropTypes.func.isRequired,
// }