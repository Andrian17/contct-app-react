import React from 'react';
import ContactItem from './ContactItem';
import ContactInput from './ContactInput';

function ContactList({ contacts, onDelete }) {
  return (
    <div className='contact-list'>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} onDelete={onDelete} {...contact} />
      ))}
    </div>
  );
}

export default ContactList;
