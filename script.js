document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (!menuToggle || !mainNav) return;

  // начальное состояние aria
  menuToggle.setAttribute("aria-expanded", "false");

  menuToggle.addEventListener("click", function (e) {
    const isOpen = mainNav.classList.toggle("nav-open");
    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Закрыть меню при клике вне (полезно на мобильных)
  document.addEventListener("click", function (e) {
    if (!mainNav.classList.contains("nav-open")) return;
    const target = e.target;
    if (
      target === menuToggle ||
      menuToggle.contains(target) ||
      mainNav.contains(target)
    )
      return;
    mainNav.classList.remove("nav-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});
