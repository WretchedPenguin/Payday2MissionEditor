var graph = new LGraph();

var canvas = new LGraphCanvas("#mycanvas", graph);

canvas.resize(window.innerWidth, window.innerHeight);
window.addEventListener("resize", function() { canvas.resize(); });

LiteGraph.clearRegisteredTypes();

//graph.start();