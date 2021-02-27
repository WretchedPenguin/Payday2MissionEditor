import Rete from "rete";
import sockets from "@/rete/sockets";
import NameControl from "@/rete/controls/NameControl";
import PreviousElementsInput from "@/rete/io/inputs/PreviousElementsInput";
import NextElementsOutput from "@/rete/io/outputs/NextElementsOutput";
import FieldInput from "@/rete/io/inputs/FieldInput";
import ToggleInput from "@/rete/io/inputs/ToggleInput";
import NamedComponent from "@/rete/components/NamedComponent";

export default class ScriptComponent extends NamedComponent {

    constructor() {
        super("Script");
        this.path = ['Control'];
    }

    builder(node) {
        super.builder(node);
        let previousElements = new PreviousElementsInput();
        let nextElements = new NextElementsOutput();

        let baseDelay = new FieldInput('base_delay', sockets.number, {
            emitter: this.editor,
            name: "Base Delay",
            append: 's',
            type: 'number',
            initial: 0
        });

        let toggleInput = new ToggleInput(this.editor);
        
        node.icon = 'script';
        node.path = this.path;
        
        node
            .addInput(previousElements)
            .addInput(baseDelay)
            .addInput(toggleInput)
            .addOutput(nextElements);
    }

    worker(nodeData, inputs, outputs) {
        super.worker(nodeData, inputs, outputs);
        var node = this.editor.nodes.find(n => n.id === nodeData.id);

        if (node) {
            node.inputs.get('base_delay').update(nodeData, inputs);
            node.inputs.get('toggle').update(nodeData, node, inputs, outputs);
        }
    }
}