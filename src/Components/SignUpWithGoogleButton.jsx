import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";

const SignUpWithGoogleButton = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_CLIENT_ID">
      <GoogleLogin
        render={(renderProps) => (
          <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
            Sign up with Google
          </button>
        )}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </GoogleOAuthProvider>
  );
};

export default SignUpWithGoogleButton;
