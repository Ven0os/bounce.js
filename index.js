let bounce = new Bounce();
bounce
  .translate({
    from: { x: -300, y: 0 },
    to: { x: 0, y: 0 },
    duration: 600,
    stiffness: 4,
  })
  .scale({
    from: { x: 1, y: 1 },
    to: { x: 0.1, y: 2.3 },
    easing: "sway",
    duration: 800,
    delay: 65,
    stiffness: 2,
  })
  .scale({
    from: { x: 1, y: 1 },
    to: { x: 5, y: 1 },
    easing: "sway",
    duration: 300,
    delay: 30,
  })
  .applyTo(document.querySelector("#firstanim"));

let bounce2 = new Bounce();
bounce
  .translate({
    from: { x: 0, y: 300 },
    to: { x: 0, y: 0 },
    duration: 900,
    stiffness: 4,
  })
  .scale({
    from: { x: 1, y: 1 },
    to: { x: 0.1, y: 2.3 },
    easing: "sway",
    duration: 800,
    delay: 65,
    stiffness: 2,
  })
  .rotate({
    from: 0,
    to: 360,
    easing: "sway",
    duration: 3670,
    delay: 30,
  })
  .applyTo(document.querySelector("#secondanim"));
