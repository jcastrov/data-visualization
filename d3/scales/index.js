const HEIGHT = 300;

// const canvas = d3.select("#canvas");
const svg = d3.select("svg");
svg.attr("height", HEIGHT)

const scale = d3.scaleLinear().domain([0, 400]).range([0, HEIGHT]);
const scaleColor = d3.scaleLinear().domain([0, 200]).range(["#ff00ff", "#00ffff"]);

const dataArray = [50, 150, 100, 75, 10, 200];



const group = svg
  .selectAll("g")
  .data(dataArray)
  .enter()
  .append("g")
  .attr("transform", (d, i) => `translate(${i * 22}, 180)`);

group
  .append("rect")
  .attr("y", (d) => scale(-d))
  .attr("width", 20)
  .attr("height", (d, i) => scale(d))
  .attr("fill",(d) => scaleColor(d))

group
  .append("text")
  .attr("x", 10)
  .attr("y", (d) => scale(-d - 4))
  .attr("text-anchor", "middle")
  .attr("class", "text-bars")
  .text((d) => d);
