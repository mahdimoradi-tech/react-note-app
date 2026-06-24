import { useNotes } from "../context/NotesContext";

function Header({ sortBy, setSortBy }) {
  const notes = useNotes()
  
  return (
    <div className="header">
      <h2 className="header__title">My Notes({notes.length})</h2>
      <select id="sort-box" onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
        <option value="latest">sort by latest notes</option>
        <option value="earliest">sort by earliest notes</option>
        <option value="uncomplited">sort by uncomplited notes</option>
        <option value="complited">sort by complited notes</option>
      </select>
    </div>
  );
}

export default Header;
