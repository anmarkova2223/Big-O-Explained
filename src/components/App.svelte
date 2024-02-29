<script>
  import { onMount } from 'svelte';
  import { homepage } from './homepage.js';
  import donutWave from '../lib/donut-wave.png'; // Adjust the import path

  let donutVisible = false;

  onMount(() => {
    if (typeof window !== 'undefined') {
      const onScroll = homepage('donut');
      window.addEventListener('scroll', onScroll);
    }
  });

  $: {
    if (typeof document !== 'undefined') {
      const donutElement = document.getElementById('donut');
      donutVisible = donutElement.classList.contains('donut-visible');
    }
  }
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
    opacity: 0;
    transition: opacity 0.5s;
    width: 150px; /* Set the width */
    height: auto; /* Maintain aspect ratio */
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
</div>

<h1>Scroll down to reveal the donut</h1>
<img src={donutWave} id="donut" alt="Donut" class:donut={donutVisible ? 'donut-visible' : ''} style="max-width: 150px; height: auto;">
