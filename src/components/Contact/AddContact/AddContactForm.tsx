import React, { FC } from 'react';
import CloseButton from '../../CloseButton/CloseButton';

interface AddContactFormProps {
  containerId: string
}

const AddContactForm: FC<AddContactFormProps> = ({containerId}) => (
  <form className='px-16 py-4 flex flex-col'>
    <CloseButton targetId={containerId}></CloseButton>
    <h2 className="text-xl my-2 text-center">Ajouter une entreprise</h2>
    <label className="text-start" htmlFor="nom">Nom :</label>
    <input className="border-b border-sky-400 mb-4" name="nom" value="" type="text" />
    <label className="text-start" htmlFor="desc">Description :</label>
    <input className="border-b border-sky-400" name="desc" value="" type="text" />
  </form>
);

export default AddContactForm;
