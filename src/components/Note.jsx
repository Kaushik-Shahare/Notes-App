import React, {useState} from "react";
//import {FontAwesomeIcon} from '../@fortawesome/react-fontawesome';
import DeleteIcon from "@material-ui/icons/Delete"; 

function Note(props) {
  
  //Calls the deleteNote function in App.jsx
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note" style={{backgroundColor: props.color}}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
