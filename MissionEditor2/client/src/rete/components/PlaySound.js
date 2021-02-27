import NamedComponent from "@/rete/components/NamedComponent";
import PreviousElementsInput from "@/rete/io/inputs/PreviousElementsInput";
import FieldInput from "@/rete/io/inputs/FieldInput";
import sockets from "@/rete/sockets";
import ToggleInput from "@/rete/io/inputs/ToggleInput";
import FieldControl from "@/rete/controls/FieldControl";
import TextControl from "@/rete/controls/TextControl";
import BooleanControl from "@/rete/controls/BooleanControl";

export default class PlaySound extends NamedComponent{
    
    constructor() {
        super("Play sound");
    }


    builder(node) {
        super.builder(node);
        let previousElements = new PreviousElementsInput();

        let sound = new TextControl("sound_event", this.editor, "Sound", "");
        let useInstigator = new BooleanControl("use_instigator", this.editor, "Use instigator", true);

        node.icon = 'volume';

        node
            .addInput(previousElements)
            .addControl(sound)
            .addControl(useInstigator)
        ;
    }

    worker(nodeData, inputs, outputs) {
        super.worker(nodeData, inputs, outputs);
    }
    
}