// Child.js
import React from "react";

export const Child = ({ hai }) => {
  console.log(hai);

  return (
    <div>
      <h1>Parent details: {hai.parentDetails1.name}</h1>
      <p>Role: {hai.parentDetails1.role}</p>
      <p>Age: {hai.parentDetails1.age}</p>
    </div>
  );
};
