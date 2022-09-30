import React from "react";
import { createRoot } from "react-dom/client";
import "../assets/tailwind.css";

const Test = () => {
  return (
    <div>
      <h1 className="text-3xl text-green-500 ">TEST</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nihil id
        ducimus aliquid nesciunt accusantium rerum, ab distinctio enim odio
        natus porro, architecto tenetur. Illum veritatis quos doloribus saepe
        alias.
      </p>
    </div>
  );
};

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(Test());
