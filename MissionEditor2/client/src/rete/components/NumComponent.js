import Rete from "rete";
import sockets from "../sockets";
import FieldControl from "../controls/FieldControl";
import FieldOutput from "@/rete/io/outputs/FieldOutput";

export default class NumComponent extends Rete.Component {

    constructor() {
        super("Number");
        this.path = ['Constants'];
    }

    builder(node) {
        let num = new FieldOutput('num', sockets.number, {
            emitter: this.editor,
            type: 'number',
            name: 'Value',
            inputLength: 9
        });
        
        node.icon = 'equal';

        node.addControl(num.field).addOutput(num);
    }

    worker(node, inputs, outputs) {
        outputs['num'] = node.data.num;
    }
}