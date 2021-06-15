import { TimelineMax } from "gsap/all";

let tl = new TimelineMax();

tl.staggerFromTo(
  "h1 span",
  0.5,
  { y: 40, opacity: 0 },
  { y: 0, opacity: 1 },
  0.05
)
  .fromTo(
    ".subtitle",
    0.3,
    { opacity: 0, scale: 5 },
    { opacity: 1, scale: 0.5 }
  )
  .fromTo(".subtitle", 1, { scale: 0.5 }, { scale: 1 })
  .staggerFromTo(".list li", 0.3, { x: -1000 }, { x: 0 }, 0.2)
  .staggerTo(".list li svg", 0.3, { opacity: 1 }, 0.2);
