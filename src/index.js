import React from "react"
import ReactDOM from "react-dom"
//component file
import TodoContainer from  './functionBased/components/TodoContainer'
import './functionBased/App.css'
import { BrowserRouter } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoContainer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)