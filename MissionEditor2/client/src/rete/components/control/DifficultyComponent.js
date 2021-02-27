import Rete from "rete";
import NextElementsOutput from "@/rete/io/outputs/NextElementsOutput";
import PreviousElementsInput from "@/rete/io/inputs/PreviousElementsInput";
import NumberControl from "@/rete/controls/NumberControl";

export default class DifficultyComponent extends Rete.Component {

    constructor() {
        super("Difficulty");
        this.path = ['Control'];
    }

    builder(node) {
        let previousElementsInput = new PreviousElementsInput();

        let difficulty = new NumberControl("difficulty", this.editor, "Difficulty", 1);
        node.icon = 'speedometer';
        node.path = this.path;

        node
            .addInput(previousElementsInput)
            .addControl(difficulty);
    }

    worker(node, inputs, outputs) {
    }
}