import sockets from "@/rete/sockets";
import Rete from "rete";
import FieldControl from "@/rete/controls/FieldControl";

export default class OutputComponent extends Rete.Component {

    socket;
    name;
    title;

    constructor(name, title, socket) {
        super(name);
        this.name = name;
        this.title = title;
        this.socket = socket;
        this.module = {
            nodeType: 'output',
            socket: socket
        }
        this.path = ['Groups', 'Outputs'];
    }

    builder(node) {
        var input = new Rete.Input('input', this.title, this.socket);
        var ctrl = new FieldControl('name', {
            emitter: this.editor,
            name: 'Name',
            visible: true,
            placeholder: 'Enter name to connect',
            inputLength: 9
        });

        node
            .addControl(ctrl)
            .addInput(input);
    }

    worker(nodeData, inputs, outputs) {
    }
}