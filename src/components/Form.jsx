import { useState } from "react";
import { useNotesDispatch } from "../context/NotesContext";

function Form() {
  const dispatch = useNotesDispatch()
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description)
      return alert("please insert your data complitly!");

    const newNote = {
      title,
      description,
      createdAt: new Date().toISOString(),
      complited: false,
      id: Date.now(),
    };

    dispatch({ type: "addNote", payload: newNote });
    setDescription("");
    setTitle("");
  };

  return (
    <div className="add-note">
      <h3 className="add-note__title">Add New Note</h3>
      <form action="" className="add-note__form" onSubmit={handleSubmit}>
        <input
          value={title}
          type="text"
          placeholder="note title..."
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          value={description}
          type="text"
          placeholder="note description..."
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add New Note</button>
      </form>
    </div>
  );
}

export default Form;
