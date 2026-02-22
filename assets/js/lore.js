document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("vnModal");
  const openBtn = document.getElementById("openVN");
  const closeBtn = document.getElementById("closeVN");

  openBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  });
});