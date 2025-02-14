import React from "react"
import Navbar from "./components/Navbar"
import Form from "./components/Form"
import ListGroup from "./components/ListGroup"
import { TodoProvider } from "./context/TodoContext"

const App = () => {

  


    
      return (
        <TodoProvider>
          <Navbar/>
         <Form  /> 
         <ListGroup  />
    
        </TodoProvider>
      )
    }
    
    export default App




