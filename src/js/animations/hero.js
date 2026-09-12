import gsap from "gsap";

export function initHeroAnimation() {
  const hero = document.querySelector(".hero");

  if (!hero) return;

  const eyebrow = hero.querySelector(".hero-eyebrow");
  const title = hero.querySelector(".hero-title");
  const description = hero.querySelector(".hero-description");
  const actions = hero.querySelector(".hero-actions");
  const meta = hero.querySelector(".hero-meta");

  const tl = gsap.timeline({
    delay: 1.55,
    defaults: {
      ease: "power4.out"
    }
  });

  if (eyebrow) {
    tl.from(eyebrow, {
      y: 25,
      opacity: 0,
      duration: 0.65
    });
  }

  if (title) {
    tl.from(title, {
      y: 100,
      opacity: 0,
      clipPath: "inset(100% 0% 0% 0%)",
      duration: 1.05
    }, "-=0.25");
  }

  if (description) {
    tl.from(description, {
      y: 28,
      opacity: 0,
      duration: 0.65
    }, "-=0.45");
  }

  if (actions) {
    tl.from(actions, {
      y: 22,
      opacity: 0,
      duration: 0.6
    }, "-=0.35");
  }

  if (meta) {
    tl.from(meta, {
      y: 15,
      opacity: 0,
      duration: 0.5
    }, "-=0.25");
  }
}
