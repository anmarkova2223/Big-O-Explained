<!-- App.svelte -->
<script>
  import { onMount } from 'svelte';
  import * as d3 from 'd3';

  function plotComplexities() {
    const width = 800;
    const height = 600;
    const margin = { top: 50, right: 50, bottom: 50, left: 100 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const svg = d3.select('#plot');
    svg.selectAll("*").remove();

    const xScale = d3.scaleLinear()
      .domain([0, 250]) // Adjusted x-axis domain to 250
      .range([0, innerWidth]);

    const yScale = d3.scaleLinear()
      .domain([0, 500])
      .range([innerHeight, 0]);

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

    // Clip path
    svg.append("defs").append("clipPath")
      .attr("id", "clip")
      .append("rect")
      .attr("width", innerWidth)
      .attr("height", innerHeight);

    // Plotting O(1) line
    const o1Line = g.append("line")
      .attr("x1", xScale(0))
      .attr("y1", yScale(1))
      .attr("x2", xScale(250)) // Adjusted x2 to 250
      .attr("y2", yScale(1))
      .attr("stroke", "steelblue")
      .attr("stroke-width", 2)
      .attr("clip-path", "url(#clip)");

    // Label for O(1) line
    g.append("text")
      .attr("x", xScale(250) + 40) // Adjusted x position
      .attr("y", yScale(1) + 5)
      .attr("text-anchor", "end")
      .text("O(1)");

    // Plotting O(log n) line
    const logNLine = g.append("path")
      .datum(d3.range(1, 251)) // Adjusted range to 251
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
      .attr("x", xScale(250) + 40) // Adjusted x position
      .attr("y", yScale(Math.log(250)) - 10)
      .attr("text-anchor", "end")
      .text("O(log n)");

    // Plotting O(n) line
    const nLine = g.append("line")
      .attr("x1", xScale(0))
      .attr("y1", yScale(0))
      .attr("x2", xScale(250)) // Adjusted x2 to 250
      .attr("y2", yScale(250)) // Adjusted y2 to 250
      .attr("stroke", "red")
      .attr("stroke-width", 2)
      .attr("clip-path", "url(#clip)");

    // Label for O(n) line
    g.append("text")
      .attr("x", xScale(250) + 40) // Adjusted x position
      .attr("y", yScale(250) - 5)
      .attr("text-anchor", "end")
      .text("O(n)");

    // Plotting O(n log n) line
    const nLogNLine = g.append("path")
      .datum(d3.range(1, 251)) // Adjusted range to 251
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
      .attr("x", 310) // Adjusted x position
      .attr("y", -10) // Above the clipped area
      .attr("text-anchor", "end")
      .text("O(n log n)");

    // Plotting O(n^2) line
    const nSquaredLine = g.append("path")
      .datum(d3.range(1, 251)) // Adjusted range to 251
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
      .attr("x", 90) // Adjusted x position
      .attr("y", -10) // Above the clipped area
      .attr("text-anchor", "end")
      .text("O(n^2)");

    // Plotting O(2^n) line
    const exponentialLine = g.append("path")
      .datum(d3.range(1, 251)) // Adjusted range to 251
      .attr("fill", "none")
      .attr("stroke", "brown")
      .attr("stroke-width", 2)
      .attr("d", d3.line()
        .x(d => xScale(d))
        .y(d => yScale(2 ** d))
      )
      .attr("clip-path", "url(#clip)");

    // Label for O(2^n) line
    g.append("text")
      .attr("x", 375) // Adjusted x position
      .attr("y", -10) // Above the clipped area
      .attr("text-anchor", "end")
      .text("O(2^n)");

    // Plotting O(n!) line
    const factorialLine = g.append("path")
      .datum(d3.range(1, 11)) // Range limited to 10 for n!
      .attr("fill", "none")
      .attr("stroke", "black")
      .attr("stroke-width", 2)
      .attr("d", d3.line()
        .x(d => xScale(d))
        .y(d => yScale(factorial(d)))
      )
      .attr("clip-path", "url(#clip)");

    // Label for O(n!) line
    g.append("text")
      .attr("x", 5) // Adjusted x position
      .attr("y", -10) // Above the clipped area
      .attr("text-anchor", "start")
      .text("O(n!)");

    // Helper function for factorial
    function factorial(n) {
      if (n === 0 || n === 1) return 1;
      return n * factorial(n - 1);
    }
  }

  onMount(() => {
    plotComplexities();
  });
</script>

<svg id="plot" width="900" height="600" style="margin: auto;"></svg>
