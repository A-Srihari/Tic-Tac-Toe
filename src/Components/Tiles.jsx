function Tiles({ className, value, onClick, playerTurn }) {
  let hoverClass = null;
  if (value === null && playerTurn !== null) {
    hoverClass = `${playerTurn.toLowerCase()}-hover`;
  }
  return (
    <div onClick={onClick} className={`tile ${className} ${hoverClass}`}>
      <h5>{value}</h5>
    </div>
  );
}

export default Tiles;
