import React, { useState, useEffect } from "react";
import { GlobalStyle } from "../global-style";
import defNotes from "../notes.js";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import {
  getAllDocuments,
  addDocument,
  getDocuments,
  deleteDocument,
  updateDocument,
} from "../firebase/dbService";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [collectionRef, setCollectionRef] = useState("main");

  useEffect(() => {
    try {
      const fetchedNotes = getAllDocuments(collectionRef);
      if (fetchedNotes.length === 0) {
        setNotes(defNotes);
      } else {
        setNotes(fetchedNotes);
      }
    } catch (e) {
      console.log(e);
    }
  }, [collectionRef]);

  const getSavedNotes = (collectionRef) => {
    getAllDocuments(collectionRef).then((savedNotes) => {
      if (savedNotes.length === 0) {
        defNotes.map((defNote) => {
          addNote(defNote);
        });
        setNotes(defNotes);
      } else {
        setNotes(savedNotes);
      }
    });
  };

  const addNote = (newNote) => {
    addDocument(collectionRef, newNote).then(getSavedNotes(collectionRef));
  };

  const deleteNote = (id) => {
    deleteDocument(id, collectionRef)
      .then(console.log(`note ${id} deleted`))
      .then(getSavedNotes(collectionRef))
      .catch((error) => {
        console.log(error);
      });
  };

  const editNote = async (id, editedNote) => {
    updateDocument(collectionRef, id, editedNote)
      .then(console.log(`note ${id} edited`))
      .then(getSavedNotes(collectionRef))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <GlobalStyle />
      <Header />
      <CreateArea onClick={addNote} />
      {notes.length > 0 ? (
        notes.map((note) => {
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
        })
      ) : (
        <h2>There are no notes to show</h2>
      )}
      <Footer />
    </div>
  );
};

export default App;
