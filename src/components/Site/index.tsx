import React from "react";
import TextPage from "./TextPage";
import QrPage from "./QrPage";

const GeneralPage = () => {
  return (
    <div className="App">
      <div className="flex flex-row h-screen w-screen justify-center items-center">
        <div className="flex flex-row justify-center items-center h-full w-1/2 bg-fireOpal text-mintCream">
          <TextPage />
        </div>
        <div className="flex flex-col justify-center items-center h-full w-1/2 bg-mintCream text-black">
          <QrPage />
        </div>
      </div>
    </div>
  );
};

export default GeneralPage;
export { TextPage, QrPage };
