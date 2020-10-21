import React, { useState } from "react";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

export default function CreateContact(props) {
  const [newContact, setContact] = useState({
    name: "",
    email: "",
    phone: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  return (
    <div>
      <form className="createContact">
        <input
          type="text"
          name="name"
          autoComplete="off"
          placeholder="Full Name"
          onChange={handleChange}
          value={newContact.name}
        />
        <input
          type="text"
          name="email"
          autoComplete="off"
          placeholder="Email"
          onChange={handleChange}
          value={newContact.email}
        />
        <input
          type="text"
          name="phone"
          autoComplete="off"
          placeholder="Phone Number"
          onChange={handleChange}
          value={newContact.phone}
        />
        {/* <GenderSwitch isFemale={isFemale} toggleChecked={toggleChecked} /> */}
        <Fab onClick={() => props.addContact(newContact)}>
          <AddIcon />
        </Fab>
      </form>
    </div>
  );
}
