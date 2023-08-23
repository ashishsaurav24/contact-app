import React, { useState, useEffect } from 'react';
import './App.css';
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";

function App() {
const LOCAL_STORAGE_KEY= "contacts"
const [contacts, setContacts] = useState([])

const addContactHandler= (contact)=>{
      setContacts([...contacts, { ...contact }])
}

useEffect(()=>{
  try{
  const retrieveContacts= JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  if(retrieveContacts){ setContacts(retrieveContacts)}
  console.log(retrieveContacts)
  }
  catch(error){
    console.log("Thee is some error")
  }
}, [])


useEffect(()=>{
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
}, [contacts])


  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
