<script>
  import { onMount } from 'svelte';
  import { plotComplexities } from './cheatSheet.js';
  import { funTable } from './funTable.js';

  onMount(() => {
      plotComplexities("big-o-graph", "Big O Complexity Visualization", "Try hovering over the lines!");
      funTable("big-o-graph");
  });
</script>

<style>
  /* Apply flex properties to the container div */
  .container {
      display: flex;
      justify-content: center;
      align-items: flex-start; /* Align items to the top */
      height: 90vh; /* Adjust the height of the container */
  }

  /* Apply styles to the graph div */
  #big-o-graph {
      max-width: 60%; /* Adjust width of the graph */
      max-height: 100%; /* Allow the graph to occupy full height */
  }

  /* Apply styles to the table div */
  #fun-table {
      max-width: 40%; /* Adjust width of the table */
      overflow-y: auto; /* Enable vertical scroll if content exceeds height */
      padding: 0 10px; /* Add padding for better appearance */
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
