import React, {useState} from "react";
//import {FontAwesomeIcon} from '../@fortawesome/react-fontawesome';
import DeleteIcon from "@material-ui/icons/Delete"; 

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
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
