// Parent.js
import React from "react";
import { Child } from "./props/Child";

export const Parent = () => {
  const parentDetails = {
    name: "suresh",
    role: "father",
    age: "44",
  };

  return (
    <div>
      <Child parentDetails1={parentDetails} />
    </div>
  );
};
