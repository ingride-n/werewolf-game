
import $ from "jquery";


// TODO: store data from Rapid API in a cache module

const defaultOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-rapidapi-host": process.env.REACT_APP_API_HOST,
      "x-rapidapi-key": process.env.REACT_APP_API_KEY,
    },
  };

async function loadActors() {
    const now = new Date();
    const params = $.param({ month: now.getMonth() + 1, day: now.getDate() });
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/list-born-today?${params}`,
      defaultOptions
    );
    const data = await res.json();
    const randomizedData = data
      .map((id) => {
        let re = /\/name\/(\w+)\//;
        let found = id.match(re)[1];
        return { id: found, image_url: null };
      });

    const str = JSON.stringify(randomizedData);
    console.log(str);
    return randomizedData;
  }


  async function loadMetadata(id) {
    sleep()
      .then(() =>
        fetch(
          `${process.env.REACT_APP_API_URL}/get-all-images?nconst=${id}`,
          defaultOptions
        )
      )
      .then((res) => res.json())
      .then((data) => {
        array.push({
          ...actor,
          image_url: data.resource.images[0].url,
        });
      });
  }

  function sleep() {
    return new Promise((resolve) => setTimeout(resolve(), 2000));
  }