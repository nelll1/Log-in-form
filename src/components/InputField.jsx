import React from "react";

function InputField(props){
    return (<input type={props.type} className="input" placeholder={props.placeHolder}/>)
}

export default InputField;