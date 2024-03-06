import React from "react";
import './styles/Form.css';
import InputField from "./InputField";
import SocialLogin from "./SocialLoginBtn";



function LoginForm(props){


 
 


    return (
    <div className="form-container">
        <p className="title">Welcome back</p>
        <form className="form">
          <InputField type = "email" placeHolder = "Email"/>
          <InputField type = "password" placeHolder = "Password"/>
          {props.hasAccount? null : <InputField placeHolder = "Confirm Password"/>}
          <p className="page-link">
            {props.hasAccount? <span className="page-link-label">Forgot Password?</span> : null}
          </p>
          <button className="form-btn">{props.hasAccount? "Log in" : "Register"}</button>
        </form>
        {props.hasAccount?  <p className="sign-up-label">Don't have an account?<span className="sign-up-link" onClick={props.TestAccount} >Sign up</span>
        </p> : null}
        <SocialLogin logWithApple = {props.hasAccount ? "Log in with Apple" : "Connect with Apple"}
         logWithGoogle = {props.hasAccount ? "Log in with Google" : "Connect with Google"}/>
    </div>
    )
}

export default LoginForm;