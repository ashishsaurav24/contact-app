import React from 'react';
import './App.css';
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
// import ContactCard from "./components/ContactCard";

function App() {
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList />
      {/* <ContactCard /> */}
    </div>
  );
}

export default App;
