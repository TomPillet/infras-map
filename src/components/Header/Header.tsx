import React from 'react';

import {ReactComponent as AppLogo} from '../../medias/logo.svg';
import Navbar from '../Navbar/Navbar';

function Header() {
  return (
    <header className="App-header">
      <div className="flex flex-row items-center border-b-2 border-sky-400">
        <div className="bg-sky-300 p-4">
          <AppLogo className="h-12 w-12 fill-white"></AppLogo>
        </div>
        
        <Navbar></Navbar>
      </div>
    </header>
  );
}

export default Header;
