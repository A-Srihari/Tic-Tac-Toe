import Strike from "./Strike";
import Tiles from "./Tiles";

function Board({ tile, tileNumber, playerTurn, strikeClass }) {
  return (
    <div className="board">
      <Tiles
        playerTurn={playerTurn}
        onClick={() => {
          tileNumber(0);
        }}
        value={tile[0]}
        className="right-border bottom-border"
      />
      <Tiles
        playerTurn={playerTurn}
        onClick={() => {
          tileNumber(1);
        }}
        value={tile[1]}
        className="right-border bottom-border"
      />
      <Tiles
        playerTurn={playerTurn}
        onClick={() => {
          tileNumber(2);
        }}
        value={tile[2]}
        className="bottom-border"
      />
      <Tiles
        playerTurn={playerTurn}
        onClick={() => {
          tileNumber(3);
        }}
        value={tile[3]}
        className="right-border bottom-border"
      />
      <Tiles
        playerTurn={playerTurn}
        onClick={() => {
          tileNumber(4);
        }}
        value={tile[4]}
        className="right-border bottom-border"
      />
      <Tiles
        playerTurn={playerTurn}
        onClick={() => {
          tileNumber(5);
        }}
        value={tile[5]}
        className="bottom-border"
      />
      <Tiles
        playerTurn={playerTurn}
        onClick={() => {
          tileNumber(6);
        }}
        value={tile[6]}
        className="right-border"
      />
      <Tiles
        playerTurn={playerTurn}
        onClick={() => {
          tileNumber(7);
        }}
        value={tile[7]}
        className="right-border"
      />
      <Tiles
        playerTurn={playerTurn}
        onClick={() => {
          tileNumber(8);
        }}
        value={tile[8]}
        className=""
      />

      <Strike strikeClass={strikeClass}></Strike>
    </div>
  );
}

export default Board;
