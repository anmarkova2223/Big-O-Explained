<!-- src/routes/About.svelte -->
<script>
  import edmund from '../lib/Edmund_Landau.jpg';
  console.log('About.svelte loaded');

  import { onMount } from 'svelte';
  // import { renderMathInElement } from 'katex/dist/contrib/auto-render';

  // onMount(() => {
  //     renderMathInElement(document.body);
  // });
</script>
  
<main style = "text-align:center; padding: 0 40px;">
    <h1>What is Big O Notation?</h1>
    <p>Big O notation is a fundamental tool used to analyze the cost of an algorithm. It gives the upper-bound runtime or worst-case complexity of an algorithm. This allows one to classify algorithms depending on their run time or space requirements. Big O notation was invented by Paul Bachmann, Edmund Landau, and others. It is also called Bachmann-Landau notation or asymptotic notation. The letter “n” represents the input size (this can be the length of a list of a given integer).</p>
    <h2>Here is the formal definition:</h2>
    <p>Big O notation \( f(N) = O(g(N)) \) if there exists positive constants \( c \) and \( N_0 \) such that \( f(N) \leq c \cdot g(N) \) for all \( N \geq N_0 \).</p>
    <h1>Why is Big O Notation Important?</h1>
    <p></p>
    <h1>Fun fact!</h1>
    <p>Big O is inspired by Edmund Landau. His picture is here:</p>
    <img src={edmund} alt="Picture of Edmund Landau From Wikipedia">
</main>

<style>

</style>