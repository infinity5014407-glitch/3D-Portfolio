import "../css/main.css";
import "../css/animations.css";
import "../css/components.css";

import { initNavigation } from "./navigation.js";
import { initCursor } from "./cursor.js";
import { initLoader } from "./loader.js";
import { initScroll } from "./scroll.js";

import { initHero3D } from "./three/hero3d.js";
import { initHeroAnimation } from "./animations/hero.js";
import { initRevealAnimations } from "./animations/reveal.js";
import { initMagneticElements } from "./animations/magnetic.js";
import { initPageTransitions } from "./animations/pageTransitions.js";

function init() {
  initNavigation();
  initCursor();
  initLoader();
  initScroll();

  initHero3D();
  initHeroAnimation();
  initRevealAnimations();
  initMagneticElements();
  initPageTransitions();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
