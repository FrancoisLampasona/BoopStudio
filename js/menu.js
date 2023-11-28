document.getElementById('menuToggle').addEventListener('click', function() {
  this.classList.toggle("change");
});

// Aggiungi gestore per chiudere il menu quando si clicca su un elemento del menu
var menuItems = document.querySelectorAll('.header_menu li a');

menuItems.forEach(function(item) {
  item.addEventListener('click', function() {
    // Chiudi il menu
    document.getElementById('check').checked = false;

    // Rimuovi la classe "change" per riportare l'icona hamburger allo stato iniziale
    document.getElementById('menuToggle').classList.remove('change');
  });
});
