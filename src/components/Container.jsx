import "./Container.css";
const Container = (prop) => {
  const { run } = prop;
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
      ></div>
    </div>
  );
};

export default Container;
