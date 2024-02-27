<!-- App.svelte -->
<script>
  import { onMount } from 'svelte';
  import * as d3 from 'd3';

  let xUpperBound; // Variable to hold the upper bound of the x-axis
  let yUpperBound; // Variable to hold the upper bound of the y-axis

  function plotComplexities() {
    const width = 800;
    const height = 600;
    const margin = { top: 50, right: 50, bottom: 50, left: 100 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const svg = d3.select('#plot');
    svg.selectAll("*").remove();

    const xScale = d3.scaleLinear()
      .domain([0, 500])
      .range([0, innerWidth]);
    
    xUpperBound = xScale(500); // Saving the upper bound of xScale

    const yScale = d3.scaleLinear()
      .domain([0, 500]) // adjust domain based on your needs
      .range([innerHeight, 0]);

    yUpperBound = yScale(500); // Saving the upper bound of yScale

    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    svg.append("g")
      .attr("transform", `translate(${margin.left}, ${innerHeight + margin.top})`)
      .call(xAxis);

    svg.append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`)
      .call(yAxis);

    const g = svg.append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // Plotting O(1) line
    const o1Line = g.append("line")
      .attr("x1", xScale(0))
      .attr("y1", yScale(1))
      .attr("x2", xUpperBound)
      .attr("y2", yScale(1))
      .attr("stroke", "steelblue")
      .attr("stroke-width", 2)
      .attr("clip-path", "url(#clip)");
    
    // Label for O(1) line
    g.append("text")
      .attr("x", xUpperBound + 40)
      .attr("y", 505)
      .attr("text-anchor", "end")
      .text("O(1)");

    // Plotting O(log n) line
    const logNLine = g.append("path")
      .datum(d3.range(1, 501))
      .attr("fill", "none")
      .attr("stroke", "green")
      .attr("stroke-width", 2)
      .attr("d", d3.line()
        .x(d => xScale(d))
        .y(d => yScale(Math.log(d)))
      )
      .attr("clip-path", "url(#clip)");
    
    // Label for O(log n) line
    g.append("text")
      .attr("x", xUpperBound + 65)
      .attr("y", 490)
      .attr("text-anchor", "end")
      .text("O(log n)");
      
    // Plotting O(n) line
    const nLine = g.append("line")
      .attr("x1", xScale(0))
      .attr("y1", yScale(0))
      .attr("x2", xUpperBound)
      .attr("y2", yUpperBound) // Using yUpperBound here
      .attr("stroke", "red")
      .attr("stroke-width", 2)
      .attr("clip-path", "url(#clip)");
    
    // Label for O(n) line
    g.append("text")
      .attr("x", xUpperBound - 10)
      .attr("y", yUpperBound - 10) // Using yUpperBound here
      .attr("text-anchor", "end")
      .text("O(n)");

    // Plotting O(n log n) line
    const nLogNLine = g.append("path")
      .datum(d3.range(1, 501))
      .attr("fill", "none")
      .attr("stroke", "orange")
      .attr("stroke-width", 2)
      .attr("d", d3.line()
        .x(d => xScale(d))
        .y(d => yScale(d * Math.log(d)))
      )
      .attr("clip-path", "url(#clip)");
    
    // Label for O(n log n) line
    g.append("text")
      .attr("x", 175)
      .attr("y", -10) // Above the clipped area
      .attr("text-anchor", "end")
      .text("O(n log n)");

    // Plotting O(n^2) line
    const nSquaredLine = g.append("path")
      .datum(d3.range(1, 501))
      .attr("fill", "none")
      .attr("stroke", "purple")
      .attr("stroke-width", 2)
      .attr("d", d3.line()
        .x(d => xScale(d))
        .y(d => yScale(d ** 2))
      )
      .attr("clip-path", "url(#clip)");
    
    // Label for O(n^2) line
    g.append("text")
      .attr("x", 50)
      .attr("y", -10) // Above the clipped area
      .attr("text-anchor", "end")
      .text("O(n^2)");

    // Plotting O(2^n) line
    const twoNLine = g.append("path")
      .datum(d3.range(1, 11)) // Limiting to 10 points for clarity
      .attr("fill", "none")
      .attr("stroke", "brown")
      .attr("stroke-width", 2)
      .attr("d", d3.line()
        .x(d => xScale(d))
        .y(d => yScale(2 ** d)) // Using 2^n as y value
      )
      .attr("clip-path", "url(#clip)");
    
    // Label for O(2^n) line
    g.append("text")
      .attr("x", 60)
      .attr("y", -10) // Above the clipped area
      .attr("text-anchor", "end")
      .text("O(2^n)");

    // Clip path
    svg.append("defs").append("clipPath")
      .attr("id", "clip")
      .append("rect")
      .attr("width", innerWidth)
      .attr("height", innerHeight);
  }

  onMount(() => {
    plotComplexities();
  });
</script>

<svg id="plot" width="900" height="600" style="margin: auto;"></svg>
