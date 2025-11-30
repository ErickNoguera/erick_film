function mostrarCards(cardFront, cardBack, elements) {
  elements.forEach((element) => cardBack.appendChild(element));

  const card = document.createElement("div");
  card.className = "card-container";

  card.appendChild(cardFront);
  card.appendChild(cardBack);

  const cardContainer = document.createElement("div");
  cardContainer.className = "card-container";
  cardContainer.appendChild(card);

  return card;
}

module.exports = mostrarCards;
