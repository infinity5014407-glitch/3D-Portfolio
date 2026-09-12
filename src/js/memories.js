const buttons = document.querySelectorAll(".memory-image-button");
const lightbox = document.querySelector("#memory-lightbox");
const lightboxImage = document.querySelector(".memory-lightbox-image");
const lightboxTitle = document.querySelector(".memory-lightbox-title");
const closeButton = document.querySelector(".memory-lightbox-close");

if (buttons.length && lightbox) {

  function openMemory(button) {
    const image = button.dataset.image;
    const title = button.dataset.title || "";

    if (!image) return;

    lightboxImage.src = image;
    lightboxImage.alt = title;
    lightboxTitle.textContent = title;

    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";
  }

  function closeMemory() {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

    window.setTimeout(() => {
      if (!lightbox.classList.contains("open")) {
        lightboxImage.removeAttribute("src");
      }
    }, 250);
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      openMemory(button);
    });
  });

  closeButton?.addEventListener("click", closeMemory);

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeMemory();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMemory();
    }
  });

}
