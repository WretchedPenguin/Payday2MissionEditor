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
import FieldOutput from "@/rete/io/outputs/FieldOutput";

export default class TimerComponent extends Rete.Component {

    constructor() {
        super("Timer");
        this.path = ['Timer'];
    }

    builder(node) {
        let name = new NameControl(this.editor);

        let unit = new FieldInput('unit', sockets.unit, {
            emitter: this.editor,
            name: "Timer unit",
            type: 'number'
        });
        
        let time = new FieldOutput('time', sockets.time, {
            emitter: this.editor,
            name: "Time (default)",
            append: 's',
            type: 'number'
        });

        node.icon = 'stopwatch';

        node
            .addControl(name)
            .addInput(unit)
            .addOutput(time)
            .addControl(time.field);
    }

    worker(nodeData, inputs, outputs) {
        var node = this.editor.nodes.find(n => n.id === nodeData.id);

        if (node) {
            node.inputs.get('unit').update(nodeData, inputs);
            // node.inputs.get('time').update(nodeData, inputs);
        }
    }
}