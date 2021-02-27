import Rete from "rete";
import NextElementsOutput from "@/rete/io/outputs/NextElementsOutput";
import PreviousElementsInput from "@/rete/io/inputs/PreviousElementsInput";
import NumberControl from "@/rete/controls/NumberControl";
import NamedComponent from "@/rete/components/NamedComponent";

export default class UnitSequence extends NamedComponent {

    constructor() {
        super("Unit sequence");
        this.path = ['Unit'];
    }

    builder(node) {
        super.builder(node);
        let previousElementsInput = new PreviousElementsInput();
        let nextElementsOutput = new NextElementsOutput();

        node.icon = 'storyboard';
        node.path = this.path;

        node
            .addInput(previousElementsInput)
            .addOutput(nextElementsOutput)
        ;
    }

    worker(node, inputs, outputs) {
        super.worker(node, inputs, outputs);
    }
}