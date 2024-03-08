<!-- src/routes/About.svelte -->
<script>
    console.log('Quadratic.svelte loaded');
    import donutThinkRight from '../lib/donut-think-right.png';
    import { goto } from '$app/navigation';

    import Katex from 'svelte-katex';
    import 'katex/dist/katex.min.css'; //having this is what makes the math format nicely

    function handleDonutClick() {
    console.log("Back to homepage!")
    goto('homepage');
  }

  function backButton(){
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
    <h1>Quadratic Time</h1>
    <p>We classify Quadratic Time as horrible! This is because the complexity of polynomials increase as the exponent increases. They are very slow. The most common Quadratic Time talked about is <Katex>O(n^2)</Katex>.</p>
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

    <p>Quadratic time complexity occurs when the runtime scales quadratically with the input. </p>
    <p>As the input size increases, the runtime of the algorithm also increases in a quadratic fashion (i.e. the runtime is proportional to the square of the input size).</p>

    <h2>Examples</h2>
    <pre>
        <code class="language-python">
    
            def example(input_list): # explanation: TODO
                n = len(input_list)
                for i in range(n):
                    for j in range(n):
                        print(input_list[i], input_list[j])

            # some other examples:
            TODO
            
            # another example: 
            TODO

        </code>
    </pre>
    <p style="text-align: center;">Great work! Click on the donut to go back to the home page!</p>
    <img src={donutThinkRight} alt="Donut Image" style="width: 150px;" on:click={handleDonutClick}>
</main>

<div>
    <button on:click={backButton}>Go Back to Homepage</button>
  </div>