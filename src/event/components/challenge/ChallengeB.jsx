import { useState } from "react";
import ColorSwitch from "./ColorSwitch";

export default function ChallengeB() {
  const [count, setCount] = useState(0);
  function handleAddCount() {
    setCount((prev) => prev + 1);
  }

  function getRandomLightColor() {
    let r = 150 + Math.round(100 * Math.random());
    let g = 150 + Math.round(100 * Math.random());
    let b = 150 + Math.round(100 * Math.random());
    return `rgb(${r}, ${g}, ${b})`;
  }

  function handleChangeColor() {
    let bodyStyle = document.body.style;
    bodyStyle.backgroundColor = getRandomLightColor();
  }
  return (
    <div onClick={handleAddCount}>
      <ColorSwitch onChangeColor={handleChangeColor} />
      <h1>Clicks on the page {count}</h1>
    </div>
  );
}
