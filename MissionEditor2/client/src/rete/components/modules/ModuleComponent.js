import { Component } from 'rete';
import FieldControl from "@/rete/controls/FieldControl";

export class ModuleComponent extends Component {

    constructor() {
        super("Group");
        this.module = {
            nodeType: 'module'
        }
        this.path = ['Groups'];
    }

    builder(node) {
        node.icon = 'modules';
        
        var ctrl = new FieldControl('module', {emitter: this.editor, visible: true});
        ctrl.onChange = async () => {
            this.updateModuleSockets(node);
            await node.update();
        }
        node
            .addControl(ctrl);
    }
    
    change(node, item) {
        console.log(node);
        node.data.module = item;
        this.editor.trigger('process');
    }
}