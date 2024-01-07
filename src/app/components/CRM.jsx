import React from "react";
import Sales from "./subcomponents/Sales";
import Earnings from "./subcomponents/Earnings";

const CRM = () => {
  return (
    <div className="main-container ">
      <Sales />
      <Earnings />
      <div className="stats flex justify-evenly gap-4 m-4  border  border-gray-300">
        <div className="h-80 w-2/6 border border-gray-300 rounded-md ">
          sales
        </div>
        <div className="h-80 w-2/6 border border-gray-300 rounded-md">
          sessions
        </div>
        <div className="h-80 w-2/6 border border-gray-300 rounded-md">
          sessions
        </div>
      </div>
      <div className="tab flex justify-evenly gap-4 m-4  border  border-gray-300">
        <div className="h-80 w-3/6 border border-gray-300 rounded-md ">
          sales
        </div>
        <div className="h-80 w-3/6 border border-gray-300 rounded-md">
          sessions
        </div>
      </div>
    </div>
  );
};

export default CRM;
