import React, { useState } from "react";
import Header from "./Header";
import CreateContact from "./CreateContact";
import Contact from "./Contact";

function App() {
  const [contacts, setContacts] = useState([
    {
      id: "001",
      name: "Prince",
      email: "princefebraj08@gmail.com",
      phone: "9128918231",
      gender: "male"
    }
  ]);

  function addContact(newContact) {
    setContacts((prevValues) => [...prevValues, newContact]);
  }

  function deleteContact(id) {
    setContacts((prevContacts) => {
      return prevContacts.filter((item, index) => {
        return index !== id;
      });
    });
  }

  console.log(contacts);

  return (
    <div>
      <Header />
      <CreateContact addContact={addContact} />
      {contacts.map((contact, index) => (
        <Contact
          id={index}
          name={contact.name}
          email={contact.email}
          phone={contact.phone}
          deleteContact={deleteContact}
        />
      ))}
    </div>
  );
}

export default App;
