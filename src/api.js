const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

async function loadActors() {
  const url = `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_API_KEY}`;

  let randomPage = await fetch(url)
    .then((res) => res.json())
    .then((data) => Math.floor(Math.random() * data.total_pages));

  const data = await fetch(`${url}&page=${randomPage}`)
    .then((res) => res.json())
    .then((data) =>
      data.results.map((person) => ({ id: person.id, name: person.name }))
    );

    // console.log(data);

  return data;
}

async function getImages(id) {
  const images = await fetch(
    `https://api.themoviedb.org/3/person/${id}/images?api_key=${process.env.REACT_APP_API_KEY}`,
    options
  )
    .then((res) => res.json())
    .then((data) => data.profiles.map((p) => p.file_path));

  return images;
}

async function getDetails(id) {
  const details = await fetch(
    `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_API_KEY}`,
    options
  )
    .then((res) => res.json())
    .then((data) => ({
      birthday: data.birthday,
      bio: data.biography,
      gender: data.gender,
      origin: data.place_of_birth,
      isAdult: data.adult,
    }));

  return details;
}

async function loadMetadata(actorId) {
  // console.log(actorId);
  const [images, details] = await Promise.all([
    getImages(actorId),
    getDetails(actorId),
  ]);

  // console.log(images, details);

  return {...details, image_urls: images};
}

export { loadActors, loadMetadata };
