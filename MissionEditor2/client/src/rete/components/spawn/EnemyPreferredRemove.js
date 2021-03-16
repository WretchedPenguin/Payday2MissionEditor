import NamedComponent from "@/rete/components/NamedComponent";
import FieldControl from "@/rete/controls/FieldControl";
import Rete, {Output} from "rete";
import sockets from "@/rete/sockets";
import TextControl from "@/rete/controls/TextControl";
import NumberControl from "@/rete/controls/NumberControl";
import BooleanControl from "@/rete/controls/BooleanControl";
import ListControl from "@/rete/controls/ListControl";

export default class EnemyPreferredRemove extends NamedComponent {

    constructor() {
        super("Enemy preferred remove");
        this.path = ['Spawn']
    }

    builder(node) {
        super.builder(node);
        let preferred = new Rete.Output('elements', 'Remove', sockets.preferredRemove)

        node.icon = 'police-station';

        node
            .addOutput(preferred);
    }

    worker(nodeData, inputs, outputs) {
        super.worker(nodeData, inputs, outputs);
    }

}