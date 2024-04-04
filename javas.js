// Сразу создаём переменные
var navbar = document.getElementById("navbar").classList;
var active_class = "navbar_scrolled";

/**
 * Слушаем событие прокрутки
 */
window.addEventListener("scroll", (e) => {
  if (pageYOffset > 300) navbar.add(active_class);
  else navbar.remove(active_class);
});