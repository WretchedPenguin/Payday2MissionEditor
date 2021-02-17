import Rete, {Node, NodeEditor} from "rete";
import NumControl from "../controls/NumControl";
import sockets from "../sockets";
import {NodeData, WorkerInputs, WorkerOutputs} from "rete/types/core/data";

export default class AddComponent extends Rete.Component {
    constructor() {
        super("Add");
    }

    // @ts-ignore
    builder(node: Node) {
        var inp1 = new Rete.Input('num', "Number", sockets.numSocket);
        var inp2 = new Rete.Input('num2', "Number2", sockets.numSocket);
        var out = new Rete.Output('num', "Number", sockets.numSocket);

        inp1.addControl(new NumControl(this.editor, 'num'))
        inp2.addControl(new NumControl(this.editor, 'num2'))

        return node
            .addInput(inp1)
            .addInput(inp2)
            .addControl(new NumControl(this.editor, 'preview', true))
            .addOutput(out);
    }

    worker(node: NodeData, inputs: WorkerInputs, outputs: WorkerOutputs) {
        var n1 = inputs['num'].length ? inputs['num'][0] : node.data.num1;
        var n2 = inputs['num2'].length ? inputs['num2'][0] : node.data.num2;
        var sum = n1 + n2;

        // @ts-ignore
        this.editor.nodes.find(n => n.id == node.id).controls.get('preview').setValue(sum);
        outputs['num'] = sum;
    }
}