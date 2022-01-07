import React, { useState, useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import {GlobalStyle} from "../global-style";

import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";



const App = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchNotesStart());
  // },[dispatch]);
  //
  // const savedNotes = useSelector(selectSavedNotes)
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }


  return (
    <div>
      <GlobalStyle />
      <Header />
      <CreateArea onClick={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            delete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );

}


export default App;
