import NamedComponent from "@/rete/components/NamedComponent";
import FieldControl from "@/rete/controls/FieldControl";
import Rete from "rete";
import sockets from "@/rete/sockets";
import TextControl from "@/rete/controls/TextControl";
import NumberControl from "@/rete/controls/NumberControl";
import BooleanControl from "@/rete/controls/BooleanControl";
import ListControl from "@/rete/controls/ListControl";
import PreviousElementsInput from "@/rete/io/inputs/PreviousElementsInput";

export default class EnemyPreferredAdd extends NamedComponent {

    constructor() {
        super("Enemy preferred add");
        this.path = ['Spawn']
    }

    builder(node) {
        super.builder(node);
        let previousElements = new PreviousElementsInput();
        let preferred = new Rete.Input('elements', 'Remove', sockets.preferredRemove)
        let spawnPoints = new Rete.Output('spawn_points', 'Spawn points', sockets.enemy);
        let spawnGroups = new Rete.Output('spawn_groups', 'Spawn groups', sockets.enemyGroup);

        node.icon = 'police-station';

        node
            .addInput(previousElements)
            .addInput(preferred)
            .addOutput(spawnPoints)
            .addOutput(spawnGroups)
        ;
    }

    worker(nodeData, inputs, outputs) {
        super.worker(nodeData, inputs, outputs);
    }

}