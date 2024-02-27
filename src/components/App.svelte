<!-- App.svelte -->
<script>
  import { onMount } from 'svelte';
  import { plotComplexities } from './cheatSheet.js';

  onMount(() => {
      plotComplexities();
  });
</script>

<svg id="plot" width="900" height="600"></svg>
