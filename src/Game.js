import React, { useState, useEffect } from "react";
import {loadActors, loadMetadata} from './api.js';

function Game() {
  const [actors, setActors] = useState([]);

  async function getActors() {
    const actorsList = await loadActors();
    const details = await loadMetadata(actorsList[0].id);
    // console.log(details);
  }

  useEffect(() => {
    getActors();
  }, []);

  return (
    <div>
      {actors.map((actor, i) => (
        <div>
          <div><img style={{width: "25%", height: "25%"}} src={actor.image_url} /></div>
        </div>
      ))}
    </div>
  );
}

export default Game;
