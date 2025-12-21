gsap.fromTo(
    ".box",{y:200,opactiy:0},
    {
        opacity: 1,
        y: -200,
        duration: 3,
        ease: "linear",
        borderRadius: 0,
        repeat: -1,
        yoyo: true,
      }
);