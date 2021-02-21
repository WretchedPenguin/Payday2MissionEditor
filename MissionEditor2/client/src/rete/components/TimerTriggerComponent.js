import Rete from "rete";
import sockets from "../sockets";
import GroupControl from "@/rete/controls/GroupControl";
import NameControl from "@/rete/controls/NameControl";
import PreviousElementsInput from "@/rete/io/inputs/PreviousElementsInput";
import NextElementsOutput from "@/rete/io/outputs/NextElementsOutput";
import FieldInput from "@/rete/io/inputs/FieldInput";
import FieldControl from "@/rete/controls/FieldControl";
import GroupInput from "@/rete/io/inputs/GroupInput";
import ToggleInput from "@/rete/io/inputs/ToggleInput";

export default class TimerTriggerComponent extends Rete.Component {

    constructor() {
        super("Timer trigger");
        this.path = ['Timer'];
    }

    builder(node) {
        let name = new NameControl(this.editor);
        
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
            .addControl(name)
            .addInput(time)
            .addInput(equalTo)
            .addOutput(nextElements);
    }

    worker(nodeData, inputs, outputs) {
        // var node = this.editor.nodes.find(n => n.id === nodeData.id);
        //
        // if (node) {
        //     node.inputs.get('time').update(nodeData, inputs);
        //     node.inputs.get('equalTo').update(nodeData, inputs);
        // }
    }
}