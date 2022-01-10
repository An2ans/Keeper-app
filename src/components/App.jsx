import React, { useState, useEffect } from "react";
import {GlobalStyle} from "../global-style";

import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import {db, addDocument, getDocuments, deleteDocument, updateDocument} from '../firebase/firebase.js';

const App = () => {

  const [notes, setNotes] = useState([{title:"default", content:"default", id:"00000"}]);
  const [collectionRef, setCollectionRef] = useState("main")

  // useEffect(() => {
  //   getDocuments(collectionRef).then(setNotes({
  //     id:
  //   }));
  //
  // },[collectionRef]);
  //


  const addNote = newNote => {
    console.log('Add Note');
    addDocument(collectionRef, newNote).then(res => {
      console.log('Note was added');
    });
  }


  const deleteNote = async (id, collectionRef) => {

    try{
      deleteDocument(id, collectionRef)
      .then(setNotes((prevNotes) => {
            return prevNotes.filter((note, index) => {
              return index !== id;
            });
          }));
    }catch (error){
      console.log(error);
    }
  }

  const editNote = async (collectionRef, id, editedNote) => {
    try{
      updateDocument(collectionRef, id, editedNote);
    }catch (error){
      console.log(error);
    }
  }


  return (
    <div>
      <GlobalStyle />
      <Header />
      <CreateArea onClick={addNote} />
      {notes.map((note) => {
        return (
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            content={note.content}
            delete={deleteNote}
            edit={editNote}
          />
        );
      })}
      <Footer />
    </div>
  );

}


export default App;
