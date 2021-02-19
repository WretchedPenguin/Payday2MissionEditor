import Rete from "rete";
import sockets from "../sockets";
import FieldControl from "../controls/FieldControl";
import FieldOutput from "@/rete/outputs/FieldOutput";

export default class NumComponent extends Rete.Component {

    constructor() {
        super("Constant");
    }

    builder(node) {
        let out1 = new FieldOutput('num', "Number", sockets.numSocket);
        let control1 = new FieldControl('num', {emitter: this.editor, type: 'number', name: 'Value'});

        node.titleStyle = "background-color: #548235";
        
        out1.addControl(control1);
        node.addControl(control1).addOutput(out1);
    }

    worker(node, inputs, outputs) {
        outputs['num'] = node.data.num;
    }
}