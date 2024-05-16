import "./Table.css";
const Table = (prop) => {
  const { number } = prop;
  console.log(number);
  return (
    <div className="table">
      <table border={"1"}>
        <thead>
          <tr>
            <th className="mainH">Mouse clicked Number</th>
            <th className="mainH">Reaction time</th>
          </tr>
        </thead>
        <tbody>
          {number.map((num, i) => (
            <tr key={i}>
              <td>{num.no}</td>
              <td>.{num.re} s</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
