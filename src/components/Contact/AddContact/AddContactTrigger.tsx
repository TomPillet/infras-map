import React, { FC } from 'react';

import AddContactForm from './AddContactForm';

interface AddContactTriggerProps {}

class AddContactTrigger extends React.Component<AddContactTriggerProps> {
  render() {
    return (
      <div className='mt-4'>
        <button
          className="block m-auto px-8 py-2 bg-sky-400 text-white rounded hover:font-bold"
          onClick={() => {
            document.querySelector("#addFormContainer")!.classList.remove("hidden");
          }}
        >Ajouter</button>

        <div id="addFormContainer" className='hidden absolute z-10 bg-white h-fit w-3/5 inset-0 mx-auto top-32 shadow-md'>
          <AddContactForm containerId='addFormContainer'></AddContactForm> 
        </div>
      </div>
    )
  }
}

export default AddContactTrigger;
