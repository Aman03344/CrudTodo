import { Children, createContext, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([

  ]);

  const dlt = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addtodo = (text) => {
    setTodos([{ id: crypto.randomUUID(), text }, ...todos]);
  };

  const [edit, setEdit] = useState({
    todo: {},
    isEdit: false,
  });

  const edittodo = (oldtodo) => {
    setEdit({
      todo: oldtodo,
      isEdit: true,
    });
  };

  const updateTodo = (updatedTodo) => {
    setTodos(
      todos.map((todo) =>
        todo.id === updatedTodo.id ? updatedTodo  : todo
      )
    );
    setEdit({ todo: {}, isEdit: false });
  };

  return (
    <TodoContext.Provider value={{ todos, dlt, addtodo , edit, updateTodo, edittodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
