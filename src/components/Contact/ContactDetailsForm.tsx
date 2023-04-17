import React, { FC } from 'react';
import CloseButton from '../CloseButton/CloseButton';
import Contact from './Contact';

interface ContactDetailsFormProps {
  contact: Contact,
  containerId: string,
  isEditable: boolean,
  handleSave: any,
}

const ContactDetailsForm: FC<ContactDetailsFormProps> = ({contact, containerId, isEditable, handleSave}) => {
  const defaultInputStyle = "border-b border-slate-400";

  const handleChange = (event:any) => {
    switch(event.target.name) {
      case "name":
        contact.name = event.target.value;
        break;
      case "desc":
        contact.desc = event.target.value;
        break;
      case "latitude":
        contact.latitude = event.target.value;
        break;
      case "longitude":
        contact.longitude = event.target.value;
        break;
      default: 
        break;
    }
  }

  return (
    <form className='px-16 py-4 flex flex-col'>
      <CloseButton
        targetId={containerId}
      ></CloseButton>

      <h2 className="text-xl my-2 text-center">Ajouter une entreprise</h2>
      
      <label className="text-start" htmlFor="name">
        Nom :
        <span id="errorName" className='hidden text-red-500 text-sm italic ml-2'>Champ requis</span>
      </label>
      <input key={contact.key+'-name'} type="text" onChange={handleChange} className={"mb-4 " + defaultInputStyle} name="name" defaultValue={contact.name} disabled={!isEditable} required />
      <label className="text-start" htmlFor="desc">Description :</label>
      <input key={contact.key+'-desc'} type="text" onChange={handleChange} className={"mb-4 " + defaultInputStyle} name="desc" defaultValue={contact.desc} disabled={!isEditable} />

      <div className="flex flex-row justify-between">
        <label htmlFor="latitude" className="text-start">Latitude : </label>
        <input key={contact.key+'-lat'} type="number" onChange={handleChange} className={"w-1/4 " + defaultInputStyle} name="latitude" defaultValue={contact.latitude} disabled={!isEditable} required />
        <label htmlFor="longitude" className="text-start">Longitude : </label>
        <input key={contact.key+'-lng'} type="number" onChange={handleChange} className={"w-1/4 " + defaultInputStyle} name="longitude" defaultValue={contact.longitude} disabled={!isEditable} required />
      </div>

      <button className='block m-auto mt-4 px-8 py-2 bg-green-500 text-white rounded hover:font-bold' type="button" onClick={() => {
        if (contact.name.length > 0) {
          document.getElementById(containerId)!.classList.add("hidden");
          handleSave(contact);
        } else {
          document.getElementById('errorName')!.classList.remove('hidden');
        }
      }}>Enregistrer</button>
    </form>
  );

}

export default ContactDetailsForm;
