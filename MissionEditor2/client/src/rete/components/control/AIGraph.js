import NamedComponent from "@/rete/components/NamedComponent";
import FieldControl from "@/rete/controls/FieldControl";
import Rete from "rete";
import sockets from "@/rete/sockets";
import TextControl from "@/rete/controls/TextControl";
import NumberControl from "@/rete/controls/NumberControl";
import BooleanControl from "@/rete/controls/BooleanControl";
import ListControl from "@/rete/controls/ListControl";
import PreviousElementsInput from "@/rete/io/inputs/PreviousElementsInput";

export default class AIGraph extends NamedComponent {

    constructor() {
        super("AI Graph");
        this.path = ['Control']
    }

    builder(node) {
        super.builder(node);
        let previousElements = new PreviousElementsInput();
        let operation = new TextControl('operation', this.editor, 'Operation')
        let elements = new ListControl('graph_ids', {
            emitter: this.editor, 
            visible: true,
            types: [
                {name: "ID", type: "number", key: "value"}
            ]});

        node.icon = 'map';

        node
            .addInput(previousElements)
            .addControl(operation)
            .addControl(elements);
    }

    worker(nodeData, inputs, outputs) {
        super.worker(nodeData, inputs, outputs);
    }

}