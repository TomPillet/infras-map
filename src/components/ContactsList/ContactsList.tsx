import React, { FC } from 'react';

import AddContactTrigger from '../AddContactTrigger/AddContactTrigger';

interface ContactsListProps {}

const ContactsList: FC<ContactsListProps> = () => (
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
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ol>
          </td>
        </tr>
      </tbody>
    </table>

    <AddContactTrigger></AddContactTrigger>
  </div>
);

export default ContactsList;
