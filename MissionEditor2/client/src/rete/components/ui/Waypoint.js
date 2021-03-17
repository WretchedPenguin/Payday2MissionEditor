import Rete from "rete";
import NextElementsOutput from "@/rete/io/outputs/NextElementsOutput";
import PreviousElementsInput from "@/rete/io/inputs/PreviousElementsInput";
import NumberControl from "@/rete/controls/NumberControl";
import TextControl from "@/rete/controls/TextControl";
import BooleanControl from "@/rete/controls/BooleanControl";
import NamedComponent from "@/rete/components/NamedComponent";
import ListControl from "@/rete/controls/ListControl";
import sockets from "@/rete/sockets";

export default class Waypoint extends NamedComponent {

    constructor() {
        super("Waypoint");
        this.path = ['UI'];
    }

    builder(node) {
        super.builder(node);
        node.icon = 'maps-and-flags';
        node.path = this.path;
        
        let previousElementsInput = new PreviousElementsInput();

        let icon = new TextControl("icon", this.editor, "Icon", "");
        let civilian = new BooleanControl("only_in_civilian", this.editor, "Only in civilian", false);
        let elements = new Rete.Input('elements', 'Operators', sockets.operator);
        
        node
            .addInput(previousElementsInput)
            .addControl(icon)
            .addControl(civilian)
            .addInput(elements)
        ;
    }

    worker(node, inputs, outputs) {
        super.worker(node, inputs, outputs);
    }
}