// using d3 for convenience
var document = d3.select('body')
var chartDiv = document.getElementById("figure")
var width = chartDiv.clientWidth;
var height = chartDiv.clientHeight;
console.log("width: " + width);
console.log("height: " + height);

var margin = {
    top: 50,
    bottom: 50,
    left: 50,
    right: 50
};

var g = d3.select('#figure')
    .append("svg")
    .attr("height", height)
    .attr("width", width)

// g.append("rect")
// .attr("height", height)
// .attr("width", width)
// .attr("fill", "blue")

var makeGraph = function () {
    width = chartDiv.clientWidth;
    height = chartDiv.clientHeight;
    size = 120;
    r = size - 20;
    g.selectAll(".guidecircles").remove()
    g.selectAll(".myimage").remove()
    g.selectAll(".myclips").remove()

    d3.csv("data/circles.csv", function (data) {
        var simulation = d3.forceSimulation(data)
            .force("x", d3.forceX(0.4 * width))
            .force("y", d3.forceY(0.5 * height))
            .force("collide", d3.forceCollide(size))
            .stop();

        for (var i = 0; i < 30; ++i) simulation.tick();
        // data.forEach(function (d) {
        //     console.log(d)
        // })

        g.selectAll(null)
            .data(data)
            .enter()
            .append("svg:image")
            .attr("class", "myimage")
            .attr("x", function (d) { return d.x })
            .attr("y", function (d) { return d.y })
            .attr("clip-path", function (d) { return "url(#clip" + d.name })
            .attr("xlink:href", function (d) { return d.picture })
            .attr("height", "220px")

        g.selectAll(null)
            .data(data)
            .enter()
            .append("circle")
            .attr("class", "guidecircles")
            .attr("cx", function (d) { return d.x })
            .attr("cy", function (d) { return d.y })
            .attr("r", r)
            .attr("opacity", 1)
            .attr("fill", "none")
            // .attr("fill", function(d){return d.color})
            .attr("stroke", "black")
            .attr("stroke-width", "2px")
            .attr("transform", "translate(120, 120)")

        g.selectAll("clips")
            .data(data)
            .enter()
            .append("clipPath")
            .attr("class", "myclips")
            .attr("id", function (d) { return "clip" + d.name })
            .append("circle")
            .attr("cx", function (d) { return d.x + 120 })
            .attr("cy", function (d) { return d.y + 120 })
            .attr("r", r)

        g.selectAll(".myimage")
            .on("mouseenter", function (d) {
                console.log("ENTER")
                d3.select(this)
                    .attr("opacity", .2)
            })
            .on("mouseleave", function (d) {
                d3.select(this)
                    .attr("opacity", 1)
            })
    })
}

makeGraph();
window.addEventListener("resize", makeGraph);
