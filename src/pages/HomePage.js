import React from 'react';
import ContactList from '../components/ContactList';
import { deleteContact, getContacts } from '../utils/data';
import { SearchBar } from '../components/SearchBar';

export class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: getContacts(),
      keyword: '',
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onDeleteHandler(id) {
    deleteContact(id);
    // perbarui data contacts
    this.setState(() => {
      return {
        contacts: getContacts(),
      };
    });
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });
  }

  render() {
    return (
      <section>
        <SearchBar keywordChange={this.onKeywordChangeHandler} />
        <h2>Daftar Kontak</h2>
        <ContactList
          contacts={this.state.contacts}
          onDelete={this.onDeleteHandler}
        ></ContactList>
      </section>
    );
  }
}
