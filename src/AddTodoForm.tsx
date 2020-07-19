import React, { useState } from "react";

interface Props {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
  const [todoText, setTodoText] = useState("");
  return (
    <form>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          addTodo(todoText);
          setTodoText("");
        }}
      >
        Add Todo
      </button>
    </form>
  );
};
