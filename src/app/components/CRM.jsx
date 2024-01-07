import React from "react";
import Sales from "./subcomponents/Sales";
import Earnings from "./subcomponents/Earnings";
import Stats from "./subcomponents/Stats";
import Tables from "./subcomponents/Tables";

const CRM = () => {
  return (
    <div className="main-container ">
      <Sales />
      <Earnings />
      <Stats />
      <Tables />
    </div>
  );
};

export default CRM;
