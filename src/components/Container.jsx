import "./Container.css";
const Container = (prop) => {
  const { run, handleDiv } = prop;
  console.log(run);

  return (
    <div className="Main">
      <div
        className="box"
        style={{
          position: "absolute",
          top: `${run}px`,
          left: `${run}px`,
        }}
        onClick={handleDiv}
      ></div>
    </div>
  );
};

export default Container;
