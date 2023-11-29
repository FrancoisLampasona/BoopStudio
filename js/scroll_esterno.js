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
      href: "/#chisiamo-section",
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
      href: "/#sevizi-section",
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
      href: "/#skill",
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
    {
      href: "/#contattacci-section",
      mobile: 70,
      mobile600: 32,
      tablet768: 150,
      tablet992: 130,
      desktop1200: 120,
      desktop1700: 70,
    },
    // ... (aggiungi altre voci se necessario)
  ];
  
  document.addEventListener("DOMContentLoaded", function () {
    const hash = window.location.hash;
  
    if (hash) {
      const targetElement = document.querySelector(hash);
  
      if (targetElement) {
        const linkConfig = linksToHandle.find((link) => link.href === hash) || {};
  
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
  
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    }
  });