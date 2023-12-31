export default function Log({ gameTurns }) {
  return (
    <ol id="log">
      {gameTurns.map((x) => (
        <li key={`${x.square.row}${x.square.col}}`}>
          {x.square.row} rowIndex and {x.square.col} columnIndex is pressed by{" "}
          {x.player}
        </li>
      ))}
    </ol>
  );
}
