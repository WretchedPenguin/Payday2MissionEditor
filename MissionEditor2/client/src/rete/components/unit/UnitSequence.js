import Rete from "rete";
import NextElementsOutput from "@/rete/io/outputs/NextElementsOutput";
import PreviousElementsInput from "@/rete/io/inputs/PreviousElementsInput";
import NumberControl from "@/rete/controls/NumberControl";
import NamedComponent from "@/rete/components/NamedComponent";
import ListControl from "@/rete/controls/ListControl";

export default class UnitSequence extends NamedComponent {

    constructor() {
        super("Unit sequence");
        this.path = ['Unit'];
    }

    builder(node) {
        super.builder(node);
        let previousElementsInput = new PreviousElementsInput();
        let nextElementsOutput = new NextElementsOutput();

        node.icon = 'storyboard';
        node.path = this.path;

        let triggerList = new ListControl('trigger_list', {
            emitter: this.editor,
            visible: true,
            types: [
                {name: "Unit", type: "number", key: "notify_unit_id"},
                {name: "Sequence", type: "text", key: "notify_unit_sequence"},
                {name: "Time", type: "number", key: "time"},
            ], 
            initial: [
                {
                    notify_unit_id: 100000,
                    notify_unit_sequence: "some_sequence",
                    time: 3
                },
                {
                    notify_unit_id: 100001,
                    notify_unit_sequence: "other_sequence",
                    time: 5
                },
            ]
        })

        node
            .addInput(previousElementsInput)
            .addOutput(nextElementsOutput)
            .addControl(triggerList)
        ;
    }

    worker(node, inputs, outputs) {
        super.worker(node, inputs, outputs);
    }
}