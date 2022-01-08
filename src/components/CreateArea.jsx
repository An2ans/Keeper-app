import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import { Zoom } from "@material-ui/core";
import {CreateAreaContainer} from "./CreateArea.styles";

const CreateArea = (props) => {

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [isExpanded, setExpansion] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();
    props.onClick(note);
    setNote({
      title: "",
      content: ""
    });
    setExpansion(false);
  }

  function expand() {
    setExpansion(true);
  }

  return (
    <CreateAreaContainer>
      <form className="create-note" >
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 4 : 1}
          onClick={expand}
        />
        <Zoom in={true}>
          <Fab className="fab" onClick={handleClick}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </CreateAreaContainer>
  );
}

export default CreateArea;
