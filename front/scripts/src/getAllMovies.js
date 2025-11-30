const axios = require("axios");

const generateCardFront = require("./generateCardFront");
const createCardsBack = require("./createCardsBack");
const mostrarCards = require("./mostrarCards");

async function getAllmovies() {
  //! Version AJAX
  // $.get("https://students-api.up.railway.app/movies", function (data)
  // {generateMovies(data)
  // });

  //!Version Axios

  //TODO en forma de promesas 
  // axios("https://students-api.up.railway.app/movies")
  // .then(function (resp){
  //   generateMovies(resp.data)
  // }).catch(function (err){
  //   console.log(err)
  // })
  // .finally(function () {
  //   console.log("termine");
  // })

  //TODO en forma de Async await
  try {
    const resp = await axios("http://localhost:3000/movies");
    generateMovies(resp.data);
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("termine");
  }
}
function generateMovies(arrayMovies) {
  const container = document.getElementById("cardsContainer");
  arrayMovies.forEach((movie) => {
    const cardFront = generateCardFront(movie);
    const { cardBack, elements } = createCardsBack(movie);
    const card = mostrarCards(cardFront, cardBack, elements);

    container.appendChild(card);
  });
}

module.exports = getAllmovies;
