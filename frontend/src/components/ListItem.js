import React from "react";
import { Link } from "react-router-dom";

let getTitle = (note) => {
  let title = note.body.split("\n")[0];
  if (title.length > 30) {
    title = title.slice(0, 30);
  }
  return title;
};

let getContent = (note) => {
  let title = getTitle(note);
  let content = note.body.replaceAll("\n", " ");
  content = content.replaceAll(title, "");
  if (content.length > 30) {
    return content = content.slice(0, 30) + "...";
  } else {
    return content;
  }
};

let getTime = (note) => {
  return new Date(note.updated).toLocaleString();
};

const ListItem = ({ note }) => {
  return (
    <Link to={`/note/${note.id}`}>
      <div className="notes-list-item">
        <h3>{getTitle(note)}</h3>
        <p>
          <span>{getTime(note)}</span>{getContent(note)}
        </p>
      </div>
    </Link>
  );
};

export default ListItem;
