<script>
  import { fly } from 'svelte/transition';
  import Modal from './Modal.svelte';
  import { plotComplexities } from './sidebarTips.js';
  import { onMount } from 'svelte';
  import Katex from 'svelte-katex';
  import 'katex/dist/katex.min.css'; //having this is what makes the math format nicely

  export let show = false;
  let modal_show = false;

  function toggleSidebar() {
    show = !show;
    if (show) {
      plotGraph();
    } else {
      clearGraph();
    }
  }

  function plotGraph() {
    const sidebarContent = document.getElementById("sidebar-content");
    sidebarContent.innerHTML = ""; // Clear existing content
    plotComplexities("sidebar-content", "Big O Visualization");
  }

  function clearGraph() {
    const sidebarContent = document.getElementById("sidebar-content");
    sidebarContent.innerHTML = ""; // Clear existing content
  }

  onMount(() => {
    if (show) {
      plotGraph();
    }
  });
</script>

<style>
  .sidebar-container {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 20rem;
    background: #fff;
    overflow-y: auto;
    z-index: 1000;
    transition: right 0.3s ease;
    border-left: 1px solid #aaa;
    transform: translateX(var(--sidebar-translate, 0));
  }

  .button-container {
    position: fixed;
    top: 50%;
    right: 18rem;
    transform: translateY(-50%);
    z-index: 1001;
    transition: right 0.3s ease;
  }

  button {
    transform: translateX(var(--button-translate)) rotate(-90deg);
  }

  #sidebar-content {
    padding: 20px;
  }
</style>

<div class="sidebar-container" style="right: {show ? '0' : '-20rem'}">
  <nav transition:fly={{x: 250, opacity: 1}}>
    <div id="sidebar-content"></div>
    <div class="graph-text" style="margin-top: -80px; text-align: left; font-size: 13px;padding: 20px;">
      <h4 style="font-size: 15px;">Rules to Big O Notation</h4>
      <li>We say <Katex>n</Katex> is approaching infinity because we want to see how algorithms scale. This means that constants do not matter when calculating Big O.</li>
      <ul>
        <li>For example: If you have <Katex>O(3 + 5n + n^2 + 6n^2)</Katex> then the Big O Notation is <Katex>O(n^2)</Katex>. In general we ignore the constants. If you did look at constants we know <Katex>6n^2</Katex> will take the longest, but when we ignore the coefficient it becomes <Katex>O(n^2)</Katex>.</li>
      </ul>
    </div>
  </nav>
  <Modal />
</div>

<div class="button-container" style="--button-translate: {show ? '0' : '20rem'}">
  <button on:click={toggleSidebar}>Click For Tips</button>
</div>
