import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ReactComponent as LeftArrow } from "../assets/left_arrow.svg";
import { useNoteList } from "../components/NoteListProvider";

const NotePage = () => {
  let { noteId } = useParams();
  let [note, setNote] = useState(null);
  let navigate = useNavigate();

  const { addNote, updateNote: updateNoteInList, removeNote } = useNoteList();

  useEffect(() => {
    getNote();
  }, [noteId]);

  let getNote = async () => {
    if (noteId === "new") return;

    let response = await fetch(`/api/notes/${noteId}`);
    let data = await response.json();
    setNote(data);
  };

  let updateNote = async () => {
    const response = await fetch(`/api/notes/${noteId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
    updateNoteInList(await response.json());
  };

  let handleSubmit = () => {
    if (noteId !== "new" && note.body.length < 1) {
      deleteNote();
    } else if (noteId !== "new") {
      updateNote();
    } else if (noteId === "new" && note.body !== null) {
      createNote();
    }
    navigate("/");
  };

  let handleChange = (value) => {
    const title = value.slice(0, 30).split("\n").shift();
    setNote((note) => ({ ...note, title, body: value }));
  };

  let deleteNote = async () => {
    removeNote(noteId);
    await fetch(`/api/notes/${noteId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  let createNote = async () => {
    const response = await fetch(`/api/notes/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
    addNote(await response.json());
  };

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <LeftArrow onClick={handleSubmit} className="back-arrow" />
        </h3>
        {noteId !== "new" ? (
          <button
            onClick={() => {
              deleteNote();
              navigate("/");
            }}
          >
            Delete
          </button>
        ) : (
          <button onClick={handleSubmit}>Done</button>
        )}
      </div>
      <textarea
        onChange={(e) => handleChange(e.target.value)}
        value={note?.body}
        placeholder="Enter your note here..."
      ></textarea>
    </div>
  );
};

export default NotePage;
