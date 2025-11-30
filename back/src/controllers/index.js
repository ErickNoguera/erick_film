const { getAllMoviesService, postMovieService } = require("../services");

module.exports = {
  getAllMoviesController:async (req, res) => {
    try {
        const movies = await getAllMoviesService();
        res.send(movies)
    } catch (error) {
        res.status(error.response.status).send(error.message)
    }
  },
  postMovie : async (req,res) => {
    try {
      const movieResponse = await postMovieService(req.body)
      res.json(movieResponse)
    } catch (error) {
      res.send(error)
    }
  }
};
