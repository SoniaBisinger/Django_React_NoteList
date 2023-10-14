import { createContext, useContext, useEffect, useState } from "react";

const NoteListContext = createContext({
  notes: [],
  addNote: (note) => {},
  removeNote: (noteId) => {},
  updateNote: (updatedNote) => {},
});

export const NoteListProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  const getNotes = async () => {
    const response = await fetch("/api/notes/");
    const data = await response.json();
    setNotes(data);
  };

  useEffect(() => {
    getNotes();
  }, []);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const removeNote = (noteId) => {
    setNotes((notes) => notes.filter((note) => note.id !== +noteId));
  };

  const updateNote = (updatedNote) => {
    setNotes((notes) =>
      notes.map((note) =>
        note.id === updatedNote.id ? updatedNote : note
      )
    );
  }

  return (
    <NoteListContext.Provider value={{ notes, addNote, removeNote, updateNote }}>
      {children}
    </NoteListContext.Provider>
  );
};

export const useNoteList = () => useContext(NoteListContext);
