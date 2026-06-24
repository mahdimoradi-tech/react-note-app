import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Form from "./components/Form.jsx";
import NoteList from "./components/NoteList.jsx";
import NoteStatus from "./components/NoteStatus.jsx";
import { NotesProvider } from "./context/NotesContext.jsx";

function App() {
  // const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("latest");

  // const handleNote = (newNote) => {
  //   // setNotes((prevNotes) => [newNote, ...prevNotes]);
  //   dispatch({ type: "addNote", payload: newNote });
  // };

  // const handleDeleteBtn = (id) => {
  //   // setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  //   dispatch({ type: "deleteNote", payload: id });
  // };

  // const handleCheckBtn = (e) => {
  //   const noteId = Number(e.target.value);

  //   // setNotes((prevNotes) =>
  //   //   prevNotes.map((note) =>
  //   //     note.id === noteId ? { ...note, complited: !note.complited } : note,
  //   //   ),
  //   // );
  //   dispatch({ type: "checkedNote", payload: noteId });
  // };

  return (
    <NotesProvider>
      <div className="container">
        <Header sortBy={sortBy} setSortBy={setSortBy} />
        <Form />
        <div className="note-list-container">
          <NoteStatus />
          <NoteList
            sortBy={sortBy}
          />
        </div>
      </div>
    </NotesProvider>
  );
}

export default App;
