<!-- App.svelte -->
<script>
  import { onMount } from 'svelte';
  import { plotComplexities } from './cheatSheet.js';

  onMount(() => {
      plotComplexities("big-o-graph");
  });
</script>

<style>
  /* Apply flex properties to the container div */
  .big-o-graph-container {
      display: flex;
      justify-content: center; /* Center the graph horizontally */
      align-items: center; /* Center the graph vertically */
      height: 100vh; /* Set the container's height to 100% of the viewport height */
      flex-direction: column; /* Arrange items vertically */
  }

  /* Apply styles to the graph div */
  #big-o-graph {
      max-width: 80%; /* Set a maximum width to prevent it from getting too wide */
      max-height: 80%; /* Set a maximum height to prevent it from getting too tall */
  }

  /* Style for the title */
  .title {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 10px; /* Add some space below the title */
  }

  .instruction{
    font-size: 12px;
    margin-bottom: 10px;
    padding: 0;
  }
</style>

<div class="big-o-graph-container">
  <div class="title">Big O Complexity Visualization</div>
    <div class = "instruction">Try hovering over the lines!</div>
  <div id="big-o-graph">
      <!-- Your big-o-graph component here -->
  </div>
</div>
