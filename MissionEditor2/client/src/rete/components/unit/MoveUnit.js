import Rete from "rete";
import NextElementsOutput from "@/rete/io/outputs/NextElementsOutput";
import PreviousElementsInput from "@/rete/io/inputs/PreviousElementsInput";
import NumberControl from "@/rete/controls/NumberControl";
import TextControl from "@/rete/controls/TextControl";
import BooleanControl from "@/rete/controls/BooleanControl";
import NamedComponent from "@/rete/components/NamedComponent";

export default class MoveUnit extends NamedComponent {

    constructor() {
        super("Move unit");
        this.path = ['Unit'];
    }

    builder(node) {
        super.builder(node);
        node.icon = 'baggage';
        node.path = this.path;
        
        let previousElementsInput = new PreviousElementsInput();
        let nextElementsOutput = new NextElementsOutput();

        let isDisplacement = new BooleanControl("is_displacement", this.editor, "Is displacement", true);
        let speed = new NumberControl("speed", this.editor, "Speed", 0);
        let unitPositionAsStartPosition = new BooleanControl("unit_position_as_start_position", this.editor, "Start at unit", true);
        
        node
            .addInput(previousElementsInput)
            .addOutput(nextElementsOutput)
            .addControl(isDisplacement)
            .addControl(speed)
            .addControl(unitPositionAsStartPosition)
        ;
    }

    worker(node, inputs, outputs) {
        super.worker(node, inputs, outputs);
    }
}