import Rete from "rete";
import NameControl from "@/rete/controls/NameControl";
import PreviousElementsInput from "@/rete/io/inputs/PreviousElementsInput";
import ToggleOutput from "@/rete/io/outputs/ToggleOutput";
import NamedComponent from "@/rete/components/NamedComponent";

export default class ToggleComponent extends NamedComponent {

    constructor() {
        super("Toggle");
        this.path = ['Control'];
    }

    builder(node) {
        super.builder(node);
        let previousElements = new PreviousElementsInput();
        let toggleOutput = new ToggleOutput(this.editor);        

        node.icon = 'switch';
        node.path = this.path;
        
        node
            .addInput(previousElements)
            .addControl(toggleOutput.field)
            .addOutput(toggleOutput)
    }

    worker(nodeData, inputs, outputs) {
        super.worker(nodeData, inputs, outputs);
        outputs['toggle'] = nodeData.data.trigger_times;
    }
}