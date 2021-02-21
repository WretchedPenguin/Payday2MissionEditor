import Rete from "rete";
import NameControl from "@/rete/controls/NameControl";
import PreviousElementsInput from "@/rete/io/inputs/PreviousElementsInput";
import ToggleOutput from "@/rete/io/outputs/ToggleOutput";

export default class ToggleComponent extends Rete.Component {

    constructor() {
        super("Toggle");
        this.path = ['Control'];
    }

    builder(node) {
        let name = new NameControl(this.editor);
        let previousElements = new PreviousElementsInput();
        let toggleOutput = new ToggleOutput(this.editor);        

        node.icon = 'switch';
        
        node
            .addControl(name)
            .addInput(previousElements)
            .addControl(toggleOutput.field)
            .addOutput(toggleOutput)
    }

    worker(nodeData, inputs, outputs) {
        outputs['toggle'] = nodeData.data.triggerCount;
    }
}