import React, { useState } from "react";

import Paper from "../components/paper";
import Header from "../components/header";
import Todoform from "../components/todoform";
import Todos from "../components/todos";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const [showAdd, setShowAdd] = useState(false);

  const addTodo = value => {
    if (todos.length < 5) {
      const addedTodo = [...todos, { text: value, isCompleted: false }];
      setTodos(addedTodo);
    } else {
      alert("Hanya 5 todos");
    }
  };
  const completedTodo = index => {
    const addedTodo = [...todos];
    if (addedTodo[index].isCompleted === false) {
      addedTodo[index].isCompleted = true;
    } else {
      addedTodo[index].isCompleted = false;
    }
    setTodos(addedTodo);
  };
  const clearTodo = () => !showAdd && setTodos([]);
  const showAddToggle = () => setShowAdd(!showAdd);

  console.log("todos", todos);
  return (
    // className nama lain dari class
    <Paper>
      <Header
        showAddToggle={showAddToggle}
        showAdd={showAdd}
        clearTodo={clearTodo}
      />
      <Todoform addTodo={addTodo} showAdd={showAdd} />
      <Todos todos={todos} completeTodo={completedTodo} />
    </Paper>
  );
};
export default TodoList;
