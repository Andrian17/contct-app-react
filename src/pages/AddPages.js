import React from 'react';
import { addContact } from '../utils/data';
import ContactInput from '../components/ContactInput';
import { useNavigate } from 'react-router-dom';

export function AddPage() {
  const navigate = useNavigate();

  function onAddContactsHandler(contact) {
    // Tambah data Kontak
    addContact(contact);
    navigate('/');
  }

  return (
    <section>
      <h2>Tambah Kontak</h2>
      <ContactInput addContact={onAddContactsHandler}></ContactInput>
    </section>
  );
}
