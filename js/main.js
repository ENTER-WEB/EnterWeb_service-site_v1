(function () {
  "use strict";

  const header = document.querySelector("[data-ew-header]");
  const menuButton = document.querySelector("[data-ew-menu-button]");
  const nav = document.querySelector("[data-ew-nav]");

  function updateHeaderState() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }

  if (menuButton && nav) {
    menuButton.addEventListener("click", function () {
      const isOpen = nav.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });
  }

  window.addEventListener("scroll", updateHeaderState, { passive: true });
  updateHeaderState();
})();
