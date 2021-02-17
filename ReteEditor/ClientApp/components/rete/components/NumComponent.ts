import Rete, {Node} from "rete";
import sockets from "../sockets";
import {NodeData, WorkerInputs, WorkerOutputs} from "rete/types/core/data";
import NumControl from "../controls/NumControl";


export default class NumComponent extends Rete.Component {

    constructor() {
        super("Number");
    }

    // @ts-ignore
    builder(node : Node) {
        let out1 = new Rete.Output('num', "Number", sockets.numSocket);

        return node.addControl(new NumControl(this.editor, 'num')).addOutput(out1);
        // node.addOutput(out1);
    }

    worker(node: NodeData, inputs: WorkerInputs, outputs : WorkerOutputs) {
        outputs['num'] = node.data.num;
    }
}