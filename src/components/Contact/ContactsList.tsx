import React, { FC } from 'react';

import AddContactTrigger from './AddContactTrigger';
import Contact from './Contact';

type ContactsListProps = {
  list: Contact[],
  onClick: any,
  onAddButtonTriggered: any,
}

const ContactsList: FC<ContactsListProps> = ({list, onClick, onAddButtonTriggered}) => {


  return (
    <div className="flex-1 ml-12">
      <table className='border-black border-2 h-fit w-64'>
        <thead className='border-black border-b-2'>
          <tr>
            <th>Contacts</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <ol className='p-2 text-start'>
                {
                  list.map((contact: Contact) => {
                    return (
                      <li key={contact.key}>
                        <button
                          onClick={() => onClick(contact)}
                        >{contact.name}</button>
                      </li>
                    )
                  })
                }
              </ol>
            </td>
          </tr>
        </tbody>
      </table>

      <AddContactTrigger handleAddTriggered={() => {onAddButtonTriggered()}}></AddContactTrigger>
    </div>
  );
}

export default ContactsList;
