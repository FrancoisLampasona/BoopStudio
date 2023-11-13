const cards = document.querySelectorAll(".interno-card");
const body = document.body;

cards.forEach((card) => {
  card.addEventListener("click", function () {
    if (card.classList.contains("is-flipped")) {
      // Se la card è già girata, rigira la card
      card.classList.remove("is-flipped");
    } else {
      // Altrimenti, esegui il flip della card
      card.classList.add("is-flipped");
    }
  });

  card.addEventListener("mouseleave", function () {
    card.classList.remove("is-flipped");
  });
});

body.addEventListener("click", function (e) {
  // Controlla se il clic è avvenuto al di fuori di tutte le card
  const isOutsideAllCards = Array.from(cards).every(
    (card) => !card.contains(e.target)
  );
  if (isOutsideAllCards) {
    cards.forEach((card) => {
      card.classList.remove("is-flipped");
    });
  }
});

const scopri = document.querySelector("#flip-link-button");

scopri.addEventListener("click", function () {
  // Non è più necessario prevenire il comportamento predefinito del link
  const parentCard = this.closest(".interno-card");

  if (parentCard) {
    parentCard.classList.toggle("is-flipped");
  }
});
