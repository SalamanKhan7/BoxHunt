import { useState } from "react";
import "./Body.css";
import Container from "./Container";
import Header from "./Header";
import Table from "./Table";
const Body = () => {
  const [run, setRun] = useState(null);
  const [number, setNumber] = useState([]);
  const [count, setCount] = useState(1);
  const [reaction, setReaction] = useState(Math.floor(Math.random() * 10));
  const changePosition = () => {
    return Math.floor(Math.random() * 350);
  };

  const handleDiv = () => {
    console.log("div called");
    setRun(changePosition());
    setCount((count) => count + 1);
    setReaction(Math.floor(Math.random() * 10));

    const obj = {
      no: count,
      re: reaction,
    };
    console.log(obj);
    setNumber((number) => [...number, obj]);
    console.log(number);
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
      <Table number={number} reaction={reaction} />
    </div>
  );
};

export default Body;
