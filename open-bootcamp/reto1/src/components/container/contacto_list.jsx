import React from 'react';
import { Contact } from '../../models/Contact';
import ContactComponent from '../pure/contacto';

const ContactList = () => {

    const defaultContact = new Contact('name1','lastname1','e@mail',false);

    return (
        <div>
            <h2>Contacts</h2>
            <ContactComponent contact={defaultContact} ></ContactComponent>
        </div>
    );
}

export default ContactList;
