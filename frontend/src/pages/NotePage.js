import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ReactComponent as LeftArrow } from "../assets/left_arrow.svg";

const NotePage = () => {
  let { noteId } = useParams();
  let [note, setNote] = useState({});
  let navigate = useNavigate();

  useEffect(() => {
    getNote();
  }, [noteId]);

  let getNote = async () => {
    if (noteId === "new") {
      setNote({});
    }

    const response = await fetch(`/api/notes/${noteId}`);
    const data = await response.json();
    setNote(data);
  };

  let updateNote = async () => {
    fetch(`/api/notes/${noteId}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
    setNote({});
  };

  let handleSubmit = () => {
    if (noteId !== "new" && note.body.length < 1) {
      deleteNote();
    } else if (noteId !== "new") {
      updateNote();
    } else if (noteId === "new" && note.body) {
      createNote();
    }
    setNote({});
    navigate("/");
  };

  let deleteNote = async () => {
    fetch(`/api/notes/${noteId}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    navigate("/");
  };

  let createNote = async () => {
      fetch(`/api/notes/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(note),
      });
      navigate("/");
  };

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <LeftArrow onClick={handleSubmit} className="back-arrow" />
        </h3>
        {noteId !== "new" ? (
          <button onClick={deleteNote}>Delete</button>
        ) : (
          <button onClick={handleSubmit}>Done</button>
        )}
      </div>
      <textarea
        onInput={(e) => {
          setNote({ ...note, body: e.target.value });
        }}
        onBlur={() => {
          if (noteId !== "new" && note.body === "") {
            deleteNote();
          }
        }}
        defaultValue={note?.body}
      ></textarea>
    </div>
  );
};

export default NotePage;
