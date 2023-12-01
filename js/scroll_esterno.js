document.addEventListener('DOMContentLoaded', function () {
  // Funzione per eseguire lo scorrimento animato verso l'elemento target
  function scrollToTarget(targetElement, offset) {
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - offset,
        behavior: 'smooth'
      });
    } 
  }

  // Gestisce il clic sui link
  document.querySelectorAll('.scroll-link').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetUrl = this.getAttribute('href');
      const targetId = targetUrl.split('#')[1];
      const offset = 20; // Puoi regolare l'offset come desiderato

      // Naviga alla nuova pagina
      window.location.href = targetUrl;

      // Aggiungi un listener all'evento 'load' per assicurarti che la nuova pagina sia completamente caricata
      window.addEventListener('load', function () {
        // Trova l'elemento di destinazione sulla nuova pagina
        const targetElement = document.getElementById(targetId);

        // Esegui lo scorrimento animato verso l'elemento di destinazione con offset
        scrollToTarget(targetElement, offset);
      });
    });
  });
});
