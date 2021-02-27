import sockets from "@/rete/sockets";
import PreviousElementsInput from "@/rete/io/inputs/PreviousElementsInput";
import FieldOutput from "@/rete/io/outputs/FieldOutput";
import NamedComponent from "@/rete/components/NamedComponent";

export default class TimerSetComponent extends NamedComponent {

    constructor() {
        super("Timer set");
        this.path = ['Timer'];
    }

    builder(node) {
        super.builder(node);
        
        let previousElements = new PreviousElementsInput();

        let value = new FieldOutput('value', sockets.number, {
            emitter: this.editor,
            name: "New value",
            type: 'number',
            append: 's'
        });
        
        node.icon = 'stopwatch';

        node
            .addInput(previousElements)
            .addOutput(value)
            .addControl(value.field);
    }

    worker(nodeData, inputs, outputs) {
        super.worker(nodeData, inputs, outputs);
        // var node = this.editor.nodes.find(n => n.id === nodeData.id);
        //
        // if (node) {
        //     node.inputs.get('value').update(nodeData, inputs);
        // }
    }
}