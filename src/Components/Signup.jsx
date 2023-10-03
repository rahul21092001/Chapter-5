import React from "react";
import Template from "./Template";

function Signup({ setIsLoggedIn }) {
  return <Template formType="signup" setIsLoggedIn={setIsLoggedIn} />;
}

export default Signup;
