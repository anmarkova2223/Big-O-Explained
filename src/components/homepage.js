import * as d3 from "d3";
export function homepage(donutId, donuts) {
    return function () {
      const scrollPosition = window.scrollY;
      donuts.forEach(donut => {
        const donutElement = document.getElementById(donutId);
        if (donutElement) {
          const donutTop = donutElement.offsetTop;
          if (donutTop - scrollPosition < window.innerHeight) {
            donut.visible = true;
          }
        }
      });
    };
  }
  