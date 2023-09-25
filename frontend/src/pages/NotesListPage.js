import React, { useState, useEffect } from "react";
import ListItem from "../components/ListItem";
import AddButton from "../components/AddButton";

const NotesListPage = () => {
  let [notes, setNotes] = useState([]);

  const getNotes = async () => {
    const response = await fetch("/api/notes/");
    const data = await response.json();
    setNotes(data);
  };
  
  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div className="notes">
      <div className="notes-header">
        <h2>&#9782;</h2>
        <p className="note-count">{notes.length} notes</p>
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
