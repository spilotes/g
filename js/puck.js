const item = document.querySelector(".puck");

item.animate(
  [{ transform: "translateX()" }, { transform: "translateY(-0.6rem)" }],
  {
    duration: 1700,
    easing: "ease-in-out",
    direction: "alternate",
    iterations: Infinity,
  }
);
