export function funTable(targetElementId) {
    // Define table data
    const tableData = [
        { otherName: "Constant Time", complexity: "O(1)", wayToRemember: "Yeah!" },
        { otherName: "Logarithmic Time", complexity: "O(log n)", wayToRemember: "O(nice)" },
        { otherName: "Linear Time", complexity: "O(n)", wayToRemember: "O()" },
        { otherName: "Quasilinear Time", complexity: "O(n log n)", wayToRemember: "O()" },
        { otherName: "Quadratic Time", complexity: "O(n^2)", wayToRemember: "O()" },
        { otherName: "Exponential Time", complexity: "O(2^n)", wayToRemember: "O()" },
        { otherName: "Factorial Time", complexity: "O(n!)", wayToRemember: "O(MG)" }
    ];

    // Get the target SVG container
    const svgContainer = d3.select(`#${targetElementId}`);

    // Define SVG container dimensions
    const containerWidth = 900; // New width
    const containerHeight = 600; // New height

    // Update SVG container dimensions
    svgContainer.attr("width", containerWidth)
                .attr("height", containerHeight);

    // Keep inner dimensions unchanged
    const margin = { top: 50, right: 50, bottom: 50, left: 100 };
    const width = containerWidth - margin.left - margin.right;
    const height = containerHeight - margin.top - margin.bottom;

    // Append a group for the table
    const tableGroup = svgContainer.append("g")
                                   .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // Append a table element
    const table = tableGroup.append("foreignObject")
                            .attr("width", width)
                            .attr("height", height)
                            .append("xhtml:table")
                            .style("width", "100%");

    // Append table rows
    const rows = table.selectAll("tr")
                      .data(tableData)
                      .enter()
                      .append("xhtml:tr");

    // Append table data cells
    rows.selectAll("td")
        .data(d => [d.complexity, d.wayToRemember])
        .enter()
        .append("xhtml:td")
        .style("border", "1px solid black") // Optional: add border to cells
        .style("padding", "8px") // Optional: add padding to cells
        .text(d => d);
}
