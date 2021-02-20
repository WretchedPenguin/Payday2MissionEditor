import Rete from "rete";
import sockets from "../sockets";
import NameControl from "@/rete/controls/NameControl";
import PreviousElementsInput from "@/rete/io/inputs/PreviousElementsInput";
import FieldOutput from "@/rete/io/outputs/FieldOutput";

export default class TimerSetComponent extends Rete.Component {

    constructor() {
        super("Timer set");
    }

    builder(node) {
        let name = new NameControl(this.editor);
        
        let previousElements = new PreviousElementsInput();

        let value = new FieldOutput('value', sockets.number, {
            emitter: this.editor,
            name: "New value",
            type: 'number',
            append: 's'
        });
        
        node.icon = 'stopwatch';

        node
            .addControl(name)
            .addInput(previousElements)
            .addOutput(value)
            .addControl(value.field);
    }

    worker(nodeData, inputs, outputs) {
        var node = this.editor.nodes.find(n => n.id === nodeData.id);

        if (node) {
            node.inputs.get('value').update(nodeData, inputs);
        }
    }
}