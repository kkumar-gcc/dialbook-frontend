import axios from "axios";
import React, { useEffect, useState } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

function Contacts() {
  const [contacts, setContacts] = useState([]);

  async function getContacts() {
    const customersRes = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/contact/`
    );
    setContacts(customersRes.data);
  }

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div>
      <ContactForm getContacts={getContacts} />
      <ContactList contacts={contacts} getContacts={getContacts} />
    </div>
  );
}

export default Contacts;
