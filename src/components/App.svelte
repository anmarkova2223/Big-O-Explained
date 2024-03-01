<script>
  import { onMount } from 'svelte';

  import { goto } from '$app/navigation';

  // import { funTable } from './funTable.js'
  // import { plotComplexities } from './cheatSheet.js';
  import { drawPath } from './path.js';

  import donutWave from '../lib/donut-wave.png';
  import donutWaveLeft from '../lib/donut-wave-left.png';
  import donutHypeOpen from '../lib/donut-hype-eyes-open.png';
  import donutHypeClosed from '../lib/donut-hype-eyes-closed.png';
  import donutThinkLeft from '../lib/donut-think-left.png';
  import donutThinkRight from '../lib/donut-think-right.png';

  let donuts = [
    { src: donutWave, top: 100, left: 35, width: 150 },
    { src: donutThinkRight, top: 225, left: 60, width: 130 },
    { src: donutHypeClosed, top: 325, left: 20, width: 150 },
    { src: donutWaveLeft, top: 425, left: 45, width: 140 },
    { src: donutHypeOpen, top: 525, left: 70, width: 150 },
    { src: donutWave, top: 650, left: 45, width: 150 },
    { src: donutWaveLeft, top: 750, left: 20, width: 140 },
    { src: donutThinkLeft, top: 900, left: 46, width: 120 }
  ];

  let greeting = "Welcome! My name is Big O. To get started click on my dopplegangers to learn more about Big O Notation.";
  
  let svgWidth;
  let svgHeight;

  let pathData = [
    { x: 600, y: 0 },
    { x: 150, y: 100 },
    { x: 250, y: 300 },
    { x: 350, y: 100 },
    { x: 450, y: 300 },
    { x: 550, y: 100 },
    { x: 650, y: 300 },
    { x: 750, y: 200 }
    // Add more points as needed
  ];

  onMount(() => {

    svgWidth = window.innerWidth;
    svgHeight = window.innerHeight;

    // drawPath('#path-svg', pathData, svgWidth, svgHeight);
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
    goto('/about'); // 404 errors
  }
  else if (index == 2) {
    goto('/graph');
  }
  else if (index == 3) {
    goto('/constant');
  }
  else if (index == 4) {
    goto('/logarithmic');
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
  /* 
  .main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
  }

  #big-o-graph {
    flex: 2;
    overflow: auto;
  }

  #fun-table-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    overflow-y: auto;
    margin-right: 75px;
  }

  #fun-table {
    text-align: center;
  } */

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
</style>

<div class="title-container">
  <h1>Big O Notation Explained</h1>
</div>
<!-- 
<div class="main-container">
  <div id="big-o-graph">
    Your big-o-graph component here
  </div>

  <div id="fun-table-container">
    <div id="fun-table">
      Your table component here -->
    <!-- </div>
  </div> -->

<div>
  {#each donuts as { src, top, left, width, hovered, clicked }, index}
    {#if index === 0}
        <div class="speech-bubble" style={`top: ${top + 30}px; left: ${left + 11}%;`}>
          Welcome! My name is Big O. To get started click on my dopplegangers to learn more about Big O Notation.
        </div>
      {/if}
    {#if hovered}
      {#if index === 1}
        <div class="speech-bubble" style={`top: ${top + 3}px; left: 71%;`}>
          What is Big O Notation? Why is it important?
        </div>
      {/if}
      {#if index === 2}
        <div class="speech-bubble" style={`top: ${top + 30}px; left: 34%;`}>
          Click me for a graph and table!
        </div>
      {/if}
      {#if index === 3}
        <div class="speech-bubble" style={`top: ${top + 30}px; left: 63%;`}>
          Let's learn about Constant Time!
        </div>
      {/if}
      {#if index === 4}
        <div class="speech-bubble" style={`top: ${top + 30}px; left: 65%;`}>
          Let's learn about Logarithmic Time!
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
  <svg id="path-svg" width={svgWidth} height={svgHeight}></svg>
</div>