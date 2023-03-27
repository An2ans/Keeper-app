import React, { useState, useEffect } from "react";
import { GlobalStyle } from "../global-style";
import defNotes from "../notes.js";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

import {
  Timestamp,
  collection,
  onSnapshot,
  query,
  orderBy,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [collectionRef, setCollectionRef] = useState("main");
  const [firstLogin, setFirstLogin] = useState(true);

  useEffect(() => {
    getSavedNotes(collectionRef);
  }, [collectionRef]);

  // Get saved notes from firestore or default notes from notes.js
  const getSavedNotes = () => {
    const q = query(collection(db, collectionRef), orderBy("created", "desc"));

    onSnapshot(q, (querySnapshot) => {
      let docs = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        title: doc.data().title,
        content: doc.data().content,
      }));
      if (firstLogin && docs.length === 0) {
        setFirstLogin(false);
        defNotes.forEach((defNote) => {
          addNote(defNote);
        });
      } else {
        setNotes(docs);
      }
    });
  };

  // Add a new note
  const addNote = async (newNote) => {
    //validation to avoid empty notes
    if (newNote.content.length > 0) {
      newNote.created = Timestamp.now();
      let docRef = doc(collection(db, collectionRef));
      await setDoc(docRef, newNote);
      // console.log("New note added" + docRef.id);
    }
  };

  // Delete a note
  const deleteNote = async (id) => {
    let docRef = doc(db, collectionRef, id);
    await deleteDoc(docRef);
  };

  // Edit an existing note
  const editNote = async (id, editedNote) => {
    let docRef = doc(db, collectionRef, id);
    await setDoc(docRef, editedNote, { merge: true });
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
