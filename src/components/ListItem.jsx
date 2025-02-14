import React, { useContext } from "react";
import TodoContext from "../context/TodoContext";

const ListItem = ({ todo}) => {


  const { dlt , edittodo } = useContext(TodoContext)

  return (
    <li className="w-full sm:w-[47%] max-h-[170px] h-auto p-3 sm:p-4 text-black bg-[#CDA6FE] rounded-2xl border-2 relative">
      <h1 className="text-lg sm:text-xl md:text-2xl">{todo.text}</h1>
      <p className="text-sm text-gray-900">
       
      </p>
      <div className="absolute bottom-3 right-3 flex gap-2">
        <button
          onClick={()=>edittodo(todo)}
          className="px-3 sm:px-5 py-1 bg-black text-white rounded-md"
        >
          <i className="ri-edit-line"></i>
        </button>
        <button
         onClick={()=>dlt(todo.id)}
          className="px-3 sm:px-5 py-1 bg-black text-white rounded-md"
        >
          <i className="ri-delete-bin-4-line"></i>
        </button>
      </div>
    </li>
  );
};

export default ListItem;
