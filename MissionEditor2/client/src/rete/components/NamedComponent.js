import Rete from "rete";
import NameControl from "@/rete/controls/NameControl";

export default class NamedComponent extends Rete.Component{

    constructor(name) {
        super(name);
    }

    builder(node) {
        let name = new NameControl(this.editor);
        node.addControl(name);
    }

    worker(nodeData, inputs, outputs) {
        var node = this.editor.nodes.find(n => n.id === nodeData.id);

        if (node) {
            node.controls.get('editor_name').setValue(node.data.editor_name);
        }
    }
}