import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../../models/contact.class';


const ContactForm = ({addContact}) => {

    const nameRef = useRef('');
    const lastName = useRef('');
    const phone = useRef('');
    const email = useRef('');

    function addContactForm(e){
        e.preventDefault();
        const newContact = new Contact(
            nameRef.current.value,
            lastName.current.value,
            phone.current.value,
            email.current.value,
            false
        )
        addContact(newContact)
    }
    
    return (
        <div className='d-flex justify-content-center'>
            <form onSubmit={addContactForm}>
                <h2>Form add contact</h2>
                <div className='input-group mb-3 col-6'>
                    <span className='input-group-text col-4'>Name</span>
                    <input ref={nameRef} id='inputName' type='text' className='form-control' required />
                </div>
                <div className='input-group mb-3 col-6'>
                    <span className='input-group-text col-4'>Last name</span>
                    <input ref={lastName} id='inputName' type='text' className='form-control' required />
                </div>
                <div className='input-group mb-3 col-6'>
                    <span className='input-group-text col-4'>Phone</span>
                    <input ref={phone} id='inputName' type='text' className='form-control' required />
                </div>
                <div className='input-group mb-3 col-6'>
                    <span className='input-group-text col-4'>Email</span>
                    <input ref={email} id='inputName' type='text' className='form-control' required />
                </div>
                <button className='btn btn-primary col-12 d-grid gap-2 mx-auto' type='submit' >Add</button>
            </form>
        </div>
    );
};


ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired
};


export default ContactForm;
