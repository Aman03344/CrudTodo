import React, { useEffect, useState } from 'react'
import Form from './assets/components/Form';
import ListGroup from './assets/components/ListGroup';
import Navbar from './assets/components/Navbar';

const App = () => {


  const [todos, setTodos] = useState([
  
  ])

  const dlt =(id)=>{
    setTodos(todos.filter((todo)=> todo.id !== id))
  }

  const addtodo =(text) =>{
  setTodos([{id: crypto.randomUUID(), text}, ...todos])
  }


  const [edit, setEdit] = useState({
    todo: {},
    isEdit: false
  })


  const edittodo =(oldtodo) =>{
   setEdit({
    todo: oldtodo,
    isEdit:true
    
   })
 
  }
  
    const updateTodo =(oldId, newText) =>{
      setTodos(todos.map((todo)=> todo.id === oldId ? {id: oldId ,text: newText}: todo))
      setEdit({todo : {}, isEdit : false})
      
    }

    
      return (
        <div>
          <Navbar/>
         <Form addtodo={addtodo} edit={edit} updateTodo={updateTodo} /> 
         <ListGroup todos={todos} dlt={dlt} edittodo={edittodo} />
    
        </div>
      )
    }
    
    export default App




