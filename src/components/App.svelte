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
    { src: donutHypeClosed, top: 50, left: 100, width: 150 },
    { src: donutHypeOpen, top: 150, left: 200, width: 150 },
    { src: donutWave, top: 250, left: 300, width: 150 },
    { src: donutWaveLeft, top: 350, left: 400, width: 140 },
    { src: donutThinkRight, top: 450, left: 500, width: 130 },
    { src: donutThinkLeft, top: 550, left: 600, width: 120 }
  ];

  onMount(() => {
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

  .donut {
    opacity: 1;
    transition: opacity 0.5s;
    height: auto;
    margin-bottom: 50px;
  }

</style>

<div class="container">
  <div id="big-o-graph">
      <!-- Your big-o-graph component here -->
  </div>
  <div id="fun-table">
      <!-- Your table component here -->
  </div>
    {#each donuts as donut}
      <img class="donut" src={donut.src} alt="Donut" style={`top: ${donut.top}px; left: ${donut.left}px; width: ${donut.width}px`}/>
    {/each}
</div>
