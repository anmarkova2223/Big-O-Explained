<script>
  import { onMount, tick } from 'svelte';
  import {draw} from 'svelte/transition'


  import { goto } from '$app/navigation';
  // import cheatsheet from './cheatsheet.js';

  // import { funTable } from './funTable.js'
  // import { plotComplexities } from './cheatSheet.js';
  import { drawPath } from './path.js';
  let root;
  let donutElements = [];

  import donutWave from '../lib/donut-wave.png';
  import donutWaveLeft from '../lib/donut-wave-left.png';
  import donutHypeOpen from '../lib/donut-hype-eyes-open.png';
  import donutHypeClosed from '../lib/donut-hype-eyes-closed.png';
  import donutThinkLeft from '../lib/donut-think-left.png';
  import donutThinkRight from '../lib/donut-think-right.png';

  // No longer using these
  // import croissant from '../lib/croissant-mascot.png';
  // import logNoAmber from '../lib/log-no-amber.png';
  // import omgBanana from '../lib/omg-banana.png';
  // import sugarCube from '../lib/sugarcube.png'
  // import rocket from '../lib/rocket.png'


  // Line Donuts
  import quadraticDonut from '../lib/quadratic-donut.png';
  import exponentialDonut from '../lib/exponential-donut.png';
  import graphDonut from '../lib/graph-donut.png';
  import factorialDonut from '../lib/factorial-donut.png';
  import linearDonut from '../lib/linear-donut.png';
  import logDonut from '../lib/log-donut.png';
  import nlognDonut from '../lib/nlogn-donut.png';
  import constantDonut from '../lib/constant-donut.png';

  let donutTexts = [
    "Explanation",
    "The How",
    "Graph & Table",
    "Constant",
    "Logarithmic",
    "Linear",
    "Quasilinear",
    "Quadratic",
    "Exponential",
    "Factorial",
    "Practice",
    "Sources"
  ]

  let donuts = [
    { src: donutWave, label: "", top: 100, left: 35, width: 150 },
    { src: donutThinkRight, label: donutTexts[0], top: 225, left: 60, width: 130 },
    { src: donutHypeClosed, label: donutTexts[1], top: 325, left: 20, width: 150 },
    { src: graphDonut, label: donutTexts[2],top: 425, left: 45, width: 180 },
    { src: constantDonut, label: donutTexts[3],top: 525, left: 70, width: 180 },
    { src: logDonut, label: donutTexts[4],top: 650, left: 45, width: 180 },
    { src: linearDonut, label: donutTexts[5],top: 775, left: 20, width: 180 },
    { src: nlognDonut, label: donutTexts[6],top: 900, left: 46, width: 180 },
    { src: quadraticDonut, label: donutTexts[7],top: 1025, left: 70, width: 180 },
    { src: exponentialDonut,label: donutTexts[8], top: 1150, left: 45, width: 180 },
    { src: factorialDonut,label: donutTexts[9], top: 1275, left: 20, width: 180 },
    { src: donutThinkRight,label: donutTexts[10], top: 1400, left: 45, width: 130 },
    { src: donutWaveLeft,label: donutTexts[11], top: 1550, left: 70, width: 140 }
  ];
  
  let svgWidth;
  let svgHeight;

  onMount(() => {

    svgWidth = window.innerWidth;
    // svgHeight = document.body.scrollHeight;
    // console.log(svgHeight);

    // Get all elements in the body
    let elements = document.body.getElementsByTagName('*');

    // Initialize maxBottom to 0
    let maxBottom = 0;

    // Loop through all elements
    for (let i = 0; i < elements.length; i++) {
      // Get the bounding rectangle of the current element
      let rect = elements[i].getBoundingClientRect();

      // If the bottom of this element is lower than maxBottom, update maxBottom
      if (rect.bottom > maxBottom) {
        maxBottom = rect.bottom;
      }
    }

    // maxBottom is now the bottom position of the lowest element on the page
    svgHeight = maxBottom;

    console.log(svgHeight);

    // let curve_path = donutElements.map((element, index) => {
    //   //console.log(donuts[index].width);
    //   const x = element.offsetLeft + donuts[index].width/2;
    //   const y = element.offsetTop + donuts[index].width/2;
    //   return { x, y };
    //   });

    //   let totalLength = 0;
    //     console.log("curve path", curve_path)
    //   for (let i = 0; i < curve_path.length - 1; i++) {
    //     let dx = curve_path[i+1].x - curve_path[i].x;
    //     let dy = curve_path[i+1].y - curve_path[i].y;
    //     totalLength += Math.sqrt(dx * dx + dy * dy);
    //   }

    let totalLength = root.getTotalLength();
    console.log("path length", totalLength);
    root.style.strokeDasharray = totalLength + ' ' + totalLength;
    root.style.strokeDashoffset = totalLength;
    root.getBoundingClientRect();
    window.addEventListener("scroll", function(e) {
      var scrollPercentage = 2* (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
      var drawLength = totalLength * scrollPercentage;
      root.style.strokeDashoffset = totalLength - drawLength;

      if (scrollPercentage >= 0.99) {
        root.style.strokeDasharray = "none";
        
      } else {
        root.style.strokeDasharray = totalLength + ' ' + totalLength;
      }
    });

    //drawPath('#path-svg', pathData, svgWidth, svgHeight);
  });

  function generatePathString(donuts) {
    // console.log(donutElements);

    // donuts.forEach((donut, index) => {
    //   const element = document.getElementById(`donut-${index}`);
    //   const x = element.offsetLeft;
    //   const y = element.offsetTop;
    //   console.log(`Donut ${index} is at x: ${x}, y: ${y}`);
    // });

    // let curve_path = donuts.map((donut, index) => {
    //   const element = document.getElementById(`donut-${index}`);
    //   const x = element.offsetLeft;
    //   const y = element.offsetTop;
    //   return { x, y };
    // });
    let curve_path = donutElements.map((element, index) => {
      //console.log(donuts[index].width);
      const x = element.offsetLeft + donuts[index].width/2;
      const y = element.offsetTop + donuts[index].width/2;
      return { x, y };
    });

    // let differences = curve_path.map((point, index) => {
    //   if (index < curve_path.length - 1) {
    //     const nextPoint = curve_path[index + 1];
    //     const xDiff = nextPoint.x - point.x;
    //     const yDiff = nextPoint.y - point.y;
    //     return { xDiff, yDiff };
    //   }
    // }).filter(Boolean); // filter out undefined values
    //console.log(curve_path); 
    //       curve_path.map(point => `${point.x},${point.y}`).join('L '));
    //let pathString = "M" + `${curve_path[0].x},${curve_path[0].y} ` + curve_path.slice(1).map(point => `L${point.x},${point.y}`).join(' ');

    //return pathString;

    return curve_path.map((point, index) => {
        return `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`;
      }).join(' ');
    //return "M" + curve_path.map(point => `${point.x},${point.y}`).join(' ');
  }
  

  function handleDonutHover(index) {
    donuts[index].hovered = true;
  }

  function handleDonutOut(index) {
    donuts[index].hovered = false;
  }

  function handleDonutClick(index) {
  donuts[index].clicked = true;

  // If Donut 2 is clicked (index 1), navigate to the new page
  if (index === 1) {
    console.log("Change page!")
    goto('about');
  }
  else if (index == 2) {
    goto('tips'); //Go to tips page
  }
  else if (index == 3) {
    goto('graph');
  }
  else if (index == 4) {
    goto('constant');
  }
  else if (index == 5) {
    goto('logarithmic');
  }
  else if (index == 6) {
    goto('linear');
  }
  else if (index == 7) {
    goto('quasilinear');
  }
  else if (index == 8) {
    goto('quadratic')
  }
  else if (index == 9) {
    goto('exponential')
  }
  else if (index == 10) {
    goto('factorial')
  }
  else if (index == 11) {
    goto('practice')
  }
  else if (index == 12) {
    goto('sources')
  }
  // Call your function here
  console.log("Donut clicked!");
}

</script>

<style>
.title-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color:#99CCFF;
    z-index: 1;
    text-align: center;
    padding: 10px;
  }

  .donut-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
  }

  .label_norm {
    font-size: 14px;
    text-align: center;
    margin-top: 150px; /* Adjust the margin as needed */
  }

  .label_short {
    font-size: 14px;
    text-align: center;
    margin-top: 125px; /* Adjust the margin as needed */
  }

  .donut {
    height: auto;
    margin-bottom: 50px;
    position: absolute;
  }

  .speech-bubble {
    position: absolute;
    max-width: 300px; /* Set your desired maximum width */
    background-color: #CCCCCC;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    white-space: normal; /* Allow text to wrap */
  }
  .speech-bubble::before {
    content: '';
    position: absolute;
    top: 50%;
    right: 100%;
    margin-top: -10px; /* Half of the arrow height */
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent transparent #CCCCCC
  }

  .arc-text {
    font-size: 14px;
  }

  svg {
		outline: solid lightgray 1px;
  }

