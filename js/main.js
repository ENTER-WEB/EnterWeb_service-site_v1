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

  const teamBoard = document.querySelector(".ew-team-support__board");

  if (teamBoard) {
    const cardsTrack = teamBoard.querySelector(".ew-team-support__cards");
    const cards = Array.from(teamBoard.querySelectorAll(".ew-team-support__card"));
    const prevButton = teamBoard.querySelector(".ew-team-support__arrow--prev");
    const nextButton = teamBoard.querySelector(".ew-team-support__arrow--next");
    const dots = Array.from(teamBoard.querySelectorAll(".ew-team-support__dots span"));

    function getCardStep() {
      if (!cardsTrack || cards.length < 1) return 0;
      const styles = window.getComputedStyle(cardsTrack);
      const gap = Number.parseFloat(styles.columnGap || styles.gap || "0") || 0;
      return cards[0].getBoundingClientRect().width + gap;
    }

    function getActiveIndex() {
      const step = getCardStep();
      if (!cardsTrack || step <= 0) return 0;
      return Math.max(0, Math.min(cards.length - 1, Math.round(cardsTrack.scrollLeft / step)));
    }

    function updateTeamState() {
      const activeIndex = getActiveIndex();
      cards.forEach(function (card, index) {
        card.classList.toggle("is-active", index === activeIndex);
      });
      dots.forEach(function (dot, index) {
        dot.classList.toggle("is-active", index === activeIndex);
      });
    }

    function scrollTeam(direction) {
      if (!cardsTrack) return;
      const step = getCardStep();
      cardsTrack.scrollBy({ left: step * direction, behavior: "smooth" });
      window.setTimeout(updateTeamState, 260);
    }

    if (prevButton) {
      prevButton.addEventListener("click", function () {
        scrollTeam(-1);
      });
    }

    if (nextButton) {
      nextButton.addEventListener("click", function () {
        scrollTeam(1);
      });
    }

    if (cardsTrack) {
      cardsTrack.addEventListener("scroll", updateTeamState, { passive: true });
    }

    updateTeamState();
  }

  window.addEventListener("scroll", updateHeaderState, { passive: true });
  updateHeaderState();
})();
