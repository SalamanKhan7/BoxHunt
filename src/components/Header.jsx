import { useEffect, useState } from "react";
import "./Header.css";

const Header = (prop) => {
  const [light, setLight] = useState(false);

  const { setRun } = prop;
  const changePosition = () => {
    return Math.random() * 500;
  };
  useEffect(() => {
    if (light) {
      const t = setInterval(() => {
        setRun(changePosition());
      }, 3000);
      return () => clearInterval(t);
    }
  });

  const handleStart = () => {
    setLight(true);
  };

  const handlePause = () => {
    setLight(false);
  };
  const handleReset = () => {
    setLight(false);
  };

  return (
    <div className="Header">
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Header;
