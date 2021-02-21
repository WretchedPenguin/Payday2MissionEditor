import Rete from "rete";
import sockets from "../sockets";
import NextElementsOutput from "@/rete/io/outputs/NextElementsOutput";
import FieldOutput from "@/rete/io/outputs/FieldOutput";
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
        
        node
            .addControl(asset)
            .addOutput(out1);
    }
    worker(node, inputs, outputs) {
    }
}