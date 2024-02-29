<script>
  import { onMount } from 'svelte';
  import { plotComplexities } from './cheatSheet.js';
  import { funTable } from './funTable.js';

  onMount(() => {
      plotComplexities("big-o-graph", "Big O Complexity Visualization", "Try hovering over the lines!");
      funTable("fun-table");
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
</style>

<div class="container">
  <div id="big-o-graph">
      <!-- Your big-o-graph component here -->
  </div>
  <div id="fun-table">
      <!-- Your table component here -->
  </div>
</div>
