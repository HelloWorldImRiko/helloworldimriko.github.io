document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("mobileMenu");
  const openBtn = document.getElementById("menuToggle");
  const closeBtn = document.getElementById("menuClose");

  if (!menu || !openBtn || !closeBtn) return;

  const focusableSelectors = `
    a[href],
    button:not([disabled]),
    [tabindex]:not([tabindex="-1"])
  `;

  let focusableElements;
  let firstFocusable;
  let lastFocusable;

  function openMenu() {
    menu.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    openBtn.setAttribute("aria-expanded", "true");

    focusableElements = menu.querySelectorAll(focusableSelectors);
    firstFocusable = focusableElements[0];
    lastFocusable = focusableElements[focusableElements.length - 1];

    // Move focus into the menu
    firstFocusable.focus();

    document.addEventListener("keydown", trapFocus);
  }

  function closeMenu() {
    menu.classList.add("hidden");
    document.body.style.overflow = "";
    openBtn.setAttribute("aria-expanded", "false");

    // Return focus to the menu button
    openBtn.focus();

    document.removeEventListener("keydown", trapFocus);
  }

  function trapFocus(e) {
    if (e.key === "Escape") {
      closeMenu();
      return;
    }

    if (e.key !== "Tab") return;

    if (e.shiftKey) {
      // Shift + Tab
      if (document.activeElement === firstFocusable) {
        e.preventDefault();
        lastFocusable.focus();
      }
    } else {
      // Tab
      if (document.activeElement === lastFocusable) {
        e.preventDefault();
        firstFocusable.focus();
      }
    }
  }

  // Mouse & keyboard activation
  openBtn.addEventListener("click", openMenu);
  openBtn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openMenu();
    }
  });

  closeBtn.addEventListener("click", closeMenu);

  // Close when clicking a link
  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });
});