import React, { useState, useEffect } from "react";
// import {useSelector, useDispatch} from "react-redux";
import {GlobalStyle} from "../global-style";

import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import {db} from '../firebase/firebase.js';
import {collection, doc, addDoc, updateDoc, deleteDoc, Timestamp, query, orderBy, onSnapshot} from 'firebase/firestore'



const App = () => {

  const [notes, setNotes] = useState([]);
  // const [savedNotes, setSavedNotes] = useState([])

  useEffect(() => {
    const q = query(collection(db, 'main'), orderBy('created', 'desc'))
    onSnapshot(q, (querySnapshot) => {
      setNotes(querySnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })));

    })
  },[]);


  const addNoteToFirebase = async (newNote) => {
    const {title, content} = newNote;

    try {
      await addDoc(collection(db, 'main'), {
         title: title,
         content: content,
         created: Timestamp.now()
       });
     } catch (err) {
         console.log(err);
     }

  };

  const addNote = newNote => {
    console.log('Add Note');
    addNoteToFirebase(newNote).then(res => {
      console.log('Note was added');
    });
  }


  const deleteNote = async (id) => {
    const noteToDelete = doc(db, "main", id);

    try{
      await deleteDoc(noteToDelete)
      .then(setNotes((prevNotes) => {
            return prevNotes.filter((note, index) => {
              return index !== id;
            });
          }));
    }catch (error){
      console.log(error);
    }
  }

  const editNote = async (id, editedNote) => {
    const {title, content} = editedNote;
    const noteToEdit = doc(db, "main", id);

    try{
      await updateDoc(noteToEdit, {
      title: title,
      content: content
    });
  }catch (error){
    console.log(error);
  }

  }


  return (
    <div>
      <GlobalStyle />
      <Header />
      <CreateArea onClick={addNote} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={note.id}
            title={note.data.title}
            content={note.data.content}
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
