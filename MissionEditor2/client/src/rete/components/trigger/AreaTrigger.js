import NamedComponent from "@/rete/components/NamedComponent";
import FieldControl from "@/rete/controls/FieldControl";
import Rete from "rete";
import sockets from "@/rete/sockets";
import TextControl from "@/rete/controls/TextControl";
import NumberControl from "@/rete/controls/NumberControl";
import BooleanControl from "@/rete/controls/BooleanControl";
import NextElementsOutput from "@/rete/io/outputs/NextElementsOutput";

export default class AreaTrigger extends NamedComponent{

    constructor() {
        super("Area trigger");
        this.path = ['Trigger']
    }

    builder(node) {
        super.builder(node);

        var onTriggered = new NextElementsOutput('On triggered');
        
        let amount = new NumberControl("amount", this.editor, "Amount", 0);
        let depth = new NumberControl("depth", this.editor, "Depth", 0);
        let width = new NumberControl("width", this.editor, "Width", 0);
        let height = new NumberControl("height", this.editor, "Height", 0);
        let instigator = new TextControl("instigator", this.editor, "Instigator", "player");
        let interval = new NumberControl("interval", this.editor, "Interval", 0);
        let shapeType = new TextControl("shape_type", this.editor, "Shape", "box");
        let triggerOn = new TextControl("trigger_on", this.editor, "Trigger on", "while_inside");
        let triggerTimes =  new NumberControl("trigger_times", this.editor, "Trigger times", 0);

        node.icon = 'cube';

        node
            .addOutput(onTriggered)
            .addControl(amount)
            .addControl(depth)
            .addControl(width)
            .addControl(height)
            .addControl(instigator)
            .addControl(interval)
            .addControl(shapeType)
            .addControl(triggerOn)
            .addControl(triggerTimes);
    }

    worker(nodeData, inputs, outputs) {
        super.worker(nodeData, inputs, outputs);
    }

}