import Rete from "rete";
import sockets from "../sockets";

export default class StartupComponent extends Rete.Component {

    constructor() {
        super("Startup");
    }

    builder(node) {
        let out1 = new Rete.Output('startup', "On startup", sockets.elementSocket);

        node.titleStyle = "background-color: #9DC3E6";
        
        node.addOutput(out1);
    }

    worker(node, inputs, outputs) {
    }
}