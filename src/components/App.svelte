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
    { src: donutHypeClosed, visible: false, scrollPosition: 0 },
    { src: donutHypeOpen, visible: false, scrollPosition: 500 },
    { src: donutWave, visible: false, scrollPosition: 1000 },
    { src: donutWaveLeft, visible: false, scrollPosition: 1500 },
    { src: donutThinkRight, visible: false, scrollPosition: 2000 },
    { src: donutThinkLeft, visible: false, scrollPosition: 2500 }
  ];

  let donutVisible = false;

  onMount(() => {
    const onScroll = homepage('donuts', donuts);
    window.addEventListener('scroll', onScroll);
    // plotComplexities("big-o-graph", "Big O Complexity Visualization", "Try hovering over the lines!");
    // funTable("fun-table");
  });
</script>

<style>
  .container {
    display: flex;
    justify-content: center; /* Center the child elements horizontally */
    align-items: center; /* Center the child elements vertically */
    width: 100vw; /* Set container width to full viewport width */
    height: 100vh; /* Set container height to full viewport height */
  }

  #big-o-graph {
    flex: 2; /* Take up 2/3 of the container */
    overflow: auto; /* Hide overflowing content */
  }

  #fun-table {
    flex: 1; /* Take up 1/3 of the container */
    overflow-y: auto; /* Enable vertical scroll if content exceeds height */
    text-align: center;
    margin-left: -250px;
    margin-right: 75px;
  }

  .donut-container {
    position: absolute;
    top: 0;
    left: 50%; /* Center horizontally */
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1; /* Ensure donuts are above other content */
  }

  .donut {
    opacity: 0;
    transition: opacity 0.5s;
    width: 150px;
    height: auto;
    margin-bottom: 50px; /* Adjust spacing between donuts */
  }

  .donut-visible {
    opacity: 1;
  }
</style>

<div class="container">
  <div id="big-o-graph">
      <!-- Your big-o-graph component here -->
  </div>
  <div id="fun-table">
      <!-- Your table component here -->
  </div>
  <div class="donut-container">
    {#each donuts as donut}
      <img src={donut.src} alt="Donut" class:donut={donut.visible ? 'donut-visible' : ''} style="max-width: 150px; height: auto;" />
    {/each}
  </div>
</div>
