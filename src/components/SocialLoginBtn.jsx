import React from "react";
import Svg from "./SvgContainer";
function SocialLogin(props){
    return (
        <div>
            <div className="buttons-container">
          <div className="apple-login-button">
          {Svg[0].svg}
            <span>{props.logWithGoogle}</span>
          </div>
          <div className="google-login-button">
          {Svg[1].svg}
            <span>{props.logWithApple}</span>
          </div>
        </div>
        </div>
    )
}

export default SocialLogin;