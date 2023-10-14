import React from "react";
import ListItem from "../components/ListItem";
import AddButton from "../components/AddButton";
import { useNoteList } from "../components/NoteListProvider";

const NotesListPage = () => {
  const { notes } = useNoteList();

  return (
    <div className="notes">
      <div className="notes-header">
        <h2 className="notes-title">&#9782; Notes</h2>
        <p className="notes-count">{notes.length} notes</p>
      </div>

      <div className="notes-list">
        {notes.map((note) => (
          <ListItem key={note.id} note={note} />
        ))}
      </div>
      <AddButton />
    </div>
  );
};

export default NotesListPage;
