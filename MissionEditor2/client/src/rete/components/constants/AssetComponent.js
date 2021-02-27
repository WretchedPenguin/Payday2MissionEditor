import Rete from "rete";
import NextElementsOutput from "@/rete/io/outputs/NextElementsOutput";
import FieldControl from "@/rete/controls/FieldControl";

export default class AssetComponent extends Rete.Component {

    constructor() {
        super("Asset");
        this.path = ["Constants"];
    }

    builder(node) {
        let out1 = new NextElementsOutput('On purchase');
        let asset = new FieldControl('asset', {emitter: this.editor, visible: true, name: "Asset", inputLength: 10});        
        
        node.icon = 'money';
        node.path = this.path;
        
        node
            .addControl(asset)
            .addOutput(out1);
    }
    worker(node, inputs, outputs) {
    }
}