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
      .domain([0, 20])
      .range([0, innerWidth]);

    const yScale = d3.scaleLinear()
      .domain([0, 20])
      .range([innerHeight, 0]);

    const xAxis = d3.axisBottom(xScale)
      .ticks(5);

    const yAxis = d3.axisLeft(yScale)
      .ticks(5);

    svg.append("g")
      .attr("transform", `translate(${margin.left}, ${innerHeight + margin.top})`)
      .call(xAxis);

    svg.append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`)
      .call(yAxis);

    const g = svg.append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // Define clipping path
    svg.append("defs").append("clipPath")
      .attr("id", "clip")
      .append("rect")
      .attr("width", innerWidth)
      .attr("height", innerHeight);

    // O(1) line
    g.append("line")
      .attr("x1", xScale(0))
      .attr("y1", yScale(1))
      .attr("x2", xScale(20))
      .attr("y2", yScale(1))
      .attr("stroke", "steelblue")
      .attr("stroke-width", 2)
      .attr("clip-path", "url(#clip)");

    g.append("text")
      .attr("x", xScale(20) + 10)
      .attr("y", yScale(1) + 5)
      .text("O(1)")

    // O(log n) line
    g.append("path")
      .datum(d3.range(1, 21))
      .attr("fill", "none")
      .attr("stroke", "green")
      .attr("stroke-width", 2)
      .attr("d", d3.line()
        .x(d => xScale(d))
        .y(d => yScale(Math.log(d)))
      )
      .attr("clip-path", "url(#clip)");

    g.append("text")
      .attr("x", xScale(20) + 10)
      .attr("y", yScale(Math.log(20)) - 10)
      .text("O(log n)")

    // O(n) line
    g.append("line")
      .attr("x1", xScale(0))
      .attr("y1", yScale(0))
      .attr("x2", xScale(20))
      .attr("y2", yScale(20))
      .attr("stroke", "red")
      .attr("stroke-width", 2)
      .attr("clip-path", "url(#clip)");

    g.append("text")
      .attr("x", xScale(20) + 10)
      .attr("y", yScale(20) - 5)
      .text("O(n)")

    // O(n log n) line
    g.append("path")
      .datum(d3.range(1, 21))
      .attr("fill", "none")
      .attr("stroke", "orange")
      .attr("stroke-width", 2)
      .attr("d", d3.line()
        .x(d => xScale(d))
        .y(d => yScale(d * Math.log(d)))
      )
      .attr("clip-path", "url(#clip)");

    g.append("text")
      .attr("x", 300)
      .attr("y", -10)
      .text("O(n log n)")

    // O(n^2) line
    g.append("path")
      .datum(d3.range(0, 21))
      .attr("fill", "none")
      .attr("stroke", "purple")
      .attr("stroke-width", 2)
      .attr("d", d3.line()
        .x(d => xScale(d))
        .y(d => yScale(d ** 2))
        .curve(d3.curveCardinal)
      )
      .attr("clip-path", "url(#clip)");

    g.append("text")
      .attr("x", 150)
      .attr("y", -10)
      .text("O(n^2)")

    // O(2^n) line
    g.append("path")
      .datum(d3.range(0, 21))
      .attr("fill", "none")
      .attr("stroke", "pink")
      .attr("stroke-width", 2)
      .attr("d", d3.line()
        .x(d => xScale(d))
        .y(d => yScale(2 ** d))
        .curve(d3.curveCardinal)
      )
      .attr("clip-path", "url(#clip)");

    g.append("text")
      .attr("x", 100)
      .attr("y", -10)
      .text("O(2^n)")

    // O(n!) line
    g.append("path")
      .datum(d3.range(1, 11))
      .attr("fill", "none")
      .attr("stroke", "brown")
      .attr("stroke-width", 2)
      .attr("d", d3.line()
        .x(d => xScale(d))
        .y(d => yScale(factorial(d)))
        .curve(d3.curveCardinal)
      )
      .attr("clip-path", "url(#clip)");

    g.append("text")
      .attr("x", 10)
      .attr("y", 10)
      .text("O(n!)")

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

<svg id="plot" width="800" height="600"></svg>
