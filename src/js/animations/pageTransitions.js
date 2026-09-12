export function initPageTransitions() {
  const app = document.querySelector("#app");

  if (!app) return;

  /*
   * New-page entrance.
   * The loader is still responsible for the very first visit.
   */
  requestAnimationFrame(() => {
    app.classList.add("page-ready");
  });

  /*
   * Intercept internal HTML navigation so the old page
   * can animate out before the browser changes pages.
   */
  document.querySelectorAll('a[href]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");

      if (!href) return;
      if (href.startsWith("#")) return;
      if (href.startsWith("mailto:")) return;
      if (href.startsWith("tel:")) return;
      if (link.target === "_blank") return;

      const url = new URL(href, window.location.href);

      /*
       * Only handle links belonging to this website.
       */
      if (url.origin !== window.location.origin) return;

      /*
       * Same page — let the browser handle it normally.
       */
      if (url.pathname === window.location.pathname) return;

      event.preventDefault();

      /*
       * Prevent double clicks during the transition.
       */
      if (document.body.classList.contains("page-leaving")) {
        return;
      }

      document.body.classList.add("page-leaving");

      /*
       * Give the browser enough time to render the exit animation.
       */
      window.setTimeout(() => {
        window.location.href = url.href;
      }, 320);
    });
  });
}
