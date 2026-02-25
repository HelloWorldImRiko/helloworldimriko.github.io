document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("hellForm");
  const input = document.getElementById("hellName");
  const button = document.getElementById("hellSubmit");
  const response = document.getElementById("hellResponse");

  const messages = [
    "Your name has been recorded.",
    "You are acknowledged.",
    "Behind you.",
    "She will be in contact.",
    "She is watching you."
  ];

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!input.value.trim()) return;

    // Lock the ritual
    input.disabled = true;
    button.remove();

    const message =
      messages[Math.floor(Math.random() * messages.length)];

    response.textContent = message;
    response.classList.remove("hidden");
  });
});