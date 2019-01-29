var button = document.getElementById('toggle');
button.addEventListener('click', function(e) {
  e.preventDefault();
  var target = document.getElementById('data-dropdown');
  target.classList.toggle('is-open');
})