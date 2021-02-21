import Rete from "rete";
import sockets from "../sockets";
import NextElementsOutput from "@/rete/io/outputs/NextElementsOutput";

export default class StartupComponent extends Rete.Component {

    constructor() {
        super("Startup");
        this.path = ['Control'];
    }

    builder(node) {
        let out1 = new NextElementsOutput('On startup');
        
        node.icon = 'play-button-arrow';
        
        node.addOutput(out1);
    }

    worker(node, inputs, outputs) {
    }
}