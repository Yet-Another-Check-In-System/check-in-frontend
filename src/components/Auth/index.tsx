import React from "react";

type AuthProps = {
  LeftBody?: JSX.Element;
  RightBody?: JSX.Element;
};

const Auth = ({ LeftBody, RightBody }: AuthProps) => {
  return (
    <div className="flex flex-row h-screen w-screen justify-center items-center">
      <div className="flex flex-row justify-center items-center h-full w-1/2 bg-fireOpal">
        {LeftBody}
      </div>
      <div className="flex flex-col justify-center items-center h-full w-1/2 bg-mintCream">
        {RightBody}
      </div>
    </div>
  );
};

export default Auth;
export { default as Login } from "./Login";
export { default as Register } from "./Register";
export { default as SocialButtons } from "./SocialButtons";
