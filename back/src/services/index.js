const Movie = require("../models/movie");

module.exports = {
  getAllMoviesService: async () => {
    try {
      return await Movie.find();
    } catch (error) {
      throw error;
    }
  },
  postMovieService: async (data) => {
    try {
      const movie = new Movie(data);
      const response = await movie.save();
      return response;
    } catch (error) {
      throw error;
    }
  },
};

// class Pelicula {
//   constructor(pelicula) {
//     this.title = pelicula.title;
//     this.year = pelicula.year;
//     this.director = pelicula.director;
//     this.duration = pelicula.duration;
//     this.genre = pelicula.genre;
//     this.rate = pelicula.rate;
//     this.poster = pelicula.poster;
//   }
//   validate() {
//     if (!this.title) {
//       throw Error("No estan los datos completos");
//     }
//     if (!this.year) {
//       throw Error("No estan los datos completos");
//     }
//     if (!this.director) {
//       throw Error("No estan los datos completos");
//     }
//     if (!this.duration) {
//       throw Error("No estan los datos completos");
//     }
//     if (!this.genre) {
//       throw Error("No estan los datos completos");
//     }
//     if (!this.rate) {
//       throw Error("No estan los datos completos");
//     }
//     if (!this.poster) {
//       throw Error("No estan los datos completos");
//     }
//   }
// }






//! Cuando se utiliza axios para hacer la solicitud a la api

// const Movie = require("../models/class-movie")
//const axios = require("axios")

// module.exports = {
//   getAllMoviesService: async () => {
//     try {
//       const response = await axios(
//         "https://students-api.up.railway.app/movies"
//       );
//       const movies = response.data.map(movieData => new Movie(movieData));
//       return movies;
//     } catch (error) {
//       throw error
//     }
//   },
// };
