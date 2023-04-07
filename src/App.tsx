import React, { useEffect, useState } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Mapbox from './components/Mapbox/Mapbox';
import ContactsList from './components/Contact/ContactsList';

import Contact from './components/Contact/Contact';

function App() {
  const ent1: Contact = {
    id: 1,
    name: "Entreprise 1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed augue tempus, dictum lacus id, fermentum sem.",
    latitude: 47.24012,
    longitude: 6.02304,
  }
  const ent2: Contact = {
    id: 2,
    name: "Entreprise 2",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed augue tempus, dictum lacus id, fermentum sem.",
    latitude: 47.23854,
    longitude: 6.02456,
  }

  const [currentDetails, setCurrentDetails] = useState('')
  const [contacts, setContacts] = useState([ent1, ent2]);

  return (
    <div className="App">
      <Header></Header>

      <div className='m-4 flex'>
        <Mapbox></Mapbox>
        <ContactsList
          list={contacts}
          onClick={(contact: Contact) => {
            setCurrentDetails(contact.desc);
            toggleDetailsContainer();
          }}
        ></ContactsList>
      </div>

      <div id="contactDetails" className='hidden absolute z-10 bg-white h-fit w-3/5 inset-0 mx-auto top-32 shadow-md'>
        { currentDetails.length > 0 ? <div>{currentDetails}</div> : <div></div>}
      </div>
    </div>
  );
}

function toggleDetailsContainer() {
  const contactDetails = document.getElementById("contactDetails")!;

  if (contactDetails.classList.contains("hidden")) {
    contactDetails.classList.remove("hidden");
  } else {
    contactDetails.classList.add("hidden");
  }
}

export default App;