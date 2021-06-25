import React from "react";
import { Link } from "react-router-dom";

export function PlayerLink({ name }) {
  const playerName = name;
  return (
    <li key={playerName}>
      <Link to={`/p/${playerName}`} className="nav-link">
        {playerName}
      </Link>
    </li>
  );
}

