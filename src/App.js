import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts"
  const [contacts, setContacts] = useState([])

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }])
  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    })
    setContacts(newContactList);
  }

  useEffect(() => {
    try {
      const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
      if (retrieveContacts) { setContacts(retrieveContacts) }
      console.log(retrieveContacts)
    }
    catch (error) {
      console.log("Thee is some error")
    }
  }, [])


  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])


  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />        
        <Routes>
          <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />} />
          <Route path="/" element={<ContactList contacts={contacts} getContactId={removeContactHandler} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
