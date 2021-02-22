import sockets from "@/rete/sockets";
import Rete from "rete";
import FieldControl from "@/rete/controls/FieldControl";

export default class InputComponent extends Rete.Component {

    socket;
    name;
    title;

    constructor(name, title, socket) {
        super(name);
        this.name = name;
        this.title = title;
        this.socket = socket;
        this.module = {
            nodeType: 'input',
            socket: socket
        }
        this.path = ['Groups', 'Inputs'];
    }

    builder(node) {
        var out = new Rete.Output('output', this.title, this.socket);
        var ctrl = new FieldControl('name', {
            emitter: this.editor, 
            name: 'Name', 
            visible: true,
            placeholder: 'Enter name to connect',
            inputLength: 9
        });

        node
            .addControl(ctrl)
            .addOutput(out);
    }

    worker(nodeData, inputs, outputs) {
    }
}