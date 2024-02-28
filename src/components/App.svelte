<!-- App.svelte -->
<script>
  import { onMount } from 'svelte';
  import { plotComplexities } from './cheatSheet.js';

  onMount(() => {
      plotComplexities("big-o-graph");
  });
</script>

<div id="big-o-graph" style="width: 900px; height: 600px; margin-top: 80px; margin-left: auto; margin-right: auto;"></div>

<style>

</style>