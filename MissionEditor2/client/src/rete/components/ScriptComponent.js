import Rete from "rete";
import sockets from "../sockets";
import FieldControl from "@/rete/controls/FieldControl";

export default class ScriptComponent extends Rete.Component {

    delayField = {};
    
    constructor() {
        super("Script");
    }

    builder(node) {
        let name = new FieldControl('name', {emitter: this.editor, visible: true});
        let previousElements = new Rete.Input('previous_elements', 'Previous elements', sockets.elementSocket, true);
        let nextElements = new Rete.Output('next_elements', "Next elements", sockets.elementSocket);

        this.delayField = new FieldControl('delay', {emitter: this.editor, name: "Delay", append:'s'});
        let delay = new Rete.Input('delay', "Delay", sockets.numSocket);

        delay.addControl(this.delayField);

        node.titleStyle = "background-color: #A9D18E";

        node
            .addControl(name)
            .addInput(previousElements)
            .addInput(delay)
            .addOutput(nextElements);
    }

    worker(node, inputs, outputs) {
        var delay = inputs['delay'].length ? inputs['delay'][0] : node.data.delay;

        this.delayField.setValue(delay);
    }
}