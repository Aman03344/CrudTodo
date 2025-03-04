import React, { useContext } from "react";
import ListItem from "./ListItem";
import TodoContext from "../context/TodoContext";

const ListGroup = () => {


  const { todos } = useContext(TodoContext)

  

  return (
    <ul className="w-full flex flex-col justify-start items-start rounded-t-2xl p-2 border-t-4 border-t-[#E7D1FF]">
      <div className="w-full flex justify-between items-center py-3 px-4">
        <span className="border rounded-lg px-3 py-1 bg-[#D2FF48] text-sm sm:text-base">
          <i className="ri-hashtag"></i> Total Todos
        </span>
        <span className="border rounded-lg px-3 py-1 bg-[#D2FF48] text-sm sm:text-base">
          <i className="ri-hashtag"></i>
          {todos.length}
        </span>
      </div>

      <div className="w-full flex flex-wrap gap-3 justify-center items-center px-5">
        {todos.map((todo) => (
          <ListItem key={todo.id} todo={todo} />
        ))}
      </div>
    </ul>
  );
};

export default ListGroup;
