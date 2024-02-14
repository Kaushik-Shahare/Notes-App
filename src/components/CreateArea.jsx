import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {

  //Create a state to store the note
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  //Create a state to store the display status of the Take notes section
  const [display, setDisplay] = useState(false)

  //Create a state to store the row of the textarea
  const [row, setRow] = useState(1);
  
  //Generate random color
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  //Add new note to the array
  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value,
        color: getRandomColor()
      };
    });
  }
  
  //Clears the Take notes Section after submitting the note
  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    setDisplay(false);
    setRow(1);
    event.preventDefault();
  }

  //Expands the Take notes section
  function handleClick(){
    setRow(3);
    setDisplay(true); 
  }

  return (
    <div>
      <form className="create-note">
        <Zoom in={display}>
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        </Zoom>
        <textarea
          name="content"
          onChange={handleChange}
          onClick={handleClick}
          value={note.content}
          placeholder="Take a note..."
          rows={row}
        />
        <Zoom in={display}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;