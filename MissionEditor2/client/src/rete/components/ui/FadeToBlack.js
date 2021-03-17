import NextElementsOutput from "@/rete/io/outputs/NextElementsOutput";
import PreviousElementsInput from "@/rete/io/inputs/PreviousElementsInput";
import NamedComponent from "@/rete/components/NamedComponent";
import Rete from "rete";

export default class FadeToBlack extends Rete.Component {

    constructor() {
        super("Fade to black");
        this.path = ['UI'];
    }

    builder(node) {
        node.icon = 'rounded-black-square-shape';
        node.path = this.path;

        let previousElementsInput = new PreviousElementsInput();
        let nextElementsOutput = new NextElementsOutput();

        node
            .addInput(previousElementsInput)
            .addOutput(nextElementsOutput)
        ;
    }

    worker(node, inputs, outputs) {
    }
}