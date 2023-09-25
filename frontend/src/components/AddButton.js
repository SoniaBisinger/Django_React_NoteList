import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as PlusButton } from "../assets/plus-button.svg";

const AddButton = () => {
  return (
    <div>
      <Link to="/note/new" className="floating-button">
      <PlusButton />
      </Link>
    </div>
  );
};

export default AddButton;
