import NamedComponent from "@/rete/components/NamedComponent";
import PreviousElementsInput from "@/rete/io/inputs/PreviousElementsInput";
import FieldInput from "@/rete/io/inputs/FieldInput";
import sockets from "@/rete/sockets";
import ToggleInput from "@/rete/io/inputs/ToggleInput";
import FieldControl from "@/rete/controls/FieldControl";

export default class SpawnPlayer extends NamedComponent{
    
    constructor() {
        super("Spawn player");
        this.path = ['Spawn']
    }


    builder(node) {
        super.builder(node);
        let previousElements = new PreviousElementsInput();
        
        let state = new FieldControl('state', {
            emitter: this.editor,
            name: "State",
            type: 'text',
            initial: 'standard',
            visible: true
        });

        node.icon = 'thief';

        node
            .addInput(previousElements)
            .addControl(state);
    }

    worker(nodeData, inputs, outputs) {
        super.worker(nodeData, inputs, outputs);
    }
    
}