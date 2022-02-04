import React from "react";
import image from "../image.png"
const Main = () => {
  const person = { name: "hamza", age: 30, work: "developer" };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>name :{person.name}</h1>
      <h2>age:{person.age}</h2>
      <img src={image}/>
      <img src={"/formation.PNG"} />
    </div>
  );
};
export default Main;
