let bounce = new Bounce();
bounce
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
bounce2
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

let bounce3 = new Bounce();
bounce3
  .skew({
    from: { x: 0, y: 0 },
    to: { x: 20, y: 0 },
    easing: "bounce",
    duration: 1800,
    delay: 30,
  })
  .skew({
    from: { x: 20, y: 0 },
    to: { x: -20, y: 0 },
    easing: "bounce",
    duration: 3600,
    delay: 30,
  })
  .applyTo(document.querySelector("#derniereanim"));
