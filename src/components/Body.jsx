import { useState } from "react";
import "./Body.css";
import Container from "./Container";
import Header from "./Header";
import Table from "./Table";
const Body = () => {
  const [run, setRun] = useState(null);
  const [number, setNumber] = useState([]);
  const [count, setCount] = useState(1);
  const changePosition = () => {
    return Math.floor(Math.random() * 500);
  };

  const handleDiv = () => {
    console.log("div called");
    setRun(changePosition());
    setCount((count) => count + 1);
    console.log(count);
    setNumber((number) => [...number, count]);
  };
  return (
    <div className="Container">
      <Header
        setRun={setRun}
        changePosition={changePosition}
        number={number}
        setNumber={setNumber}
        setCount={setCount}
      />
      <Container run={run} handleDiv={handleDiv} />
      <Table number={number} />
    </div>
  );
};

export default Body;
