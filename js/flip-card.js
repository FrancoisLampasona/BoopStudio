const cards = document.querySelectorAll(".interno-card");
const scopri = document.querySelector("#flip-link-button");
const body = document.body;

cards.forEach((card) => {
  card.addEventListener("click", function () {
    if (card.classList.contains("is-flipped")) {
      // Se la card è stata girata e il link "Scopri di più" è stato cliccato
      const linkScopriDiPiu = card.querySelector("#logo-text-scopri a");
      linkScopriDiPiu.click();
    } else {
      // Altrimenti, esegui il flip della card
      card.classList.toggle("is-flipped");
    }
  });

  card.addEventListener("mouseleave", function () {
    card.classList.remove("is-flipped");
  });
});

body.addEventListener("click", function (e) {
  // Controlla se il clic è avvenuto al di fuori di tutte le card
  const isOutsideAllCards = Array.from(cards).every((card) => !card.contains(e.target));
  if (isOutsideAllCards) {
    cards.forEach((card) => {
      card.classList.remove("is-flipped");
    });
  }
});
