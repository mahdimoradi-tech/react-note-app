import { useNotes, useNotesDispatch } from "../context/NotesContext";

function NoteList({  sortBy }) {
  const notes = useNotes()

  let sortedNotes = notes;

  if (sortBy === "earliest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
    );

  if (sortBy === "latest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
    );

  if (sortBy === "uncomplited")
    sortedNotes = [...notes].sort(
      (a, b) => Number(a.complited) - Number(b.complited),
    );

  if (sortBy === "complited")
    sortedNotes = [...notes].sort(
      (a, b) => Number(b.complited) - Number(a.complited),
    );

  return (
    <div className="note-list">
      {sortedNotes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          
        />
      ))}
    </div>
  );
}

export default NoteList;

function NoteCard({ note }) {
  const dispatch = useNotesDispatch()

  const dateOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return (
    <div className={`note-card ${note.complited ? "complited" : ""}`}>
      <div className="note-card__header">
        <div className="note-card__detaile">
          <h3 className="note-card__title">{note.title}</h3>
          <p className="note-card__description">{note.description}</p>
        </div>
        <div className="note-card__control">
          <span
            className="note-card__delete"
            onClick={() => dispatch({ type: "deleteNote", payload: note.id })}
          >
            delete
          </span>
          <input
            type="checkbox"
            className="note-card__check"
            name={note.id}
            value={note.id}
            id={note.id}
            checked={note.complited}
            onChange={(e) => {
              const noteId = Number(e.target.value);
              dispatch({ type: "checkedNote", payload: noteId });
            }}
          />
        </div>
      </div>

      <div className="note-card__footer">
        <p className="note-card__created-at">
          {`${new Date(note.createdAt).toLocaleDateString("en-US", dateOptions)}`}
        </p>
      </div>
    </div>
  );
}
