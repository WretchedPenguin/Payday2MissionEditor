import Rete, {Node} from "rete";
import sockets from "@/rete/sockets";
import NameControl from "@/rete/controls/NameControl";
import FieldInput from "@/rete/io/inputs/FieldInput";
import FieldOutput from "@/rete/io/outputs/FieldOutput";
import NamedComponent from "@/rete/components/NamedComponent";

export default class TimerComponent extends NamedComponent {

    constructor() {
        super("Timer");
        this.path = ['Timer'];
    }

    builder(node) {
        super.builder(node);

        let unit = new FieldInput('unit', sockets.unit, {
            emitter: this.editor,
            name: "Timer unit",
            type: 'number'
        });
        
        let time = new FieldOutput('time', sockets.time, {
            emitter: this.editor,
            name: "Time (default)",
            append: 's',
            type: 'number'
        });

        node.icon = 'stopwatch';

        node
            .addInput(unit)
            .addOutput(time)
            .addControl(time.field);
    }

    worker(nodeData, inputs, outputs) {
        super.worker(nodeData, inputs, outputs);
        var node = this.editor.nodes.find(n => n.id === nodeData.id);

        if (node) {
            node.inputs.get('unit').update(nodeData, inputs);
            // node.inputs.get('time').update(nodeData, inputs);
        }
    }
}