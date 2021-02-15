var graph = new LGraph();

var canvas = new LGraphCanvas("#mycanvas", graph);

canvas.resize(window.innerWidth, window.innerHeight);
window.addEventListener("resize", function (){canvas.resize(); });

// LiteGraph.clearRegisteredTypes();

graph.start();

function testNodeOnExecute() {
    var a = this.getInputData(0);
    if (a === undefined)
        a = 0;
    var b = this.getInputData(1);
    if (b === undefined)
        b = 0;
    this.setOutputData(0, a + b);
}

function setOutputData() {
    this.setOutputData(0, parseFloat(this.properties["Value"]));
}