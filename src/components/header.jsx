import React from "react";
import PropTypes from "prop-types";
import Button from "./button";

const header = ({ showAddToggle, showAdd, clearTodo }) => {
  return (
    <div className="header">
      <Button text={showAdd ? "Finish" : "Add"} onClick={showAddToggle} />
      <h1 className="header-title">Todo List</h1>
      <Button onClick={clearTodo} text={"Clear"} color="red" />
    </div>
  );
};

header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodo: PropTypes.func.isRequired
};

export default header;
