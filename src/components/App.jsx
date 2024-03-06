import React, {useState} from "react";
import LoginForm from "./LoginForm";
import './styles/style.css'


function App(){

  const [account, setAccount] = useState(true)

  function test(){
    setAccount(hasAccount => hasAccount = false)
  }
  /// new way of creating a function called arrow function and no need to put () in Contact
    return (
       <div className="FormContainer">
        <LoginForm hasAccount={account} TestAccount={test} />
       </div>
    )   
} 

export default App;