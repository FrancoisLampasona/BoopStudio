document.addEventListener('DOMContentLoaded', function () {
  var inputs = document.querySelectorAll('.content_form');

  inputs.forEach(function (input) {
      input.addEventListener('input', function () {
          input.classList.toggle('active', input.value.trim() !== '');
      });
  });
});