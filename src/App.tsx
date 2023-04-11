import React, { useEffect, useState } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Mapbox from './components/Mapbox/Mapbox';
import ContactsList from './components/Contact/ContactsList';
import CloseButton from './components/CloseButton/CloseButton';

import Contact from './components/Contact/Contact';
import ContactDetailsForm from './components/Contact/ContactDetailsForm';

function App() {
  const entNull: Contact = {
    id: 0, key: 'default0', name: '', desc: '', latitude: 0, longitude: 0
  }
  const ent1: Contact = {
    id: 1,
    key: 'default1',
    name: "Entreprise 1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed augue tempus, dictum lacus id, fermentum sem.",
    latitude: 47.24012,
    longitude: 6.02304,
  }
  const ent2: Contact = {
    id: 2,
    key: 'default2',
    name: "Entreprise 2",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed augue tempus, dictum lacus id, fermentum sem.",
    latitude: 47.23854,
    longitude: 6.02456,
  }

  const [currentContact, setCurrentContact] = useState(entNull)
  const [contacts, setContacts] = useState([ent1, ent2]);
  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('contactsList')!) != null) {
      setContacts(JSON.parse(localStorage.getItem('contactsList')!));
    }
  }, [])

  const toggleContactDetails = (contact?: Contact) => {
    document.getElementById("contactDetails")!.classList.remove("hidden");
    if (contact) {
      setCurrentContact(contact);
      // Si le name de contact contient des caractères, alors il n'est par défaut pas éditable
      setIsEditable(!(contact.name.length>0));
    }
  }

  const toggleContactAddForm = (e: any) => {
    const contactId = contacts[contacts.length-1].id+1;
    const contactKey = (e.lngLat.lat+e.lngLat.lng != 0) ? e.lngLat.lat+'-'+e.lngLat.lng : contactId+'';

    const newContact: Contact = {
      id: contactId,
      key: contactKey,
      name: '',
      desc: '',
      latitude: e.lngLat.lat,
      longitude: e.lngLat.lng
    };
    toggleContactDetails(newContact);
  }

  const addContact = (newContact: Contact) => {
    const clonedContacts: Contact[] = [];
    contacts.forEach(contact => clonedContacts.push(Object.assign({}, contact)));
    clonedContacts.push(newContact);
    setContacts(clonedContacts);
    localStorage.setItem('contactsList', JSON.stringify(clonedContacts));
  }

  return (
    <div className="App">
      <Header></Header>

      <div className='m-4 flex'>
        <Mapbox
          contacts={contacts}
          onMarkerClick={(contact: Contact) => {toggleContactDetails(contact)}}
          onAddMarkerClick={(e: any) => toggleContactAddForm(e)}
        ></Mapbox>

        <ContactsList
          list={contacts}
          onClick={(contact: Contact) => {toggleContactDetails(contact)}}
          onAddButtonTriggered={() => {toggleContactAddForm({lngLat: {lat: 0, lng: 0}})}}
        ></ContactsList>
      </div>

      <div id="contactDetails" className='hidden absolute z-10 bg-white h-fit w-3/5 inset-0 mx-auto top-32 shadow-lg rounded'>
        { currentContact.id != 0 ? (
            <div>
              <ContactDetailsForm
                contact={currentContact}
                containerId='contactDetails'
                isEditable={isEditable}
                handleSave={(contact: Contact) => addContact(contact)}
              ></ContactDetailsForm>
            </div>
          ) : null
        }
      </div>
    </div>
  );
}

export default App;