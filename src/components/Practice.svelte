<!-- src/routes/About.svelte -->
<script>
    import edmund from '../lib/Edmund_Landau.jpg';
    import Katex from 'svelte-katex';
    import 'katex/dist/katex.min.css'; //having this is what makes the math format nicely
    import donutWaveLeft from '../lib/donut-wave-left.png';
    import { goto } from '$app/navigation';
  
    function handleDonutClick() {
      // Navigate to the desired location when the donut image is clicked
      console.log("Back to homepage!")
      goto('homepage');
    }

    function backButton(){
    console.log("Back to homepage!")
    goto('homepage');
  }
  
    console.log('Sources.svelte loaded');
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
    
    <div>
      <button on:click={backButton}>Go Back to Homepage</button>
    </div>
  <main class="container">
      <h1>Practice Problems</h1>
      <p style="text-align: center;">Great work! Click on the donut to go back to the home page!</p>
      <img src={donutWaveLeft} alt="Donut Image" style="width: 150px;display: block; margin-left: auto; margin-right: auto;" on:click={handleDonutClick}>
</main>