</style>
<div class="title-container">
  <h1>Big O Notation Explained</h1>
</div>

<div>
  {#each donuts as { src, label, top, left, width, hovered, clicked }, index}
    {#if index === 0}
        <div class="speech-bubble" style={`top: ${top + 30}px; left: ${left + 11}%;`}>
          Welcome! My name is Big O. Follow the path and click my dopplegangers to learn about Big O!
        </div>
      {/if}
    {#if hovered}
      {#if index === 1}
        <div class="speech-bubble" style={`top: ${top + 40}px; left: ${left + 11}%;`}>
          What is Big O Notation? Why is it important?
        </div>
      {/if}
      {#if index === 2}
        <div class="speech-bubble" style={`top: ${top + 40}px; left: ${left + 11}%;`}>
          Let's learn how to calculate Big O!
        </div>  
      {/if}
      {#if index === 3}
        <div class="speech-bubble" style={`top: ${top + 50}px; left: ${left + 13}%;`}>
          Useful Visualizations!
        </div>
      {/if}
      {#if index === 4}
        <div class="speech-bubble" style={`top: ${top + 40}px; left: ${left + 11}%;`}>
          I am in a <i>constant</i> state of sugar-high!
        </div>
      {/if}
      {#if index === 5}
        <div class="speech-bubble" style={`top: ${top + 50}px; left: ${left + 12}%;`}>
          Just like the rings on a <i>log</i>, there are O's everywhere!
        </div>
      {/if}
      {#if index === 6}
        <div class="speech-bubble" style={`top: ${top + 40}px; left: ${left + 11}%;`}>
          Let me be <i>straight</i> with you... pink is the best color!
        </div>
      {/if}
      {#if index === 7}
        <div class="speech-bubble" style={`top: ${top + 30}px; left: ${left + 11}%;`}>
          I'm not sure of a good pun... anyways <i>quasilinear</i> time!
        </div>
      {/if}
      {#if index === 8}
        <div class="speech-bubble" style={`top: ${top + 50}px; left: ${left + 12}%;`}>
          Don't be dramatic. It's time for <i>quadratics</i>!
        </div>
      {/if}
      {#if index === 9}
        <div class="speech-bubble" style={`top: ${top + 50}px; left: ${left + 11}%;`}>
          You are improving at an <i>exponential</i> rate!
        </div>
      {/if}
      {#if index === 10}
        <div class="speech-bubble" style={`top: ${top + 40}px; left: ${left + 11}%;`}>
          Let's face the <i>facts</i>. This is bananas!
        </div>
      {/if}
      {#if index === 11}
        <div class="speech-bubble" style={`top: ${top + 40}px; left: ${left + 11}%;`}>
          Let's get down to business... to defeat the <i>practice problems</i>!
        </div>
      {/if}
      {#if index === 12}
        <div class="speech-bubble" style={`top: ${top + 50}px; left: ${left + 11}%;`}>
          Our Sources
        </div>
      {/if}
      <!-- Add more conditions for other donuts if needed -->
    {/if}
  {/each}

  {#each donuts as { src, label, top, left, width, hovered, clicked }, index}
  <div class="donut-container" style={`top: ${top}px; left: ${left}%;`}>
    <img class="donut"
      src={src}
      alt="Donut"
      style={`width: ${width}px`}
      on:mouseover={() => handleDonutHover(index)}
      on:mouseout={() => handleDonutOut(index)}
      on:click={() => handleDonutClick(index)}
    />
    {#if index === 1 || index === 11 || index === 12}
      <div class="label_short">{label}</div>
    {:else}
      <div class="label_norm">{label}</div>
    {/if}
  </div>
{/each}
</div>

<div>
  <svg id="path-svg" width={svgWidth} height={svgHeight}>
    <g>
      <path bind:this={root} id="myPath" transition:draw={{ duration: 0 }}
        d={generatePathString(donuts)}
        fill="none"
        stroke="black"
        stroke-width="5px"
      />
    </g>
  </svg>
</div>