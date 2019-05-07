const svg = d3.select("svg");

const dataArray = [
  {
    day: "29-04",
    people: 54,
    front: 41,
    back: 13,
    color: "#0000ff",
    online: false
  },
  {
    day: "30-04",
    people: 127,
    front: 65,
    back: 62,
    color: "#00ff00",
    online: false
  },
  {
    day: "01-05",
    people: 103,
    front: 31,
    back: 72,
    color: "#ffff00",
    online: true
  },
  {
    day: "02-05",
    people: 37,
    front: 37,
    back: 0,
    color: "#a318f2",
    online: true
  },
  {
    day: "03-05",
    people: 71,
    front: 11,
    back: 60,
    color: "#ff00ff",
    online: false
  }
];

const group = svg
  .selectAll("g")
  .data(dataArray)
  .enter()
  .append("g")
  .attr("transform", (d, i) => `translate(${i * 22}, 180)`);

group
  .append("rect")
  .attr("fill", (d) => "#cc0000")
  .attr("y", (d) => -d.people)
  .attr("width", 20)
  .attr("height", (d, i) => d.people);

group
  .append("rect")
  .attr("fill", (d) => d.color)
  .attr("y", (d) => -d.front)
  .attr("width", 20)
  .attr("height", (d, i) => d.front);

group
  .append("text")
  .attr("x", 10)
  .attr("y", (d) => -d.people - 4)
  .attr("text-anchor", "middle")
  .attr("class", "text-bars")
  .attr("fill", (d) => (d.online ? "red" : "blue"))
  .text((d) => d.people);
