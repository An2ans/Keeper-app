import React, { useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import Fab from "@material-ui/core/Fab";
import { Zoom } from "@material-ui/core";
import AcceptIcon from "@material-ui/icons/Check";
import RefuseIcon from "@material-ui/icons/HighlightOff";
import { NoteContainer, NoteTitle, NoteContent } from "./note.styles";
import { Input } from "@material-ui/core";

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
    // console.log(editedNote);
  }

  function handleEdit() {
    setEdit(true);
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
          <Input
            name="title"
            onChange={handleChange}
            value={editedNote.title}
            color="warning"
            sx={{
              fontSize: `1.1em`,
              marginBottom: `6px`,
            }}
          />
          <Input
            name="content"
            onChange={handleChange}
            value={editedNote.content}
            type="text"
            multiline
            autoFocus
            color="warning"
            sx={{
              fontSize: `1.1em`,
              marginBottom: `10px`,
              whiteSpace: `pre-wrap`,
              wordWrap: `break-word`,
            }}
          />
          <Zoom in={true}>
            <Fab
              onClick={() => {
                setEdit(false);
              }}
            >
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
