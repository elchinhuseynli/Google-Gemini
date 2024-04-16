window.addEventListener("load", function () {
  const svg = document.querySelector("#filler-svg");
  const paths = Array.from(svg.querySelectorAll("path"));

  paths.forEach((path, index) => {
    const length = path.getTotalLength();

    gsap.set(path, {
      strokeDashoffset: length + 100,
      strokeDasharray: length + 100,
    });
  });

  // Animate the paths with a stagger
  gsap.to(paths, {
    strokeDashoffset: 0,
    duration: 2, // Animation duration in seconds
    stagger: {
      amount: 0.2
    },
    ease: "power1.inOut", // Easing function
    scrollTrigger: {
      trigger: ".sticky_trigger", // The element that triggers the animation
      start: "top top", // Start when the top of the path hits the bottom of the viewport
      end: "bottom top", // End when the bottom of the path hits the top of the viewport
      scrub: true,
    },
  });
});
