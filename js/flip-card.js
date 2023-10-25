const card = document.querySelector(".interno-card");
const scopri = document.querySelector("#flip-link-button");

card.addEventListener("click", function () {
  if (card.classList.contains("is-flipped")) {
    // Se la card è stata girata e il link "Scopri di più" è stato cliccato

      const linkScopriDiPiu = document.querySelector("#logo-text-scopri a");
      linkScopriDiPiu.click();

  } else {
    // Altrimenti, esegui il flip della card
    card.classList.toggle("is-flipped");
  }
});

card.addEventListener("mouseleave", function () {
  card.classList.remove("is-flipped");
});

scopri.addEventListener("click", function () {
  const linkScopriDiPiu = document.querySelector("#logo-text-scopri a");
  linkScopriDiPiu.click();
  scopri.classList.add("click");
});
