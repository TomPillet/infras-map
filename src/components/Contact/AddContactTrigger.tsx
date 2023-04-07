import React, { FC } from 'react';

import ContactDetailsForm from './ContactDetailsForm';

interface AddContactTriggerProps {
  handleAddTriggered: any,
}

const AddContactTrigger: FC<AddContactTriggerProps> = ({handleAddTriggered}) => {

  return (
    <div className='mt-4'>
      <button
        className="block m-auto px-8 py-2 bg-sky-400 text-white rounded hover:font-bold"
        onClick={() => handleAddTriggered()}
      >Ajouter</button>
    </div>
  )
}

export default AddContactTrigger;
