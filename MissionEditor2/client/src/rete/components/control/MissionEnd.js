import NamedComponent from "@/rete/components/NamedComponent";
import PreviousElementsInput from "@/rete/io/inputs/PreviousElementsInput";
import TextControl from "@/rete/controls/TextControl";

export default class MissionEnd extends NamedComponent {

    constructor() {
        super("Mission end");
        this.path = ['Control'];
    }

    builder(node) {
        let previousElements = new PreviousElementsInput();
        
        node.icon = 'finish';
        node.path = this.path;
        
        let state = new TextControl('state', this.editor, 'State', 'success')
        
        node
            .addInput(previousElements)
            .addControl(state)
        ;
    }

    worker(node, inputs, outputs) {
    }
}