import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/DeleteForeverOutlined";
import EditIcon from "@material-ui/icons/Edit";
import Fab from "@material-ui/core/Fab";
import { Zoom } from "@material-ui/core";
import AcceptIcon from "@material-ui/icons/Check";
import RefuseIcon from "@material-ui/icons/HighlightOff";

//He añadido funcion de editar al cambiar la propiedad de contentEditable, puedo ditar la note pero los valores title y content no camban
// Creo que necesito que esos valores en el hook cambien si quiero reverti0r los cambios, lo estoy intentando con la funcion handleChange pero no funka


function Note(props) {


  const [isEdit, setEdit] = useState(false);


  function handleEdit() {
    if (isEdit === false){
      setEdit(true);
    }else if (isEdit === true){
    console.log("note to edit");
    setEdit(false);
  }}

  function refuseEdit(){
    console.log("edit refused");

    setEdit(false);
  }

  function handleDelete() {
    return props.delete(props.id);
  }


if (isEdit === false){

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Zoom in={true}>
      <Fab onClick={handleDelete}   >
      <DeleteIcon />
      </Fab>
      </Zoom>
      <Zoom in={true}>
      <Fab onClick={handleEdit}   >
      <EditIcon />
      </Fab>
      </Zoom>

    </div>
  );
}else{
  return(
    <div className="note">
      <h1 contentEditable="true"   >{props.title}</h1>
      <p contentEditable="true"   >{props.content}</p>
      <Zoom in={true}>
      <Fab onClick={refuseEdit} >
      <RefuseIcon />
      </Fab>
      </Zoom>
      <Zoom in={true}>
      <Fab onClick= {handleEdit} >
      <AcceptIcon />
      </Fab>
      </Zoom>

    </div>
  );
}
}

export default Note;
