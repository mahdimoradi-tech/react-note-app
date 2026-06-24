import { createContext, useContext, useReducer } from "react";

const NotesContext = createContext(null);
const NotesDispatchContext = createContext(null);

function notesReducer(state, { type, payload }) {
  switch (type) {
    case "addNote":
      return [payload, ...state];
    case "deleteNote":
      return state.filter((note) => note.id !== payload);
    case "checkedNote":
      return state.map((note) =>
        note.id === payload ? { ...note, complited: !note.complited } : note,
      );
    default:
      throw new Error("Unknown Error" + type);
  }
}

export function NotesProvider({ children }) {
  const [notes, dispatch] = useReducer(notesReducer, []);

  return (
    <NotesContext value={notes}>
      <NotesDispatchContext value={dispatch}> {children}</NotesDispatchContext>
    </NotesContext>
  );
}

export function useNotes() {
  const context = useContext(NotesContext);

  if (context === undefined) throw new Error("context is out of block!");

  return context;
}

export function useNotesDispatch() {
  const context = useContext(NotesDispatchContext);

  if (context === undefined) throw new Error("context is out of block!");

  return context;
}

