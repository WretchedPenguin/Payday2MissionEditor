import Rete from "rete";
import FieldOutput from "@/rete/io/outputs/FieldOutput";

export default class ConstantComponent extends Rete.Component {

    title;
    inputType;
    inputName;
    socket;
    key;
    icon;
    initial;

    constructor(key, title, socket, inputType, inputName, icon, path, initial) {
        super(title);
        this.key = key;
        this.title = title;
        this.socket = socket;
        this.inputType = inputType;
        this.inputName = inputName;
        this.icon = icon;
        this.path = path || ['Constants'];
        this.initial = initial;
    }

    builder(node) {
        let num = new FieldOutput(this.key, this.socket, {
            emitter: this.editor,
            type: this.inputType,
            name: this.inputName,
            inputLength: 9,
            initial: this.initial
        });

        node.icon = this.icon;
        node.path = this.path;

        node.addControl(num.field).addOutput(num);
    }

    worker(node, inputs, outputs) {
        outputs[this.key] = node.data[this.key];
    }
}