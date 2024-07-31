function animation_1() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".parent"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".parent" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".parent", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".parent").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
animation_1();
gsap.to(".list_0 svg", {
  transform: "translateY(-100%)",
  ScrollTrigger: {
    trigger: "#page_1",
    scroller: ".parent",

    start: "top 0",
    end: "top -5%",
    scrub: 10,
  },
});
gsap.to(".link a", {
  transform: "translateY(-100%)",
  opacity: 0,
  ScrollTrigger: {
    trigger: "#page_1",
    scroller: ".parent",

    start: "top 0",
    end: "top -5%",
    scrub: true,
  },
});

function video_container_animation() {
  var videoicon = document.querySelector("#video_container");
  var buttonicon = document.querySelector("#play_icon");
  videoicon.addEventListener("mouseenter", function () {
    gsap.to(buttonicon, {
      scale: 1,
      opacity: 1,
    });
  });
  videoicon.addEventListener("mouseleave", function () {
    gsap.to(buttonicon, {
      scale: 0,
      opacity: 0,
    });
  });
  videoicon.addEventListener("mousemove", function (dets) {
    gsap.to(buttonicon, {
      left: dets.x - 50,
      top: dets.y - 70,
    });
  });
}
video_container_animation();
function h1_animation() {
  gsap.from("#page_1 h1", {
    y: 100,
    opacity: 0,
    delay: 1,

    stagger: 0.2,
  });
  gsap.from(" #video_container", {
    scale: 0.9,
    opacity: 0,
    delay: 0.8,
    duration: 0.3,
  });
}
h1_animation();
function cursor_mover() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor", {
      left: dets.x,
      top: dets.y,
    });
  });
  document.querySelector(".boxes1").addEventListener("mouseenter", function () {
    gsap.to("#cursor", {
      transform: "translate(-50%,-50%) scale(1)",
    });
  });
  document.querySelector(".boxes1").addEventListener("mouseleave", function () {
    gsap.to("#cursor", {
      transform: "translate(-50%,-50%) scale(0)",
    });
  });
  document.querySelector(".boxes2").addEventListener("mouseenter", function () {
    gsap.to("#cursor", {
      transform: "translate(-50%,-50%) scale(1)",
    });
  });
  document.querySelector(".boxes2").addEventListener("mouseleave", function () {
    gsap.to("#cursor", {
      transform: "translate(-50%,-50%) scale(0)",
    });
  });
  document.querySelector(".boxes3").addEventListener("mouseenter", function () {
    gsap.to("#cursor", {
      transform: "translate(-50%,-50%) scale(1)",
    });
  });
  document.querySelector(".boxes3").addEventListener("mouseleave", function () {
    gsap.to("#cursor", {
      transform: "translate(-50%,-50%) scale(0)",
    });
  });
  document.querySelector(".boxes4").addEventListener("mouseenter", function () {
    gsap.to("#cursor", {
      transform: "translate(-50%,-50%) scale(1)",
    });
  });
  document.querySelector(".boxes4").addEventListener("mouseleave", function () {
    gsap.to("#cursor", {
      transform: "translate(-50%,-50%) scale(0)",
    });
  });
}
cursor_mover();
gsap.from(".nav_part2", {
  y: -30,
  duration: 1,
  ease: "back",
});
