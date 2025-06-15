import GameState from "./GameState";

function Reset({ gameState, onClick }) {
  if (gameState === GameState.inProgress) {
    return;
  }
  return (
    <button onClick={onClick} className="reset-button">
      Reset
    </button>
  );
}

export default Reset;
