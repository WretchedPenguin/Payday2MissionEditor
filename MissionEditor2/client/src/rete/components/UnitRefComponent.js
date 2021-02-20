import Rete from "rete";
import sockets from "../sockets";
import FieldOutput from "@/rete/io/outputs/FieldOutput";

export default class UnitRefComponent extends Rete.Component {

    constructor() {
        super("Unit Ref");
    }

    builder(node) {
        let num = new FieldOutput('unit', sockets.unit, {
            emitter: this.editor,
            type: 'number',
            name: 'Unit ID',
            inputLength: 9
        });
        
        node.icon = 'object'
        
        node.addControl(num.field).addOutput(num);
    }

    worker(node, inputs, outputs) {
        outputs['unit'] = node.data.unit;
    }
}