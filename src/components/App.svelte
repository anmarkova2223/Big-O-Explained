<script>
  import { onMount } from 'svelte';
  import {draw} from 'svelte/transition'


  import { goto } from '$app/navigation';

  // import { funTable } from './funTable.js'
  // import { plotComplexities } from './cheatSheet.js';
  import { drawPath } from './path.js';
  let root;

  import donutWave from '../lib/donut-wave.png';
  import donutWaveLeft from '../lib/donut-wave-left.png';
  import donutHypeOpen from '../lib/donut-hype-eyes-open.png';
  import donutHypeClosed from '../lib/donut-hype-eyes-closed.png';
  import donutThinkLeft from '../lib/donut-think-left.png';
  import donutThinkRight from '../lib/donut-think-right.png';

  import croissant from '../lib/croissant-mascot.png';
  import logNoAmber from '../lib/log-no-amber.png';
  import omgBanana from '../lib/omg-banana.png';
  import sugarCube from '../lib/sugarcube.png'
  import rocket from '../lib/rocket.png'

  let donuts = [
    { src: donutWave, top: 100, left: 35, width: 150 },
    { src: donutThinkRight, top: 225, left: 60, width: 130 },
    { src: donutHypeClosed, top: 325, left: 20, width: 150 },
    { src: donutWaveLeft, top: 425, left: 45, width: 140 },
    { src: sugarCube, top: 525, left: 70, width: 160 },
    { src: logNoAmber, top: 650, left: 45, width: 160 },
    { src: donutHypeOpen, top: 775, left: 20, width: 150 },
    { src: donutThinkLeft, top: 900, left: 46, width: 120 },
    { src: croissant, top: 1025, left: 70, width: 160 },
    { src: rocket, top: 1150, left: 45, width: 150 },
    { src: omgBanana, top: 1275, left: 20, width: 170 },
    { src: donutThinkRight, top: 1400, left: 45, width: 130 },
    { src: donutWaveLeft, top: 1550, left: 70, width: 140 }
  ];

  let greeting = "Welcome! My name is Big O. To get started click on my dopplegangers to learn more about Big O Notation.";
  
  let svgWidth;
  let svgHeight;

  let pathData = [
    { x: 600, y: 200 },
    { x: 900, y: 300 },
    { x: 350, y: 450 },
    { x: 700, y: 500 },
    { x: 1050, y: 600 },
    { x: 700, y: 750 },
    { x: 350, y: 850 },
    { x: 700, y: 1000 }
    // Add more points as needed
  ];
  function generatePathString(pathData) {
    let path = [
      {M: "600 200"},
      {c: "1.5 3.5 274 -11.5 350 100"},
      {}
    ]

    return "M 600 200 c 1.5 3.5 274 -11.5 350 100" + 
    "c -9.43 12.28 -289.58 4.73 -600.1 100" + 
    "c 11.69 53.47 346.44 7.02 750.08 200" + 
    "c .71 146.16 -100 -8.34 -770.97 200" +
    "c 9.06 67.54 304.65 46.22 350.99 116.39";
    //return "M" + pathData.map(point => `${point.x},${point.y}`).join(' ');
  }

  onMount(() => {

    svgWidth = window.innerWidth;
    svgHeight = window.outerHeight * 2;
    console.log(svgHeight);

    let totalLength = root.getTotalLength();
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

  svg {
		outline: solid lightgray 1px;
  }

</style>
<div class="title-container">
  <h1>Big O Notation Explained</h1>
</div>

<div>
  {#each donuts as { src, top, left, width, hovered, clicked }, index}
    {#if index === 0}
        <div class="speech-bubble" style={`top: ${top + 30}px; left: ${left + 11}%;`}>
          Welcome! My name is Big O. Follow the path and click my dopplegangers and friends to learn about Big O!
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
    <img class="donut"
      src={src}
      alt="Donut"
      style={`top: ${top}px; left: ${left}%; width: ${width}px`}
      on:mouseover={() => handleDonutHover(index)}
      on:mouseout={() => handleDonutOut(index)}
      on:click={() => handleDonutClick(index)}/>
  {/each}
</div>

<div>
  <svg id="path-svg" width={svgWidth} height={svgHeight}>
    <g>
      <path bind:this={root} id="myPath" transition:draw={{ duration: 1500 }}
        d={generatePathString(pathData)}
        fill="none"
        stroke="black"
        stroke-width="5px"
      />
    </g>
  </svg>
</div>