// set the dimensions and margins of the graph
let width = 450;
let height = 450
let margin = 40

// The radius of the pieplot is half the width or half the height (smallest one). I substract a bit of margin.
let radius = Math.min(width, height) / 2 - margin

// append the svg object to the div called 'my_dataviz'
let svg = d3.select("#my_dataviz")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// Create dummy data
let data = { a: 9, b: 20, c: 30, d: 8, e: 12 }

const setColors = () => {
    
    return ["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"];
}

// set the color scale
let color = d3.scaleOrdinal()
    .domain(data)
    .range(setColors())

// Compute the position of each group on the pie:
let pie = d3.pie().value((d) => d.value)
let data_ready = pie(d3.entries(data))

// Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
svg
    .selectAll('whatever')
    .data(data_ready)
    .enter()
    .append('path')
    .attr('d', d3.arc()
        .innerRadius(0)
        .outerRadius(radius)
    )
    .attr('fill', function (d) { return (color(d.data.key)) })
    .attr('class', 'color2')
    .attr("stroke", "black")
    .style("stroke-width", "2px")
    .style("opacity", 0.7)