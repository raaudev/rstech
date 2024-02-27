document.getElementById('toggle-theme').addEventListener('click', function() {
  document.documentElement.classList.toggle('dark-theme');
  
  var themeIcon = document.querySelector('#toggle-theme i');
  if (themeIcon.classList.contains('bi-sun-fill')) {
    themeIcon.classList.remove('bi-sun-fill');
    themeIcon.classList.add('bi-moon-fill');
  } else {
    themeIcon.classList.remove('bi-moon-fill');
    themeIcon.classList.add('bi-sun-fill');
  }
});
