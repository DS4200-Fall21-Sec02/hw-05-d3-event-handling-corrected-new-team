// write your javascript code here.
// feel free to change the pre-set attributes as you see fit
//Resources:
//https://stackoverflow.com/questions/13563471/random-colors-for-circles-in-d3-js-graph
//https://www.d3indepth.com/selections/
//https://stackoverflow.com/questions/27586566/is-there-a-way-to-remove-the-stroke-or-the-border-from-the-arcs-on-d3pie
//https://stackoverflow.com/questions/64596035/how-to-use-d3-js-drag-properly
let margin = {
  top: 60,
  left: 50,
  right: 30,
  bottom: 35
},
width = 500 - margin.left - margin.right,
height = 500 - margin.top - margin.bottom;

//SVG that will hold the visualization
let svg = d3.select('#vis')
.append('svg')
.attr('preserveAspectRatio', 'xMidYMid meet') // this will scale your visualization according to the size of its parent element and the page.
.attr('width', '100%') // this is now required by Chrome to ensure the SVG shows up at all
.style('background-color', 'white')
.style('border', 'solid')
.attr('viewBox', [0, 0, width + margin.left + margin.right, height + margin.top + margin.bottom].join(' '))

// Add a square
let rect = svg.append('rect')
.attr('x', '100')
.attr('y', '200')
.attr('width', '20%')
.attr('height', '20%')
.attr('fill', '#a6cee3')
.attr("cursor", "move")
.call(d3.drag()
        .on('start', dragStart)
        .on('drag', draggingRect)
        .on('end', dragEnd))

// Add a circle
let circle = svg.append('circle')
.attr('cx', '350')
.attr('cy', '250')
.attr('r', '60')
.attr('fill', '#b2df8a')
.attr("cursor", "move")
.call(d3.drag()
        .on('start', dragStart)
        .on('drag', draggingCircle)
        .on('end', dragEnd))

//Click on circle changes rectangle color
d3.selectAll('circle')
.on('click', function(e, d) {
  d3.select('rect')
  .style("fill",function() {
    return "hsl(" + Math.random() * 360 + ",100%,50%)";
  });
});

//Double click on circle changes both shapes color
d3.selectAll('circle')
.on('dblclick', function(e, d) {
  d3.select('rect')
  .style("fill",function() {
    return "hsl(" + Math.random() * 360 + ",100%,50%)";
  });
  d3.select('circle')
  .style("fill",function() {
    return "hsl(" + Math.random() * 360 + ",100%,50%)";
  });
});

//adds border to circle when mouseover
d3.selectAll('circle')
.on('mouseover', function () {
  d3.select('circle').attr('stroke','#000000')
  .attr('stroke-width', 3);
})
.on('mousemove', function (e, d) {
  d3.select('circle').attr('stroke','#000000')
  .attr('stroke-width', 3);
})
.on('mouseout', function () {
  d3.select('circle').attr("stroke", "none");
});



//Click on rectangle changes circle color
d3.selectAll('rect')
.on('click', function(e, d) {
  d3.select('circle')
  .style("fill",function() {
    return "hsl(" + Math.random() * 360 + ",100%,50%)";
  });
});

//Double click on rectangle changes both shapes color
d3.selectAll('rect')
.on('dblclick', function(e, d) {
  d3.select('circle')
  .style("fill",function() {
    return "hsl(" + Math.random() * 360 + ",100%,50%)";
  });
  d3.select('rect')
  .style("fill",function() {
    return "hsl(" + Math.random() * 360 + ",100%,50%)";
  });
});

//adds border when hover on rectangle
d3.selectAll('rect')
.on('mouseover', function () {
  d3.select('rect').attr('stroke','#000000')
  .attr('stroke-width', 3);
})
.on('mousemove', function (e, d) {
  d3.select('rect').attr('stroke','#000000')
  .attr('stroke-width', 3);
})
.on('mouseout', function () {
  d3.select('rect').attr("stroke", "none");
});


function dragStart(event,d){
  d3.select(this)
}

function draggingRect(event,d){
  var xCoor = event.x;
  var yCoor = event.y;

  d3.select(this)
  .attr("x", xCoor)
  .attr("y", yCoor);
}

function draggingCircle(event,d){
  var xCoor = event.x;
  var yCoor = event.y;

  d3.select(this)
  .attr("cx", xCoor)
  .attr("cy", yCoor);
}

function dragEnd(event,d){
  d3.select(this).raise();
}
