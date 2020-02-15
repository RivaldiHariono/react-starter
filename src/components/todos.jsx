import React from "react";
import Todo from "./todo";
import PropTypes from "prop-types";

const todos = ({ todos, completeTodo }) => {
  return (
    <section className="todos">
      {todos.length > 0 &&
        todos.map((todo, index) => {
          return (
            <Todo
              key={index}
              text={todo.text}
              completeTodo={completeTodo}
              index={index}
              isCompleted={todo.isCompleted}
            />
          );
        })}
      {todos.length === 0 && (
        <div className="placeholder">Press 'Add' to Add New Todo</div>
      )}
    </section>
  );
};
todos.protoTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string
    })
  ),
  completeTodo: PropTypes.func.isRequired
};
export default todos;
