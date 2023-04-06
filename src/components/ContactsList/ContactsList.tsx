import React, { FC } from 'react';


interface ContactsListProps {}

const ContactsList: FC<ContactsListProps> = () => (
  <table className='border-black border-2 h-fit w-64 ml-12'>
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
);

export default ContactsList;
