import Rete from "rete";
import NextElementsOutput from "@/rete/io/outputs/NextElementsOutput";
import PreviousElementsInput from "@/rete/io/inputs/PreviousElementsInput";
import NumberControl from "@/rete/controls/NumberControl";
import TextControl from "@/rete/controls/TextControl";
import BooleanControl from "@/rete/controls/BooleanControl";
import NamedComponent from "@/rete/components/NamedComponent";
import ListControl from "@/rete/controls/ListControl";

export default class DisableUnit extends NamedComponent {

    constructor() {
        super("Disable unit");
        this.path = ['Unit'];
    }

    builder(node) {
        super.builder(node);
        node.icon = 'power-button';
        node.path = this.path;
        
        let previousElementsInput = new PreviousElementsInput();

        let unitIds = new ListControl('unit_ids', {emitter: this.editor, visible: true,
            types: [
                {name: "Unit id", type: "number", key: "value"}
            ]})
        
        node
            .addInput(previousElementsInput)
            .addControl(unitIds)
        ;
    }

    worker(node, inputs, outputs) {
        super.worker(node, inputs, outputs);
    }
}