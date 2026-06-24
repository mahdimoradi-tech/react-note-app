import { useNotes } from "../context/NotesContext";

function NoteStatus() {
  const notes = useNotes()
  const allNotes = notes.length;
  //   const complitedNotes = notes.filter((note) => note.complited === true).length;
  const complitedNotes = notes.filter((note) => note.complited).length;
  //   const openNotes = notes.filter((note) => note.complited === false).length;
  const openNotes = allNotes - complitedNotes;

  if (!allNotes) return <h2>No Notes has already been added!</h2>;

  return (
    <ul className="note-list__category">
      <li>
        All <span className="badge">{allNotes}</span>
      </li>
      <li>
        Complited <span className="badge">{complitedNotes}</span>
      </li>
      <li>
        Open <span className="badge">{openNotes}</span>
      </li>
    </ul>
  );
}

export default NoteStatus;
