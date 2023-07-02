import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "redux/contactSlice";
import css from './contactList.module.css'

function ContactList() {
    const dispatch = useDispatch();

    const contacts = useSelector(state => state.contacts);
    // console.log(contacts);
    
    const deleteContactBtn = id => {
        dispatch(deleteContact(id));
    }
    
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