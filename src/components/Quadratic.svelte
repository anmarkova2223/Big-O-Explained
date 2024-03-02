<!-- src/routes/About.svelte -->
<script>
    console.log('Quadratic.svelte loaded');
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
    <h1>Quadratic Time</h1>
    <p>We classify Quadratic Time as horrible! This is because the complexity of polynomials increase as the exponent increases. They are very slow. The most common Quadratic Time talked about is O(n^2).</p>
    <h2>Examples of Quadratic Time:</h2>
    <p>Some common algorithms that are in Quadratic time are bubble sort, selection sort, insertion sort, and matrix multiplication.</p>
    <pre>
        <code class="language-python">
# Here is a simple example of code
  that runs in quadratic time!
  
for element1 in arr1:
    for element2 in arr2:
        print(element1, element2)
        </code>
    </pre>
</main>
