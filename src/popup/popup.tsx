import React from "react";
import { createRoot } from "react-dom/client";
import "../assets/tailwind.css";

const Test = () => {
  return (
    <div>
      <h1 className="text-3xl text-green-500 ">TEST</h1>
      <img src="./static/icon.png" alt="This is img" />
    </div>
  );
};

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(Test());
