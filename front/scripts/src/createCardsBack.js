function createCardsBack (movie) {
    const cardBack = document.createElement("div");
      cardBack.className = "card-back";

      const title = document.createElement("h3");
      title.textContent = movie.title;

      const year = document.createElement("p");
      year.textContent = `Year: ${movie.year}`;

      const director = document.createElement("p");
      director.textContent = `Director: ${movie.director}`;

      const duration = document.createElement("p");
      duration.textContent = `Duration: ${movie.duration}`;

      const genre = document.createElement("p");
      genre.textContent = `Genre: ${movie.genre.join(", ")}`;

      const rate = document.createElement("p");
      rate.textContent = `Rating: ${movie.rate}`;

      return {cardBack, elements: [title, year, director, duration, genre, rate]};
}

module.exports = createCardsBack