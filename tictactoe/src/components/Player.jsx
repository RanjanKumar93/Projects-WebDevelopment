import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing((isEditing) => !isEditing);
  };

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };

  let playerInfo;

  if (isEditing) {
    playerInfo = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  } else {
    playerInfo = <span className="player-name">{playerName}</span>;
  }

  return (
    <li className={isActive ? 'active': undefined}>
      <span className="player">
        {playerInfo}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "SAVE" : "EDIT"}</button>
    </li>
  );
}
