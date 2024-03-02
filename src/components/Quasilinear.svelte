<!-- src/routes/About.svelte -->
<script>
    console.log('Quasilinear.svelte loaded');
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
    <h1>Quasilinear Time</h1>
    <p>Add text here</p>
    <pre>
        <code class="language-python">
print("hello")
        </code>
    </pre>
</main>