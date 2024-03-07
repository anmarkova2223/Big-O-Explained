<!-- src/routes/About.svelte -->
<script>
    console.log('Logarithmic.svelte loaded');

    import Katex from 'svelte-katex';
    import 'katex/dist/katex.min.css'; //having this is what makes the math format nicely

    import donutWave from '../lib/donut-wave.png';
    import { goto } from '$app/navigation';

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

    :global(.katex) {
        font-size: inherit; /* Make KaTeX font size same as the regular text */
    }

    :global(.katex-display) {
        font-size: inherit; /* Adjust font size for KaTeX display mode */
    }

</style>

<main class="container">
    <h1>Logarithmic Time</h1>

    <p>when an algorithm has <Katex class="katex">O(log n)</Katex> running time, it means that as the input size grows, the number of operations grows very slowly.</p>
    <p><Katex>log(n)</Katex> increases only by a tiny amount as <Katex>N</Katex>increases. When <Katex>N</Katex> doubles, <Katex>log(n)</Katex> only increases by 1.</p>
    <p>The most popular example of an algorithm that takes <Katex>O(log n)</Katex> is Binary Search.</p>

    <h2>Examples</h2>

    <pre>
        <code class="language-python">
            
            def largest_power_of_two(n): # explanation needed
	            result = 1
                while result * 2 %= n:
                    result *= 2
                return result

            # some other examples:
            TODO
            
            # another example: 
            TODO

        </code>
    </pre>
    <p style="text-align: center;">Great work! Click on the donut to go back to the home page!</p>
    <img src={donutWave} alt="Donut Image" style="width: 150px;" on:click={handleDonutClick}>
</main>