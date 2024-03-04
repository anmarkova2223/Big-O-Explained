<!-- src/routes/About.svelte -->
<script>
    console.log('Linear.svelte loaded');

    import Katex from 'svelte-katex';
    import 'katex/dist/katex.min.css'; //having this is what makes the math format nicely

    import donutHypeClosed from '../lib/donut-hype-eyes-closed.png';
    import { goto } from '$app/navigation';

      import 'katex/dist/katex.min.css'; //having this is what makes the math format nicely

    function handleDonutClick() {
    console.log("Back to homepage!")
    goto('homepage');
  }
</script>

<style>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        padding: 0 40px;
        height: 100%; /* Ensure the container takes up the full height */
    }

    /* Adjust the pre element styles if needed */
    pre {
        margin: 0;
        padding: 20px;
        background-color: #f4f4f4;
        border-radius: 5px;
        overflow-x: auto;
        display: flex;
        justify-content: center;
    }

    pre code {
        text-align: left; /* Ensure code is left-aligned */
    }

</style>

<main class="container">
    <h1 style="text-align: center;">Factorial Time</h1>

    <p style="text-align: center;">Great work! Click on the donut to go back to the home page!</p>
    <img src={donutHypeClosed} alt="Donut Image" style="width: 150px;display: block; margin-left: auto; margin-right: auto;" on:click={handleDonutClick}>
</main>