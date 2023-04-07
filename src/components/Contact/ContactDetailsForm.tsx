import React, { FC } from 'react';
import CloseButton from '../CloseButton/CloseButton';
import Contact from './Contact';

interface ContactDetailsFormProps {
  contact: Contact,
  containerId: string,
  isEditable: boolean,
}

const ContactDetailsForm: FC<ContactDetailsFormProps> = ({contact, containerId, isEditable}) => {
  const defaultInputStyle = "border-b border-slate-400";

  return (
    <form className='px-16 py-4 flex flex-col'>
      <CloseButton
        targetId={containerId}
      ></CloseButton>
      <h2 className="text-xl my-2 text-center">Ajouter une entreprise</h2>
      <label className="text-start" htmlFor="nom">Nom :</label>
      <input key={contact.key+'-name'} className={"mb-4 " + (isEditable ? defaultInputStyle : '')} name="nom" defaultValue={contact.name} type="text" disabled={!isEditable} />
      <label className="text-start" htmlFor="desc">Description :</label>
      <input key={contact.key+'-desc'} className={"mb-4 " + (isEditable ? defaultInputStyle : '')} name="desc" defaultValue={contact.desc} type="text" disabled={!isEditable} />

      <div className="flex flex-row justify-between">
        <label htmlFor="lat" className="text-start">Latitude : </label>
        <input key={contact.key+'-lat'} type="number" className={"w-1/4 " + (isEditable ? defaultInputStyle : '')} name="lat" defaultValue={contact.latitude} disabled={!isEditable} />
        <label htmlFor="lng" className="text-start">Longitude : </label>
        <input key={contact.key+'-lng'} type="number" className={"w-1/4 " + (isEditable ? defaultInputStyle : '')} name="lng" defaultValue={contact.longitude} disabled={!isEditable} />
      </div>
    </form>
  );

}

export default ContactDetailsForm;
