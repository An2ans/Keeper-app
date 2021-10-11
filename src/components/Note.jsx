import React from "react";
import DeleteIcon from "@material-ui/icons/DeleteForeverOutlined";
import Fab from "@material-ui/core/Fab";
import { Zoom } from "@material-ui/core";

function Note(props) {
  function handleClick() {
    return props.delete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Zoom in={true}>
      <Fab onClick={handleClick}   >
      <DeleteIcon />
      </Fab>
      </Zoom>
    </div>
  );
}

export default Note;
