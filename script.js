let t1 = gsap.timeline({ paused: true });
let flap = CSSRulePlugin.getRule(".envelope:before");
let message = document.getElementById("message");
let body = document.getElementById("body");

t1.to(flap, {
  duration: 0.5,
  cssRule: {
    rotateX: 180,
  },
})
  .set(flap, {
    cssRule: {
      zIndex: 10,
    },
  })
  .to(".letter", {
    translateY: -200,
    duration: 0.9,
    ease: "back.inOut(1.5)",
  })
  .set(".letter", {
    zIndex: 40,
  })
  .to(".letter", {
    duration: 0.7,
    ease: "back.out(.4)",
    translateY: -5,
    translateZ: 250,
  });

let t2 = gsap.timeline({ paused: true });
t2.to(".shadow", {
  delay: 1.4,
  width: 450,
  boxShadow: "-75px 150px 10px 5px #eeeef3",
  ease: "back.out(.2)",
  duration: 0.7,
});

function displayNone() {
  message.style.display = "none";
}

function displayFlex() {
  message.style.display = "flex";
}

function openCard(e) {
  t1.play();
  t2.play();
  setTimeout(displayFlex, 1900);
}

function closeCard(e) {
  t1.reverse();
  t2.reverse();
  setTimeout(displayNone, 500);
}
