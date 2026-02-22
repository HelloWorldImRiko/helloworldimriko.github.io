document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("vnModal");
  const openBtn = document.getElementById("openVN");
  const closeBtn = document.getElementById("closeVN");
  const modalInner = modal.querySelector(".vn-modal-inner");

  const VN_SRC = "https://itch.io/embed-upload/9971274?color=afbfd2";

  let iframe = null;

  function openVN() {
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";

    if (!iframe) {
      iframe = document.createElement("iframe");
      iframe.src = VN_SRC;
      iframe.allowFullscreen = true;
      iframe.loading = "lazy";
      iframe.title = "The Legend of Riko";
      iframe.style.width = "100%";
      iframe.style.height = "100%";
      iframe.style.border = "none";

      modalInner.appendChild(iframe);
    }
  }

  function closeVN() {
    modal.classList.add("hidden");
    document.body.style.overflow = "";

    if (iframe) {
      iframe.remove(); // destroys Unity + stops audio
      iframe = null;
    }
  }

  openBtn.addEventListener("click", openVN);
  closeBtn.addEventListener("click", closeVN);
});
