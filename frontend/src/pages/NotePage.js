import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ReactComponent as LeftArrow } from "../assets/left_arrow.svg";

const NotePage = () => {
  let { noteId } = useParams();
  let [note, setNote] = useState([null]);
  let navigate = useNavigate();

  useEffect(() => {
    getNote();
  }, [noteId]);

  let getNote = async () => {
    const response = await fetch(`/api/notes/${noteId}`);
    const data = await response.json();
    setNote(data);
  };

  let updateNote = async () => {
    fetch(`/api/notes/${noteId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  let handleSubmit = () => {
    updateNote();
    navigate("/");
  };

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <LeftArrow onClick={handleSubmit} className="back-arrow" />
        </h3>
      </div>
      <textarea
        onChange={(e) => {
          setNote({ ...note, body: e.target.value });
        }}
        defaultValue={note?.body}
      ></textarea>
    </div>
  );
};

export default NotePage;
