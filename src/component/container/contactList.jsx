import React, {useState} from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';
import ContactForm from '../pure/forms/contactForm';

const ContactListComponent = () => {
    const defult_contact_1 = new Contact('Name 1','Last name 1','123456','example_1@example', false)
    const defult_contact_2 = new Contact('Name 2','Last name 2','223456','example_2@example', true)
    const defult_contact_3 = new Contact('Name 3','Last name 3','323456','example_3@example', false)

    const [contacts, setContacts] = useState([defult_contact_1,defult_contact_2,defult_contact_3]);

    function changeConected(contact){
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts[index].conected = !tempContacts[index].conected;
        setContacts(tempContacts);
    }
    
    function removeContact(contact){
        const index = contacts.indexOf(contact);
        const tempContact = [...contacts];
        tempContact.splice(index,1)
        setContacts(tempContact)

    }

    function addContact(contact){
        const tempContact = [...contacts]
        tempContact.push(contact)
        setContacts(tempContact)
    }

    return (
        <div >
            <h1>Contact list </h1>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>Last name</th>
                        <th scope='col'>Phone</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>State</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody> 
                    {contacts.map((contact,index) => {
                        return(
                            <ContactComponent 
                                key = {index}
                                contact = { contact }
                                changeConected = { changeConected}
                                removeContact = { removeContact }
                            ></ContactComponent>
                            )
                        }
                    )}
                </tbody>
            </table>
            <ContactForm
                addContact={addContact}
            ></ContactForm>
            
        </div>
    );
}

export default ContactListComponent;
