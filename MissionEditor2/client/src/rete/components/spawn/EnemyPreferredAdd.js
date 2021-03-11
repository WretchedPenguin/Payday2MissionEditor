import NamedComponent from "@/rete/components/NamedComponent";
import FieldControl from "@/rete/controls/FieldControl";
import Rete from "rete";
import sockets from "@/rete/sockets";
import TextControl from "@/rete/controls/TextControl";
import NumberControl from "@/rete/controls/NumberControl";
import BooleanControl from "@/rete/controls/BooleanControl";
import ListControl from "@/rete/controls/ListControl";

export default class EnemyPreferredAdd extends NamedComponent {

    constructor() {
        super("Enemy preferred add");
        this.path = ['Spawn']
    }

    builder(node) {
        super.builder(node);
        let preferred = new Rete.Input('remove', 'Remove', sockets.remove)
        let spawnPoints = new Rete.Output('enemies', 'Spawn points', sockets.enemy);
        let spawnGroups = new Rete.Output('groups', 'Spawn groups', sockets.enemyGroup);

        node.icon = 'police-station';

        node
            .addInput(preferred)
            .addOutput(spawnPoints)
            .addOutput(spawnGroups);
    }

    worker(nodeData, inputs, outputs) {
        super.worker(nodeData, inputs, outputs);
    }

}