function generateCardFront(movie) {
  const cardFront = document.createElement("div");
  cardFront.className = "card-front";
  
  const img = document.createElement("img");
  img.src = movie.poster;
  img.alt = `Poster of ${movie.title}`;
  cardFront.appendChild(img);


  return cardFront;
}

module.exports = generateCardFront;
