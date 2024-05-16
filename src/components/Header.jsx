import { useEffect, useRef, useState } from "react";
import "./Header.css";

const Header = (prop) => {
  const [light, setLight] = useState(false);
  const [countN, setCountN] = useState(3000);
  const inputRef = useRef();

  const { setRun, changePosition, number, setNumber, setCount } = prop;

  useEffect(() => {
    if (light) {
      const t = setInterval(() => {
        setRun(changePosition());
      }, countN);
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
    setNumber((number.length = []));
    setCount(1);
  };
  const handleChange = () => {
    setCountN(inputRef.current.value);
  };
  return (
    <div className="Header">
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
      <input
        type="number"
        name="Number"
        value={countN}
        ref={inputRef}
        onChange={handleChange}
      />
    </div>
  );
};

export default Header;
