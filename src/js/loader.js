import gsap from "gsap";

export function initLoader() {
  const loader = document.querySelector("#loader");
  const number = document.querySelector(".loader-number");
  const line = document.querySelector(".loader-line span");

  if (!loader) return;

  const state = { progress: 0 };

  gsap.to(state, {
    progress: 100,
    duration: 1.4,
    ease: "power2.out",
    onUpdate: () => {
      const value = Math.floor(state.progress);

      if (number) {
        number.textContent = String(value).padStart(2, "0");
      }

      if (line) {
        line.style.width = `${state.progress}%`;
      }
    },
    onComplete: () => {
      gsap.to(loader, {
        opacity: 0,
        duration: 0.6,
        delay: 0.15,
        onComplete: () => {
          loader.remove();
        }
      });
    }
  });
}
