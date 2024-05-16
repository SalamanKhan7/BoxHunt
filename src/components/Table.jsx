import "./Table.css";
const Table = (prop) => {
  const { number } = prop;
  console.log(number);
  return (
    <div className="table">
      <table border={"1"}>
        <thead>
          <tr>
            <th>Mouse clicked Number</th>
            <th>Reaction time</th>
          </tr>
        </thead>
        <tbody>
          {number.map((no, i) => (
            <tr key={i}>
              <td>{no}</td>
              <td>.1s</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
