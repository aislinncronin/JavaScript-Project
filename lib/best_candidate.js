import * as d3 from 'd3';


const width = 800;
const height = 500;

const random = bestCandidate(width, height, 10, 1000);

const svgElement = d3.select("svg");


export const bestSampleHeader = d3.select(".best")
              .insert("h1", ":first-child")
              .html("Best Candidate Sample Algorithm");

export const startBestCandidate= function() {
  debugger;
  d3.timer(function() {
    for (let i = 0; i < 7; ++i) {
      const circle = random();
      debugger;
      if (!circle) return true;
      svgElement.append("circle")
      .attr("cx", circle[0])
      .attr("cy", circle[1])
      .attr("r", 5)
      .attr("fill", 'lightseagreen');
    }
  });
} ;

function bestCandidate(width, height, numCands, maxNumSamples) {
  debugger;
  var numSamples = 0;
  var circles = [];


  return function() {

    if (circles.length === 0 ) {
      const firstCircle = [Math.random() * width, Math.random() * height];
      circles.push(firstCircle);
      return firstCircle;
    }

    if (++numSamples > maxNumSamples) return;
    var bestCand, bestD = 0;
    for (var i = 0; i < numCands; ++i) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      candGroup.append("circle")
      .attr("cx", x)
      .attr("cy", y)
      .attr("r", 3.75)
      .attr("fill", "lightgrey");
      var c = [x, y];
      var d = distance(closestSample(circles, c), c);


      if (d >= bestD) {
        bestD = d;
        bestCand = c;
      }
    }
    circles.push(bestCand);

    return bestCand;
  };


  function distance(x, y) {
        var dx = x[0] - y[0],
        dy = x[1] - y[1];
    return dx * dx + dy * dy;
  }

  function closestSample(samps, c) {
    let closestDist = 1000000000;
    let closest;

    samps.forEach((samp) => {
      const dist = distance(samp, c);
      if (dist < closestDist) {

        closest =  samp;
        closestDist = dist;
      }
    });
        return closest;
  }
}


var candGroup = svgElement.append("g")
    .attr("class", "candidate");