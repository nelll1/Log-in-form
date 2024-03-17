import React, {useState} from "react";
import './styles/Form.css';
import InputField from "./InputField";
import SocialLogin from "./SocialLoginBtn";
import users from "./account";
import ConfirmPassword from "./ConfirmPass";
function LoginForm(props){
  
  const [user, setUsers] = useState({
    email: "",
    password: ""
  })
  const [hasAccount, setAccount] = useState(true)

  function inputCredential(event){
    const {value, name} = event.target;    
    setUsers(prevValue =>{
      if(name === "email"){
        return {
          email: value,
          password: prevValue.password
        }
      }else if(name === "password"){
        return{
          email: prevValue.email,
          password: value
        }
      }
    })
  }



 
  function submit() {
    const userRegistered = users;
    for(const credential of userRegistered){
      if(credential.email === user.email && credential.password === user.password){
        const name = credential.fullname;
        alert('Welcome back ' + name)
        setAccount(true)
        break;
      }else{
        alert('Wrong password or email')
        return;
      }
    }
  }

  const signUp = () =>{
    setAccount(false)
  }


    return (
    <div className="form-container">
        <p className="title">Welcome back</p>
        <form className="form">
          <InputField passwordValue={user.password} emailValue={user.email} onChange={inputCredential} email="email" password="password" />
          {hasAccount? null : <ConfirmPassword/>}
          <p className="page-link">
            {props.hasAccount? <span className="page-link-label">Forgot Password?</span> : null}
          </p>
          <button className="form-btn" name="submit"  onClick={submit}>{hasAccount? "Log in" : "Register"}</button>
        </form>
        {hasAccount? <p className="sign-up-label">Don't have an account?<span className="sign-up-link" onClick={signUp} >Sign up</span>
        </p> : null}
        <SocialLogin logWithApple = {hasAccount ? "Log in with Apple" : "Connect with Apple"}
         logWithGoogle = {hasAccount ? "Log in with Google" : "Connect with Google"}/>
    </div>
    )
}

export default LoginForm;