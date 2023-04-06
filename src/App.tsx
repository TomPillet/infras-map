import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Mapbox from './components/Mapbox/Mapbox';
import ContactsList from './components/ContactsList/ContactsList';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <div className='m-4 flex'>
        <Mapbox></Mapbox>
        <ContactsList></ContactsList>
      </div>
    </div>
  );
}

export default App;