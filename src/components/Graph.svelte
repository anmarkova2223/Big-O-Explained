<script>
    import { onMount } from 'svelte';
    import { funTable } from './funTable.js'
    import { plotComplexities } from './cheatSheet.js';

    console.log('Graph.svelte loaded');

    onMount(() => {

        plotComplexities("big-o-graph", "Big O Complexity Visualization", "Try hovering over the lines!");
        funTable("fun-table");
    });

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
    flex-direction: row;
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
</style>
  
  <div class="main-container">
    <div id="big-o-graph">
      <!-- Your big-o-graph component here -->
    </div>
  
    <div id="fun-table-container">
      <div id="fun-table">
        <!-- Your table component here -->
      </div>
    </div>
  </div>