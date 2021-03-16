import NamedComponent from "@/rete/components/NamedComponent";
import FieldControl from "@/rete/controls/FieldControl";
import Rete from "rete";
import sockets from "@/rete/sockets";
import TextControl from "@/rete/controls/TextControl";
import NumberControl from "@/rete/controls/NumberControl";
import BooleanControl from "@/rete/controls/BooleanControl";
import ListControl from "@/rete/controls/ListControl";
import PreviousElementsInput from "@/rete/io/inputs/PreviousElementsInput";

export default class Operator extends NamedComponent {

    constructor() {
        super("Operator");
        this.path = ['Control']
    }

    builder(node) {
        super.builder(node);
        let previousElements = new PreviousElementsInput();
        let elements = new Rete.Output('elements', 'Elements', sockets.operator);
        let operation = new TextControl('operation', this.editor, 'Operation')

        node.icon = 'function';

        node
            .addInput(previousElements)
            .addOutput(elements)
            .addControl(operation);
    }

    worker(nodeData, inputs, outputs) {
        super.worker(nodeData, inputs, outputs);
    }

}