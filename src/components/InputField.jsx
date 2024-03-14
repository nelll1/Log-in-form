import React from "react";

function InputField(props){
    return <div>
        <input className="input" type = "email" placeholder = {props.email} name={props.email} value={props.emailValue} onChange={props.onChange}/>
        <input className="input" type = "password" placeholder = {props.password} name={props.password} value={props.passwordValue} onChange={props.onChange}/>
    </div>
}

export default InputField;