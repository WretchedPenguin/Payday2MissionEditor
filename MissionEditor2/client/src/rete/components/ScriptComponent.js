import Rete from "rete";
import sockets from "../sockets";
import GroupControl from "@/rete/controls/GroupControl";
import NameControl from "@/rete/controls/NameControl";
import PreviousElementsInput from "@/rete/io/inputs/PreviousElementsInput";
import NextElementsOutput from "@/rete/io/outputs/NextElementsOutput";
import FieldInput from "@/rete/io/inputs/FieldInput";
import FieldControl from "@/rete/controls/FieldControl";
import GroupInput from "@/rete/io/inputs/GroupInput";
import ToggleInput from "@/rete/io/inputs/ToggleInput";

export default class ScriptComponent extends Rete.Component {

    constructor() {
        super("Script");
        this.path = ['Control'];
    }

    builder(node) {
        let name = new NameControl(this.editor);
        let previousElements = new PreviousElementsInput();
        let nextElements = new NextElementsOutput();

        let delay = new FieldInput('delay', sockets.number, {
            emitter: this.editor,
            name: "Delay",
            append: 's',
            type: 'number',
            initial: 10
        });

        let toggleInput = new ToggleInput(this.editor);
        
        node.icon = 'script';
        
        node
            .addControl(name)
            .addInput(previousElements)
            .addInput(delay)
            .addInput(toggleInput)
            .addOutput(nextElements);
    }

    worker(nodeData, inputs, outputs) {
        var node = this.editor.nodes.find(n => n.id === nodeData.id);

        if (node) {
            node.inputs.get('delay').update(nodeData, inputs);
            node.inputs.get('toggle').update(nodeData, node, inputs, outputs);
        }
    }
}