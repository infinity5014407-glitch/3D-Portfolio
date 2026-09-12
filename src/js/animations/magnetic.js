import gsap from "gsap";

export function initMagneticElements() {
  const elements = document.querySelectorAll(
    ".button, .logo"
  );

  if (!elements.length) return;

  if (
    window.matchMedia("(pointer: coarse)").matches
  ) {
    return;
  }

  elements.forEach((element) => {
    element.addEventListener(
      "mousemove",
      (event) => {
        const rect =
          element.getBoundingClientRect();

        const x =
          event.clientX -
          rect.left -
          rect.width / 2;

        const y =
          event.clientY -
          rect.top -
          rect.height / 2;

        gsap.to(element, {
          x: x * 0.15,
          y: y * 0.15,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    );

    element.addEventListener(
      "mouseleave",
      () => {
        gsap.to(element, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.3)"
        });
      }
    );
  });
}
