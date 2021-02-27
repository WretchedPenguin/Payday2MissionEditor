import Rete from "rete";
import sockets from "@/rete/sockets";
import NameControl from "@/rete/controls/NameControl";
import NextElementsOutput from "@/rete/io/outputs/NextElementsOutput";
import FieldInput from "@/rete/io/inputs/FieldInput";
import NamedComponent from "@/rete/components/NamedComponent";

export default class TimerTriggerComponent extends NamedComponent {
    
    constructor() {
        super("Timer trigger");
        this.path = ['Timer'];
    }

    builder(node) {
        super.builder(node);
        
        let time = new Rete.Input('time', 'Time to check', sockets.time);

        let equalTo = new FieldInput('equalTo', sockets.number, {
            emitter: this.editor,
            name: "Is equal to?",
            type: 'number',
            append: 's'
        });
        
        let nextElements = new NextElementsOutput()

        node.icon = 'stopwatch';

        node
            .addInput(time)
            .addInput(equalTo)
            .addOutput(nextElements);
    }

    worker(nodeData, inputs, outputs) {
        super.worker(nodeData, inputs, outputs);
        // var node = this.editor.nodes.find(n => n.id === nodeData.id);
        //
        // if (node) {
        //     node.inputs.get('time').update(nodeData, inputs);
        //     node.inputs.get('equalTo').update(nodeData, inputs);
        // }
    }
}