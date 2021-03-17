import NamedComponent from "@/rete/components/NamedComponent";
import Rete from "rete";
import sockets from "@/rete/sockets";
import PreviousElementsInput from "@/rete/io/inputs/PreviousElementsInput";
import TextControl from "@/rete/controls/TextControl";
import NextElementsOutput from "@/rete/io/outputs/NextElementsOutput";

export default class AiGlobalEvent extends NamedComponent 
{
    constructor() {
        super("AI Global event");
        this.path = ['Control']
    }

    builder(node) {
        super.builder(node);
        node.icon = 'artificial-intelligence';
        
        let previousElementsInput = new PreviousElementsInput();
        let nextElementsOutput = new NextElementsOutput();

        let event = new TextControl("AI_event", this.editor, "Event", "");
        let blame = new TextControl("blame", this.editor, "Blame", "");
        let waveMode = new TextControl("wave_mode", this.editor, "Wave mode", "");
        
        node
            .addInput(previousElementsInput)
            .addControl(event)
            .addControl(blame)
            .addControl(waveMode)
            .addOutput(nextElementsOutput)
        ;
    }

    worker(nodeData, inputs, outputs) {
        super.worker(nodeData, inputs, outputs);
    }
}