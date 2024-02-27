import * as d3 from "d3";

export function plotComplexities() {
    
    const width = 800;
    const height = 600;
    const margin = { top: 50, right: 50, bottom: 50, left: 100 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const svg = d3.select('#plot');
    svg.selectAll("*").remove();

    const plotSize = 28;

    const xScale = d3.scaleLinear()
      .domain([0, plotSize])
      .range([0, innerWidth]);

    const yScale = d3.scaleLinear()
      .domain([0, plotSize])
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

    // Label for color meanings
    const colorLegendGroup = svg.append("g")
      .attr("transform", "translate(10, 10)");

    const colorData = [
      { color: "red", text: "Horrible" },
      { color: "orange", text: "Bad" },
      { color: "yellow", text: "Fair" },
      { color: "steelblue", text: "Good" }
    ];

    const legendItems = colorLegendGroup.selectAll("g")
      .data(colorData)
      .enter().append("g")
      .attr("transform", (d, i) => "translate(0, " + (i * 20) + ")");

    legendItems.append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", 10)
      .attr("height", 10)
      .attr("fill", d => d.color);

    legendItems.append("text")
      .attr("x", 15)
      .attr("y", 10)
      .text(d => d.text)
      .attr("fill", "black")
      .attr("font-size", 12);

    // Move the colorLegendGroup to a new position
    colorLegendGroup.attr("transform", "translate(825, 50)");

    // O(1) line
    const o1Line = g.append("line")
      .attr("x1", xScale(0))
      .attr("y1", yScale(1))
      .attr("x2", xScale(plotSize))
      .attr("y2", yScale(1))
      .attr("stroke", "steelblue")
      .attr("stroke-width", 2)
      .attr("clip-path", "url(#clip)");

    const o1LabelRect = g.append("rect")
      .attr("x", xScale(plotSize) + 5)
      .attr("y", yScale(1) - 10)
      .attr("width", 40) // Adjust width here
      .attr("height", 20) // Adjust height here
      .attr("fill", "steelblue")
      .attr("opacity", 0); // Initially invisible

    const o1Label = g.append("text")
      .attr("x", xScale(plotSize) + 10)
      .attr("y", yScale(1) + 5)
      .text("O(1)")
      .attr("fill", "black");

    // O(log n) line
    const oLogNLine = g.append("path")
      .datum(d3.range(1, plotSize + 1))
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 2)
      .attr("d", d3.line()
        .x(d => xScale(d))
        .y(d => yScale(Math.log(d)))
      )
      .attr("clip-path", "url(#clip)");

    const oLogNLabelRect = g.append("rect")
      .attr("x", xScale(plotSize) + 5)
      .attr("y", yScale(Math.log(plotSize)) - 15)
      .attr("width", 68) // Adjust width here
      .attr("height", 20) // Adjust height here
      .attr("fill", "steelblue")
      .attr("opacity", 0); // Initially invisible

    const oLogNLabel = g.append("text")
      .attr("x", xScale(plotSize) + 10)
      .attr("y", yScale(Math.log(plotSize)))
      .text("O(log n)")
      .attr("fill", "black");

    // O(n) line
    const oNLine = g.append("line")
      .attr("x1", xScale(0))
      .attr("y1", yScale(0))
      .attr("x2", xScale(plotSize))
      .attr("y2", yScale(plotSize))
      .attr("stroke", "yellow")
      .attr("stroke-width", 2)
      .attr("clip-path", "url(#clip)");

    const oNLabelRect = g.append("rect")
      .attr("x", xScale(plotSize))
      .attr("y", yScale(plotSize) - 20)
      .attr("width", 50) // Adjust width here
      .attr("height", 20) // Adjust height here
      .attr("fill", "yellow")
      .attr("opacity", 0); // Initially invisible

    const oNLabel = g.append("text")
      .attr("x", xScale(plotSize) + 10)
      .attr("y", yScale(plotSize) - 5)
      .text("O(n)")
      .attr("fill", "black");

    // O(n log n) line
    const oNLogNLine = g.append("path")
      .datum(d3.range(1, plotSize + 1))
      .attr("fill", "none")
      .attr("stroke", "orange")
      .attr("stroke-width", 2)
      .attr("d", d3.line()
        .x(d => xScale(d))
        .y(d => yScale(d * Math.log(d)))
      )
      .attr("clip-path", "url(#clip)");

    const oNLogNLabelRect = g.append("rect")
      .attr("x", 292.5)
      .attr("y", -25)
      .attr("width", 80) // Adjust width here
      .attr("height", 20) // Adjust height here
      .attr("fill", "orange")
      .attr("opacity", 0); // Initially invisible

    const oNLogNLabel = g.append("text")
      .attr("x", 300)
      .attr("y", -10)
      .text("O(n log n)")
      .attr("fill", "black");

    // O(n^2) line
    const oNSquaredLine = g.append("path")
      .datum(d3.range(0, plotSize + 1))
      .attr("fill", "none")
      .attr("stroke", "red")
      .attr("stroke-width", 2)
      .attr("d", d3.line()
        .x(d => xScale(d))
        .y(d => yScale(d ** 2))
        .curve(d3.curveCardinal)
      )
      .attr("clip-path", "url(#clip)");

    const oNSquaredLabelRect = g.append("rect")
      .attr("x", 125)
      .attr("y", -25)
      .attr("width", 55) // Adjust width here
      .attr("height", 20) // Adjust height here
      .attr("fill", "red")
      .attr("opacity", 0); // Initially invisible

    const oNSquaredLabel = g.append("text")
      .attr("x", 130)
      .attr("y", -10)
      .text("O(n^2)")
      .attr("fill", "black");

    // O(2^n) line
    const oTwoNLine = g.append("path")
      .datum(d3.range(0, plotSize + 1))
      .attr("fill", "none")
      .attr("stroke", "red")
      .attr("stroke-width", 2)
      .attr("d", d3.line()
        .x(d => xScale(d))
        .y(d => yScale(2 ** d))
        .curve(d3.curveCardinal)
      )
      .attr("clip-path", "url(#clip)");

    const oTwoNLabelRect = g.append("rect")
      .attr("x", 102.5)
      .attr("y", -45)
      .attr("width", 60) // Adjust width here
      .attr("height", 20) // Adjust height here
      .attr("fill", "red")
      .attr("opacity", 0); // Initially invisible

    const oTwoNLabel = g.append("text")
      .attr("x", 110)
      .attr("y", -30)
      .text("O(2^n)")
      .attr("fill", "black");

    // O(n!) line
    const oNFactorialLine = g.append("path")
      .datum(d3.range(0, 7))
      .attr("fill", "none")
      .attr("stroke", "red")
      .attr("stroke-width", 2)
      .attr("d", d3.line()
        .x(d => xScale(d))
        .y(d => yScale(factorial(d)))
        .curve(d3.curveCardinal)
      )
      .attr("clip-path", "url(#clip)");

    const oNFactorialLabelRect = g.append("rect")
      .attr("x", 75)
      .attr("y", - 25)
      .attr("width", 45) // Adjust width here
      .attr("height", 20) // Adjust height here
      .attr("fill", "red")
      .attr("opacity", 0); // Initially invisible

    const oNFactorialLabel = g.append("text")
      .attr("x", 80)
      .attr("y", - 10)
      .text("O(n!)")
      .attr("fill", "black");

    // Helper function for factorial
    function factorial(n) {
      if (n === 0 || n === 1) return 1;
      return n * factorial(n - 1);
    }

    // Handle hover events
    const lines = [o1Line, oLogNLine, oNLine, oNLogNLine, oNSquaredLine, oTwoNLine, oNFactorialLine];
    const labelRects = [o1LabelRect, oLogNLabelRect, oNLabelRect, oNLogNLabelRect, oNSquaredLabelRect, oTwoNLabelRect, oNFactorialLabelRect];
    const labels = [o1Label, oLogNLabel, oNLabel, oNLogNLabel, oNSquaredLabel, oTwoNLabel, oNFactorialLabel];
    const colors = ["steelblue", "steelblue", "yellow", "orange", "red", "red", "red"];

    lines.forEach((line, index) => {
      const labelRect = labelRects[index];
      const label = labels[index];
      line.on('mouseover', () => {
        line.attr('stroke-width', 4).attr('stroke', 'black');
        labelRect.attr('opacity', 0.5).attr('fill', colors[index]);
        label.attr('fill', 'black');
      });

      line.on('mouseout', () => {
        line.attr('stroke-width', 2).attr('stroke', colors[index]);
        labelRect.attr('opacity', 0);
        label.attr('fill', 'black');
      });
    });
  }


<svg id="plot" width="900" height="600"></svg>