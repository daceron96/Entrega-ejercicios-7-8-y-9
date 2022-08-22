import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactComponent = ({contact, changeConected, removeContact }) => {


    function contactIconComplete(){
        if(contact.conected){
            return(<i onClick={() => changeConected(contact)} className='bi-toggle-on task-action fs-4 ps-4' style={{ color: 'green', cursor: 'pointer' }}></i> )
        }
        return(<i  onClick={() => changeConected(contact)} className='bi-toggle-on task-action fs-4 ps-4' style={{ color: 'grey', cursor: 'pointer' }}></i> )

    }

    function connectionStatus(){
        if(contact.conected){
            return (<span   className='badge bg-success p-2'> Connected </span>)
        }
        return (<span className='badge bg-danger p-2'> Disconnected </span>)
    }

    return (
        <tr> 
            <td>{ contact.name }</td>
            <td>{ contact.lastName }</td>
            <td>{ contact.phone }</td>
            <td>{ contact.email }</td>
            <td>{ connectionStatus() }</td>
            <td>
                {contactIconComplete()}
                <i onClick={() => removeContact(contact)} className='bi-trash task-action fs-4 px-4'  style={{ color: 'tomato', cursor: 'pointer'}}></i>
            </td>
        </tr>
    );
};


Contact.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    changeConected: PropTypes.func.isRequired,
    removeContact: PropTypes.func.isRequired
};


export default ContactComponent;
