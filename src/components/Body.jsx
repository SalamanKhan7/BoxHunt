import { useState } from "react";
import "./Body.css";
import Container from "./Container";
import Header from "./Header";
const Body = () => {
  const [run, setRun] = useState(null);

  return (
    <div className="Container">
      <Header setRun={setRun} />
      <Container run={run} />
    </div>
  );
};

export default Body;
