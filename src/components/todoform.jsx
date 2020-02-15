import React, { useState } from "react";
import PropTypes from "prop-types";
// import Button from "./button";
// useState = mini database di dalam todoform ini
const todoform = ({ addTodo, showAdd }) => {
  const [value, setValue] = useState("");
  const handleFormSubmit = e => {
    e.preventDefault();
    if (value === "") {
      alert("No ToDo");
    } else {
      if (value.length > 30) {
        alert("Too Length");
      } else {
        addTodo(value);
        alert(value);
        setValue("");
      }
    }
  };

  if (showAdd) {
    return (
      <section className="add">
        <form className="add-form" onSubmit={handleFormSubmit}>
          <input
            type="text"
            className="add-input"
            onChange={e => setValue(e.target.value)}
            value={value}
          />
          <button className="add-btn">Add</button>
        </form>
      </section>
    );
  } else {
    return null;
  }
};

export default todoform;
todoform.propTypes = {
  addTodo: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired
};
