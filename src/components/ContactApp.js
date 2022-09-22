import React from 'react';
import { Navigation } from './Navigation';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { AddPage } from '../pages/AddPages';

function ContactApp() {
  return (
    <div className='contact-app'>
      <header className='contact-app__header'>
        <h1>Aplikasi Kontak</h1>
        <Navigation></Navigation>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/add' element={<AddPage></AddPage>}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default ContactApp;
