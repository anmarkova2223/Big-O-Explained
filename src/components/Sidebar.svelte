<!-- Inside Sidebar.svelte -->
<script>
  import { fly } from 'svelte/transition';
  import Modal from './Modal.svelte';
  import { plotComplexities } from './sidebarTips.js';
  import { onMount } from 'svelte';

  export let show = false;
  let modal_show = false;

  function toggleSidebar() {
    show = !show;
  }

  onMount(() => {
    if (show) {
      plotComplexities("sidebar-content", "Big O Visualization"); // Adjust parameters as needed
    }
  });
</script>

<style>
  .sidebar-container {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 20rem; /* Set the width of the sidebar */
    background: #fff;
    overflow-y: auto;
    z-index: 1000;
    transition: right 0.3s ease; /* Use transition for smooth animation */
    border-left: 1px solid #aaa;
    transform: translateX(var(--sidebar-translate, 0));
  }

  .button-container {
    position: fixed;
    top: 50%; /* Adjust as needed */
    right: 18rem; /* Set the right position to the width of the sidebar */
    transform: translateY(-50%);
    z-index: 1001;
    --button-translate: 0;
    transition: right 0.3s ease; /* Add transition for smooth movement */
  }

  /* Additional styles for the button */
  button {
    /* Add your button styles here */
    transform: translateX(var(--button-translate)) rotate(-90deg);
  }

  #sidebar-content {
    padding: 20px;
  }
</style>

<div class="sidebar-container" on:click={toggleSidebar} style="right: {show ? '0' : '-20rem'}">
  <nav transition:fly={{x: 250, opacity: 1}}>
    <div id="sidebar-content"></div>
    <div class="graph-text" style="margin-top: -80px; text-align: center; font-size: 13px;">
        <h4 style="font-size: 15px;">Rules to Big O Notation</h4>
        
      </div>
  </nav>
  <Modal bind:show={modal_show} />
</div>

<div class="button-container" style="--button-translate: {show ? '0' : '20rem'}">
  <button on:click={toggleSidebar}>Click For Tips</button>
</div>
