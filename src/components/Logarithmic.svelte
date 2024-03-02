<!-- src/routes/About.svelte -->
<script>
    console.log('Logarithmic.svelte loaded');
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
    <h1>Logarithmic Time</h1>

    <p>when an algorithm has O(log n) running time, it means that as the input size grows, the number of operations grows very slowly.</p>
    <p>log(n) increases only by a tiny amount as N increases. When N doubles, log(n) only increases by 1.</p>
    <p>The most popular example of an algorithm that takes O(log n) is Binary Search.</p>

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
</main>