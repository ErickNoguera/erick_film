const formCreateMovie = document.getElementById("create-movie");
if(formCreateMovie) {
    require("./src/postMovie");
    console.log("aca si esta el formulario");
}

const getAllmovies = require("./src/getAllMovies")

document.addEventListener("DOMContentLoaded", getAllmovies);
