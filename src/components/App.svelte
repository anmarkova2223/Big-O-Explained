<!-- App.svelte -->
<script>
  import { onMount } from 'svelte';
  import { plotComplexities } from './cheatSheet.js';

  onMount(() => {
      plotComplexities("big-o-graph", "Big O Complexity Visualization", "Try hovering over the lines!");
  });
</script>

<style>
  /* Apply flex properties to the container div */
  .big-o-graph-container {
      display: flex;
      justify-content: center; /* Center the graph horizontally */
      align-items: center; /* Center the graph vertically */
      height: 50vh; /* Set the container's height to 100% of the viewport height */
      flex-direction: column; /* Arrange items vertically */
  }

  /* Apply styles to the graph div */
  #big-o-graph {
      max-width: 80%; /* Set a maximum width to prevent it from getting too wide */
      max-height: 80%; /* Set a maximum height to prevent it from getting too tall */
  }
</style>

<div class="big-o-graph-container">
  <div id="big-o-graph">
      <!-- Your big-o-graph component here -->
  </div>
</div>
