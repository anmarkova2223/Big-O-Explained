<script>
  import { onMount } from 'svelte';
  import { plotComplexities } from './cheatSheet.js';
  import { funTable } from './funTable.js'
  import { homepage } from './homepage.js';
  import donutWave from '../lib/donut-wave.png';
  import donutWaveLeft from '../lib/donut-wave-left.png';
  import donutHypeOpen from '../lib/donut-hype-eyes-open.png';
  import donutHypeClosed from '../lib/donut-hype-eyes-closed.png';
  import donutThinkLeft from '../lib/donut-think-left.png';
  import donutThinkRight from '../lib/donut-think-right.png';

  let donuts = [
    { src: donutWave, top: 100, left: 35, width: 150 },
    { src: donutThinkRight, top: 300, left: 60, width: 130 },
    { src: donutHypeClosed, top: 150, left: 100, width: 150 },
    { src: donutHypeOpen, top: 250, left: 100, width: 150 },
    { src: donutWave, top: 350, left: 100, width: 150 },
    { src: donutWaveLeft, top: 450, left: 100, width: 140 },
    { src: donutThinkRight, top: 550, left: 100, width: 130 },
    { src: donutThinkLeft, top: 650, left: 100, width: 120 }
  ];

  let greeting = "Welcome! My name is Big O. To get started click on my dopplegangers to learn more about Big O Notation.";

  onMount(() => {
    // plotComplexities("big-o-graph", "Big O Complexity Visualization", "Try hovering over the lines!");
    // funTable("fun-table");
  });

  function handleDonutHover(index) {
    donuts[index].hovered = true;
  }

  function handleDonutOut(index) {
    donuts[index].hovered = false;
  }

  function handleDonutClick(index) {
    donuts[index].clicked = true;
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
</style>

<div class="title-container">
  <h1>Big O Notation Explained</h1>
</div>

<div class="main-container">
  <div id="big-o-graph">
    <!-- Your big-o-graph component here -->
  </div>

  <div id="fun-table-container">
    <div id="fun-table">
      <!-- Your table component here -->
    </div>
  </div>

  {#each donuts as { src, top, left, width, hovered, clicked }, index}
    {#if hovered}
      <div class="speech-bubble" style={`top: ${top + 20}px; left: ${left + width}px;`}>
        Hovered!
      </div>
    {/if}

    {#if clicked}
      <div class="speech-bubble" style={`top: ${top + 20}px; left: ${left + width}px;`}>
        Clicked!
      </div>
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
