import { useEffect, useState } from "react";
import Board from "./Board";
import GameOver from "./GameOver";
import GameState from "./GameState";
import Reset from "./Reset";
const player_X = "X";
const player_Y = "O";

function TicTacToe() {
  const [tile, setTile] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(player_X);
  const [strikeClass, setStrikeClass] = useState();
  const [gameState, setGameState] = useState(GameState.inProgress);

  const handleTileClick = (index) => {
    if (gameState !== GameState.inProgress) {
      return;
    }
    if (tile[index] === null) {
      console.log(index);
      const newTile = [...tile];
      newTile[index] = playerTurn;
      setTile(newTile);
      if (playerTurn === player_X) {
        setPlayerTurn(player_Y);
      } else {
        setPlayerTurn(player_X);
      }
    }
  };

  const winningCombo = [
    // rows
    { combo: [0, 1, 2], strikeClass: "strike-row-1" },
    { combo: [3, 4, 5], strikeClass: "strike-row-2" },
    { combo: [6, 7, 8], strikeClass: "strike-row-3" },
    // columns
    { combo: [0, 3, 6], strikeClass: "strike-column-1" },
    { combo: [1, 4, 7], strikeClass: "strike-column-2" },
    { combo: [2, 5, 8], strikeClass: "strike-column-3" },
    // diagonals
    { combo: [0, 4, 8], strikeClass: "strike-diagonal-1" },
    { combo: [2, 4, 6], strikeClass: "strike-diagonal-2" },
  ];

  const checkWinner = (tile, setStrikeClass, setGameState) => {
    for (const { combo, strikeClass } of winningCombo) {
      const tileValue1 = tile[combo[0]];
      const tileValue2 = tile[combo[1]];
      const tileValue3 = tile[combo[2]];

      if (
        tileValue1 !== null &&
        tileValue1 === tileValue2 &&
        tileValue1 === tileValue3
      ) {
        setStrikeClass(strikeClass);
        if (tileValue1 === "X") {
          setGameState(GameState.playerXwins);
        } else if (tileValue1 === "O") {
          setGameState(GameState.playerOwins);
        }
        return;
      }
    }

    const checkTilesNotNull = tile.every((tile) => tile !== null);
    if (checkTilesNotNull) {
      setGameState(GameState.draw);
    }
  };

  useEffect(() => {
    checkWinner(tile, setStrikeClass, setGameState);
  }, [tile]);

  const handleReset = () => {
    setTile(Array(9).fill(null));
    setGameState(GameState.inProgress);
    setPlayerTurn(player_X);
    setStrikeClass(null);
  };

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Board
        strikeClass={strikeClass}
        playerTurn={playerTurn}
        tile={tile}
        tileNumber={handleTileClick}
      />
      <GameOver gameState={gameState}></GameOver>
      <Reset onClick={handleReset} gameState={gameState}></Reset>
    </div>
  );
}

export default TicTacToe;
