import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Map from './components/Map/Map';
import ContactsList from './components/ContactsList/ContactsList';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <div className='m-4 flex'>
        <Map></Map>
        <ContactsList></ContactsList>
      </div>
    </div>
  );
}

export default App;