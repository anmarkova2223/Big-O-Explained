import * as d3 from "d3";
export function homepage(donutId, threshold = 0.75) {
    return function () {
      const donut = document.getElementById(donutId);
      const donutTop = donut.offsetTop;
      const scrollTop = window.scrollY;
  
      if (donutTop - scrollTop < window.innerHeight * threshold) {
        donut.classList.add('donut-visible');
      }
    };
  }