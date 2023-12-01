const linksToHandle = [
  {
    href: "#chisiamo-section",
    mobile: 120,
    mobile600: 100,
    tablet768: 180,
    tablet992: -10,
    desktop1200: -100,
    desktop1700: -280,
  },
  {
    href: "#sevizi-section",
    mobile: 85,
    mobile600: 90,
    tablet768: 190,
    tablet992: 100,
    desktop1200: 110,
    desktop1700: -20,
  },
  {
    href: "#skill",
    mobile: 70,
    mobile600: 50,
    tablet768: 80,
    tablet992: 50,
    desktop1200: 80,
    desktop1700: 42,
  },
  {
    href: "#contattacci-section",
    mobile: 70,
    mobile600: 32,
    tablet768: 150,
    tablet992: 130,
    desktop1200: 120,
    desktop1700: 70,
  },
];
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const linkConfig =
        linksToHandle.find((link) => link.href === targetId) || {};

      let offset = 50;

      if (window.matchMedia("(max-width: 600px)").matches) {
        offset = linkConfig.mobile || linkConfig.mobile600;
      } else if (
        window.matchMedia("(min-width: 600px)").matches &&
        window.matchMedia("(max-width: 767px)").matches
      ) {
        offset = linkConfig.mobile600;
      } else if (
        window.matchMedia("(min-width: 768px)").matches &&
        window.matchMedia("(max-width: 991px)").matches
      ) {
        offset = linkConfig.tablet768;
      } else if (
        window.matchMedia("(min-width: 992px)").matches &&
        window.matchMedia("(max-width: 1199px)").matches
      ) {
        offset = linkConfig.tablet992;
      } else if (
        window.matchMedia("(min-width: 1200px)").matches &&
        window.matchMedia("(max-width: 1699px)").matches
      ) {
        offset = linkConfig.desktop1200;
      } else if (window.matchMedia("(min-width: 1700px)").matches) {
        offset = linkConfig.desktop1700;
      }

      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY - offset;
      const startPosition = window.scrollY;

      const duration = 1500; // Durata dello scorrimento in millisecondi
      const startTime = performance.now();

      function scrollStep(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const easedProgress = easeInOutQuad(progress);
        const newOffset = (targetPosition - startPosition) * easedProgress;

        window.scrollTo(0, startPosition + newOffset);

        if (progress < 1) {
          requestAnimationFrame(scrollStep);
        }
      }

      function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      }

      requestAnimationFrame(scrollStep);
    }
  });
});
