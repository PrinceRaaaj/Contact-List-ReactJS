import React from "react";
import { Fab, Zoom } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

export default function Contact(props) {
  console.log(props);
  return (
    <Zoom in={true} out={true}>
      <div className="contactCard">
        <img
          class="Avatar"
          alt="avatar"
          src={`https://joeschmoe.io/api/v1/${props.name}`}
        />
        <h2>{props.name}</h2>
        <p>{props.email}</p>
        <p>{props.phone}</p>
        <p>{props.gender}</p>
        <Fab>
          <DeleteIcon
            onClick={() => {
              props.deleteContact(props.id);
            }}
          />
        </Fab>
      </div>
    </Zoom>
  );
}
