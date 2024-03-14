import React, {useState} from "react";
import LoginForm from "./LoginForm";
import './styles/style.css'

function App(props){
  /// new way of creating a function called arrow function and no need to put () in Contact
    return (
       <div className="FormContainer">
       <LoginForm/>
       </div>
    )   
} 

export default App;