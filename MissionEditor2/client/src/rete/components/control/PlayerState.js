import NamedComponent from "@/rete/components/NamedComponent";
import Rete from "rete";
import sockets from "@/rete/sockets";
import PreviousElementsInput from "@/rete/io/inputs/PreviousElementsInput";
import TextControl from "@/rete/controls/TextControl";
import NextElementsOutput from "@/rete/io/outputs/NextElementsOutput";
import BooleanControl from "@/rete/controls/BooleanControl";

export default class PlayerState extends NamedComponent 
{
    constructor() {
        super("Player state");
        this.path = ['Control']
    }

    builder(node) {
        super.builder(node);
        node.icon = 'change';
        
        let previousElementsInput = new PreviousElementsInput();

        let event = new TextControl("state", this.editor, "State", "");
        let useInstigator = new BooleanControl("use_instigator", this.editor, "Instigator", false);
        
        node
            .addInput(previousElementsInput)
            .addControl(event)
            .addControl(useInstigator)
        ;
    }

    worker(nodeData, inputs, outputs) {
        super.worker(nodeData, inputs, outputs);
    }
}