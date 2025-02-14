import React, { useContext, useEffect, useState } from "react";
import TodoContext from "../context/TodoContext";

const Form = () => {
  const [text, setText] = useState("");

const { addtodo , edit, updateTodo} = useContext(TodoContext)
  
  const handleSub =(e)=>{
    e.preventDefault()
    if(edit.isEdit === true){
      updateTodo({id: edit.todo.id, text})
    }else{
      addtodo(text)
    }
      setText("")
    
  }

  useEffect(()=>{
    setText(edit.todo.text)

  },[edit])



 

  return (
    <form
    onSubmit={(e)=>handleSub(e)}
      
      className="w-full h-auto flex justify-center items-center py-5 px-4"
    >
      <input
      onChange={(e)=>setText(e.target.value)}
        className="text-lgb sm:text-2xl md:text-3xl w-full max-w-[700px] h-auto px-4 py-2 outline-none font-bold text-black rounded-md"
       value={text}
        type="text"
        placeholder="Write your todo"
        // required
      />
      <button className="border-2 rounded-2xl px-5 sm:px-7 py-2 sm:py-2.5 text-xl sm:text-2xl font-bold ml-2">
        <i className="ri-add-large-line"></i>
      </button>
    </form>
  );
};

export default Form;
