import React, { useState } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("red");

  return (
    <div>
      <div className="pole"></div>
      <div className="traffic-light">
        <div onClick={() => setColor("red")} className={"light red" + (color === "red" ? " glow" : "")}></div>
        <div onClick={() => setColor("yellow")} className={"light yellow" + (color === "yellow" ? " glow" : "")}></div>
        <div onClick={() => setColor("green")} className={"light green" + (color === "green" ? " glow" : "")}></div>
        <div onClick={() => setColor("blue")} className={"light blue" + (color === "blue" ? " glow" : "")}></div> {/* Added blue light because I like the color */}
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <TrafficLight />
    </div>
  );
};

export default Home;
