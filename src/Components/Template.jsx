import React from "react";
import SignupForm from "./SignupForm.jsx";
import LoginForm from "./LoginForm.jsx";
import SignUpWithGoogleButton from "./SignUpWithGoogleButton.jsx";

const Template = ({ title, desc1, desc2, formType, setIsLoggedIn }) => {
  return (
    <div className="flex flex-col justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-y-0 gap-x-12">
      <div className="w-11/12 max-w-[450px] mx-0 text-white">
        <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">
          {title}
        </h1>
        <p className="text-[1.125rem] mt-4 leading-[1.625rem]">
          <span className="text-richblack-100">{desc1}</span>
          <span className="text-blue-100 italic">{desc2}</span>
        </p>

        {formType === "signup" ? (
          <SignupForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}

        <div className="flex w-full items-center my-4 gap-x-2">
          <div className="h-[1px] w-full bg-richblack-700"></div>
          <p className="text-richblack-700 font-medium leading-[1.375rem]">
            OR
          </p>
          <div className="h-[1px] w-full bg-richblack-700"></div>
        </div>

        <div className="w-full flex items-center justify-center rounded-[8px] font-medium text-richblack-100 border-richblack-700 border px-[12px] py-[8px] gap-x-2 mt-6">
          <SignUpWithGoogleButton />
        </div>
      </div>
    </div>
  );
};

export default Template;
