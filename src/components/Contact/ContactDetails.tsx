import React, { FC } from "react";
import Contact from "./Contact";

interface ContactDetailsProps { entreprise: Contact }

const ContactDetails: FC<ContactDetailsProps> = ({entreprise}) => {
    return (
        <div className='px-16 py-4 flex flex-col'>
          <h2 className="text-xl my-2 text-center">{entreprise.name}</h2>
          <p>{entreprise.desc}</p>
        </div>
    )
}

export default ContactDetails;