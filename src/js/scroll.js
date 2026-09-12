import Lenis from "lenis";

export function initScroll() {
  const lenis = new Lenis({
    smoothWheel: true,
    lerp: 0.12,
    wheelMultiplier: 0.8,
    syncTouch: false
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}
