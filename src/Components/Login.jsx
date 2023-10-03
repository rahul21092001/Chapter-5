import React from "react";
import Template from "./Template";

function Login({ setIsLoggedIn }) {
  return <Template formType="login" setIsLoggedIn={setIsLoggedIn} />;
}

export default Login;
