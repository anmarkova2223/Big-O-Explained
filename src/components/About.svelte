<!-- src/routes/About.svelte -->
<script>
  import edmund from '../lib/Edmund_Landau.jpg';
  import Katex from 'svelte-katex';
  import donutWaveLeft from '../lib/donut-wave-left.png';
  import { goto } from '$app/navigation';

  function handleDonutClick() {
    // Navigate to the desired location when the donut image is clicked
    console.log("Back to homepage!")
    goto('/');
  }

  console.log('About.svelte loaded');
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
      padding: 5px;
      background-color: #f4f4f4;
      border-radius: 5px;
      overflow-x: auto;
      display: flex;
      justify-content: center;
  }

  pre code {
      text-align: left; /* Ensure code is left-aligned */
  }

  ul {
      list-style-type: disc; /* Set the bullet style */
      text-align: left;
      padding-left: 0; /* Remove default padding */
  }

  ul ul {
        list-style-type: circle; /* Change the bullet style for the nested list */
        text-align: left;
        margin-top: 5px; /* Adjust the spacing between the parent and nested lists */
        margin-left: 40px;
    }

  li {
      margin-left: 20px; /* Adjust the space between bullet and text */
  }
</style>
  
<main class="container">
    <h1>What is Big O Notation?</h1>
    <p style="text-align: left;">Big O notation is a fundamental tool used to analyze the cost of an algorithm. It gives the upper-bound runtime or worst-case complexity of an algorithm. This allows one to classify algorithms depending on their run time or space requirements. Big O notation was invented by Paul Bachmann, Edmund Landau, and others. It is also called Bachmann-Landau notation or asymptotic notation. The letter “n” represents the input size (this can be the length of a list of a given integer).</p>
    <h2>Here is the formal definition:</h2>
    <p><Katex>f(N) = O(g(N))</Katex> if there exists possible constants <Katex>c</Katex>, <Katex>N_{0}</Katex> such that <Katex>f(N) \leq c * g(N)</Katex> for all <Katex>N \geq N_{0}</Katex>.</p>
    <h2>Why is Big O Notation Important?</h2>
    <p style="text-align: left;">Big O Notation is essential if you want to know how algorithms will scale. For example, if you are designing a big website and have a lot of users the time it takes to handle those requests are important. You need to know how to store all of this data efficiently, so when you write code it does not take a million years to run. Big O Notation gives you a high level idea of which algorithms are fast or slow and the tradeoffs.</p>
    <h2>Big O Notation Rules:</h2>
    <ul>
      <li>Big O for the algorithm is the portion that takes the longest time (is the slowest).</li>
      <li>If your algorithm has multiple sections to it that utilize <Katex>n</Katex> that are not nested together then you add the functions.</li>
      <pre>
        <code class="language-python">
# n is 5 (length of the list)
  # Creating a list like this is O(1)
lst = [1, 2, 3, 4, 5]

# Creating a variable is O(1)
total = 0

# Going through the number of data points means we will do actions inside the for loop n times
for elem in lst:

  # Addition is O(1), but it happens n times
          # This means: O(1) * n = O(n)
  total += elem

# Printing is O(1)
print(total)

# O(1) + O(1) + O(n) + O(1) = O(n)
          # We look at the action that takes the slowest, which is O(n)
        </code>
    </pre>
      <li>We say <Katex>n</Katex> is approaching infinity because we want to see how algorithms scale. This means that constants do not matter when calculating Big O.</li>
        <ul>
          <li>This is to say, we only care about dominant terms and not the coefficients.</li>
          <li>For example: If you have <Katex>O(3 + 5n + n^2 + 6n^2)</Katex> then the Big O Notation is <Katex>O(n^2)</Katex>. In general we skip ignore the constants. If you did look at constants we know <Katex>6n^2</Katex> will take the longest, but when we ignore the coefficient it becomes <Katex>O(n)</Katex>.</li>
        </ul>
      <li>When calculating Big O Notation for recursive functions one should look at where <Katex>n</Katex> is shrinking and calculate by solving recurrences.</li>
      <ul>
        <li>Step 1: "Unroll" several times to find a pattern.</li>
        <li>Step 2: Write a general formula for the kth unroll.</li>
        <li>Step 3: Solve for the number of unrolls needed to get to the base case.</li>
        <li>Step 4: Plug this number into the general formula.</li>
        <li><Katex style="display: inline-block;">Insert Math Work Here</Katex></li>
      </ul>
    </ul>
    <h2>Fun fact!</h2>
    <p>Big O is modeled after Edmund Landau! This picture of Landau is from Wikipedia. Go ahead and click on Big O to return to the main page.</p>
    <div style="display: flex; justify-content: center;">
      <div style="display: flex; flex-direction: row; align-items: center;">
          <img src={edmund} alt="Picture of Edmund Landau From Wikipedia" style="margin-right: 20px;">
          <img src={donutWaveLeft} alt="Donut Image" style="width: 400px;" on:click={handleDonutClick}>
      </div>
  </div>
</main>
