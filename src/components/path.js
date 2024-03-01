// path.js
import * as d3 from 'd3';

export const drawPath = (svgSelector, pathData, svgWidth, svgHeight) => {
  const lineGenerator = d3.line()
    .x(d => d.x)
    .y(d => d.y)
    .curve(d3.curveCardinal.tension(0.5));

  d3.select(svgSelector).append('path')
    .data([pathData])
    .attr('d', lineGenerator)
    .attr('fill', 'none')
    .attr('stroke', 'green')
    .attr('stroke-width', 3)
    .attr('width', svgWidth)  // Set the SVG width
    .attr('height', svgHeight);  // Set the SVG height
};
