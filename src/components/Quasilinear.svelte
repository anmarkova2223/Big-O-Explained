<!-- src/routes/About.svelte -->
<script>
    import Katex from "svelte-katex";

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
    <p>More complex than <Katex>O(n)</Katex>, but less complex than <Katex>O(n^2)</Katex>.</p>
    <p>Examples:</p>
    <p>Some common algorithms that are <Katex>O(n log(n))</Katex> are merge sort, quicksort, and operations on a self-balancing binary search tree.</p>
    <pre>
        <code class="language-python">
def find_max_recursive(arr, start, end):
    if start == end:
        return arr[start]
    mid = (start + end) // 2
    max_left = find_max_recursive(arr, start, mid)
    max_right = find_max_recursive(arr, mid + 1, end)
    return max(max_left, max_right)
        </code>
    </pre>
</main>