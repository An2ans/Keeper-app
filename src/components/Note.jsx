import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/DeleteForeverOutlined";
import EditIcon from "@material-ui/icons/Edit";
import Fab from "@material-ui/core/Fab";
import { Zoom } from "@material-ui/core";
import AcceptIcon from "@material-ui/icons/Check";
import RefuseIcon from "@material-ui/icons/HighlightOff";
import {NoteContainer, NoteTitle, NoteContent} from "./note.styles";


function Note(props) {


  const [isEdit, setEdit] = useState(false);


  function handleEdit() {

      setEdit(!isEdit);

    console.log("note to edit");
  }


  function handleDelete() {
    return props.delete(props.id);
  }



  return(
    <NoteContainer>
      <form action= "/delete" method="post" >
        <NoteTitle contentEditable={isEdit ? "true" : "false"}   >{props.title}</NoteTitle>
        <NoteContent contentEditable={isEdit ? "true" : "false"} >{props.content}</NoteContent>
        <Zoom in={true}>
        <Fab onClick={handleDelete} >
          <RefuseIcon />
        </Fab>
        </Zoom>
      </form>
      <form action= "/edit" method="post" >
        <Zoom in={true}>
        <Fab onClick= {handleEdit} >
          <AcceptIcon />
        </Fab>
        </Zoom>
      </form>
    </NoteContainer>
  );
}


export default Note;
