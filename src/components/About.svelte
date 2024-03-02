<!-- src/routes/About.svelte -->
<script>
  import edmund from '../lib/Edmund_Landau.jpg';
  import Katex from 'svelte-katex';
  import donutWaveLeft from '../lib/donut-wave-left.png';
  import { goto } from '$app/navigation';

  function handleDonutClick() {
    // Navigate to the desired location when the donut image is clicked
    console.log("Back to homepage!")
    window.location.href = '/';
  }

  console.log('About.svelte loaded');
</script>
  
<main style="text-align:center; padding: 0 40px;">
    <h1>What is Big O Notation?</h1>
    <p>Big O notation is a fundamental tool used to analyze the cost of an algorithm. It gives the upper-bound runtime or worst-case complexity of an algorithm. This allows one to classify algorithms depending on their run time or space requirements. Big O notation was invented by Paul Bachmann, Edmund Landau, and others. It is also called Bachmann-Landau notation or asymptotic notation. The letter “n” represents the input size (this can be the length of a list of a given integer).</p>
    <h2>Here is the formal definition:</h2>
    <p><Katex>f(N) = O(g(N))</Katex> if there exists possible constants <Katex>c</Katex>, <Katex>N_{0}</Katex> such that <Katex>f(N) \leq c * g(N)</Katex> for all <Katex>N \geq N_{0}</Katex>.</p>
    <h1>Why is Big O Notation Important?</h1>
    <p>Big O Notation is essential if you want to know how algorithms will scale. For example, if you are designing a big website and have a lot of users the time it takes to handle those requests are important. You need to know how to store all of this data efficiently, so when you write code it does not take a million years to run. Big O Notation gives you a high level idea of which algorithms are fast or slow and the tradeoffs.</p>
    <h1>Fun fact!</h1>
    <p>Big O is modeled after Edmund Landau! This picture of Landau is from Wikipedia. Go ahead and click on Big O to return to the main page.</p>
    <div style="display: flex; justify-content: center;">
      <div style="display: flex; flex-direction: row; align-items: center;">
          <img src={edmund} alt="Picture of Edmund Landau From Wikipedia" style="margin-right: 20px;">
          <img src={donutWaveLeft} alt="Donut Image" style="width: 400px;" on:click={handleDonutClick}>
      </div>
  </div>
</main>
