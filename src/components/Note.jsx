import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/DeleteForeverOutlined";
import EditIcon from "@material-ui/icons/Edit";
import Fab from "@material-ui/core/Fab";
import { Zoom } from "@material-ui/core";
import AcceptIcon from "@material-ui/icons/Check";
import RefuseIcon from "@material-ui/icons/HighlightOff";
import { NoteContainer, NoteTitle, NoteContent } from "./note.styles";

function Note(props) {
  const [isEdit, setEdit] = useState(false);
  const [editedNote, setEditedNote] = useState({
    title: props.title,
    content: props.content,
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setEditedNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
    console.log(editedNote);
  }

  function handleEdit() {
    setEdit(true);

    console.log("note to edit");
  }

  const acceptEdit = () => {
    setEdit(false);
    props.edit(props.id, editedNote);
  };

  function handleDelete() {
    return props.delete(props.id);
  }

  return (
    <NoteContainer>
      {isEdit ? (
        <form>
          <input
            name="title"
            onChange={handleChange}
            value={editedNote.title}
          />
          <input
            name="content"
            onChange={handleChange}
            value={editedNote.content}
          />
          <Zoom in={true}>
            <Fab onClick={handleDelete}>
              <RefuseIcon />
            </Fab>
          </Zoom>
          <Zoom in={true}>
            <Fab onClick={acceptEdit}>
              <AcceptIcon />
            </Fab>
          </Zoom>
        </form>
      ) : (
        <form>
          <NoteTitle name="title" onChange={handleChange}>
            {props.title}
          </NoteTitle>
          <NoteContent name="content" onChange={handleChange}>
            {props.content}
          </NoteContent>
          <Zoom in={true}>
            <Fab onClick={handleDelete}>
              <RefuseIcon />
            </Fab>
          </Zoom>
          <Zoom in={true}>
            <Fab onClick={handleEdit}>
              <EditIcon />
            </Fab>
          </Zoom>
        </form>
      )}
    </NoteContainer>
  );
}

export default Note;
