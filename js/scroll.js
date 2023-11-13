document.addEventListener("DOMContentLoaded", function () {
  const linksToHandle = [
    {
      href: "#chisiamo-section",
      mobile: 120,
      mobile600: 100,
      tablet768: 180,
      tablet992: 50,
      desktop1200: -100,
    },
    {
      href: "#sevizi-section",
      mobile: 85,
      mobile600: 90,
      tablet768: 190,
      tablet992: 130,
      desktop1200: -20,
    },
    {
      href: "#skill",
      mobile: 70,
      mobile600: 50,
      tablet768: 80,
      tablet992: 140,
      desktop1200: -5,
    },
    {
      href: "#contattacci-section",
      mobile: 70,
      mobile600: 32,
      tablet768: 150,
      tablet992: 70,
      desktop1200: 100,
    },
  ];

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    const linkHref = link.getAttribute("href");
    const linkData = findLinkData(linkHref);

    if (linkData) {
      link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = linkHref.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const offsetTop =
            targetElement.getBoundingClientRect().top + window.scrollY;
          const offsetAmount = calculateOffset(linkData);

          window.scrollTo({
            top: offsetTop - offsetAmount,
            behavior: "smooth",
          });
        }
      });
    }
  });

  function findLinkData(targetHref) {
    return linksToHandle.find((linkData) => linkData.href === targetHref);
  }

  function calculateOffset(linkData) {
    let offset = 50;

    if (window.matchMedia("(max-width: 600px)").matches) {
      offset = linkData.mobile || linkData.mobile600;
    } else if (
      window.matchMedia("(min-width: 600px)").matches &&
      window.matchMedia("(max-width: 767px)").matches
    ) {
      offset = linkData.mobile600;
    } else if (
      window.matchMedia("(min-width: 768px)").matches &&
      window.matchMedia("(max-width: 991px)").matches
    ) {
      offset = linkData.tablet768;
    } else if (
      window.matchMedia("(min-width: 992px)").matches &&
      window.matchMedia("(max-width: 1199px)").matches
    ) {
      offset = linkData.tablet992;
    } else if (window.matchMedia("(min-width: 1200px)").matches) {
      offset = linkData.desktop1200;
    }

    return offset;
  }
});
