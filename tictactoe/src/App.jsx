import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import Player from "./components/Player";
import { useState } from "react";

function App() {
  // const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((current) => (current === "X" ? "O" : "X"));
    // setActivePlayer((prevTurn) => {
      // let currentPlayer = "X";
    }
  //     if (prevTurn.length > 0 && prevTurn[0].player === "X") {
  //       currentPlayer = "O";
  //     }

  //     const updatedTurns = [
  //       {
  //         square: { row: rowIndex, col: colIndex },
  //         player: currentPlayer,
  //       },
  //       ...prevTurn,
  //     ];

  //     return updatedTurns;
  //   });
  // }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          activePlayerSymbol={activePlayer}
          onSelectSquare={handleSelectSquare}
        />
      </div>
      <Log />
    </main>
  );
}

export default App;
