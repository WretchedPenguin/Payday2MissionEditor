import Rete from "rete";
import NextElementsOutput from "@/rete/io/outputs/NextElementsOutput";
import PreviousElementsInput from "@/rete/io/inputs/PreviousElementsInput";
import NumberControl from "@/rete/controls/NumberControl";

export default class WhisperState extends Rete.Component {

    constructor() {
        super("Whisper state");
        this.path = ['Control'];
    }

    builder(node) {
        let previousElementsInput = new PreviousElementsInput();

        node.icon = 'quiet';
        node.path = this.path;

        node
            .addInput(previousElementsInput);
    }

    worker(node, inputs, outputs) {
    }
}