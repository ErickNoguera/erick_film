const axios = require("axios");

const submitButton = document.getElementById("submit-button");
const cleanButton = document.getElementById("clean-button");

const title = document.getElementById("title");
const year = document.getElementById("year");
const director = document.getElementById("director");
const duration = document.getElementById("duration");
const genre = document.getElementById("genre");
const rate = document.getElementById("rate");
const poster = document.getElementById("poster");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const movie = {
    title: title.value,
    year: Number(year.value),
    director: director.value,
    duration: duration.value,
    genre: [genre.value],
    rate: Number(rate.value),
    poster: poster.value,
  };
  if (
    !movie.title ||
    !movie.year ||
    !movie.director ||
    !movie.duration ||
    movie.genre.length === 0 ||
    !movie.rate ||
    !movie.poster
  ) {
    alert("Todos los campos son obligatorios");
    throw Error("Todos los campos son obligatorios");
  } else {

    axios
    .post("http://localhost:3000/movies", movie)
    .then((res) => {
      if (res.status === 200) {
        alert("Movie created succesfully");
      }
    })
    .catch((err) => console.log(err));
    }
});
cleanButton.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(event);
  title.value = "";
  year.value = "";
  director.value = "";
  duration.value = "";
  genre.value = "";
  rate.value = "";
  poster.value = "";
});
