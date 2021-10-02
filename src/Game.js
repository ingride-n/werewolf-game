import React, { useState, useEffect } from "react";
import $ from 'jquery';


function Game() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const params = $.param({ month: "2", day: "28" });
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-rapidapi-host": process.env.REACT_APP_API_HOST,
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
      },
    };
    fetch(`${process.env.REACT_APP_API_URL}/list-born-today?${params}`, options)
      .then((res) => res.json())
      .then((data) => {
          setActors(data.map(id => {
              let re = /\/name\/(\w+)\//;
              let found = id.match(re)[1];
              return found[1];
          }))
      });
  }, []);

  return <div></div>;
}

export default Game;
