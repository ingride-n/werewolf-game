import React, { useState, useEffect } from "react";
import { ACTORS } from "./ACTORS.js";

const randomList = ACTORS.sort(() => Math.random() - 0.5).slice(0, 10);

function Game() {
  const [actors, setActors] = useState(randomList);

  useEffect(() => {}, []);

  return <div></div>;
}

export default Game;
