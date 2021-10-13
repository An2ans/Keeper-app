import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {
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

  // function editNote(id){
  //   setNotes((prevNotes) => {
  //     return prevNotes.filter((newNote, index) => {
  //       if (index === id){
  //        return [...prevNotes, newNote ];
  //       }
  //     });
  //   });
  // }

  return (
    <div>
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
            // edit={editNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
