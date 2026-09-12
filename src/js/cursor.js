export function initCursor() {
  const cursor = document.querySelector("#custom-cursor");

  if (!cursor) return;

  if (window.matchMedia("(pointer: coarse)").matches) {
    cursor.style.display = "none";
    return;
  }

  let mouseX = 0;
  let mouseY = 0;

  window.addEventListener(
    "mousemove",
    (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      cursor.style.transform =
        `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    },
    { passive: true }
  );

  const interactiveElements = document.querySelectorAll(
    "a, button, .project-card, .big-project, .interest-card, .skill-card, .stat-card"
  );

  interactiveElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      cursor.classList.add("hover");
    });

    element.addEventListener("mouseleave", () => {
      cursor.classList.remove("hover");
    });
  });
}
