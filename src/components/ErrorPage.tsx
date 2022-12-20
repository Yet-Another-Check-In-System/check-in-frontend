import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error: any = useRouteError();

  return (
    <div className="flex flex-col h-screen w-screen bg-mintCream justify-center items-center">
      <h1 className="text-4xl text-fireOpal">Oops!</h1>
      <p className="text-2xl">Sorry, an unexpected error has occurred.</p>
      <p className="text-2xl">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
