import React from "react";

type AuthenticationPageProps = {
  LoginAndRegisterView: JSX.Element;
};

const AuthenticationPage = ({
  LoginAndRegisterView,
}: AuthenticationPageProps) => {
  return (
    <div className="App">
      <div className="flex flex-row h-screen w-screen justify-center items-center">
        <div className="flex flex-row justify-center items-center h-full w-1/2 bg-fireOpal">
          <div>Logo here</div>
        </div>
        <div className="flex flex-col justify-center items-center h-full w-1/2 bg-mintCream">
          {LoginAndRegisterView}
        </div>
      </div>
    </div>
  );
};

export default AuthenticationPage;
