﻿import NamedComponent from "@/rete/components/NamedComponent";
import FieldControl from "@/rete/controls/FieldControl";
import Rete from "rete";
import sockets from "@/rete/sockets";
import TextControl from "@/rete/controls/TextControl";
import NumberControl from "@/rete/controls/NumberControl";
import BooleanControl from "@/rete/controls/BooleanControl";
import ListControl from "@/rete/controls/ListControl";

export default class SpawnEnemyGroup extends NamedComponent {

    constructor() {
        super("Spawn enemy group");
        this.path = ['Spawn']
    }

    builder(node) {
        super.builder(node);
        let preferred = new Rete.Input('preferred', 'Preferred', sockets.enemyGroup)
        let enemySpawns = new Rete.Output('elements', 'Elements', sockets.enemy);

        let amount = new NumberControl("amount", this.editor, "Amount", 0);
        let interval = new NumberControl("interval", this.editor, "Interval", 0);
        let ignoreDisabled = new BooleanControl("ignore_disabled", this.editor, "Ignore disabled", true);
        let spawnType = new TextControl('spawn_type', this.editor, "Spawn type", "ordered");
        let team = new TextControl('team', this.editor, "Team", "default");
        let spawnGroups = new ListControl('preferred_spawn_groups', {emitter: this.editor, visible: true,
            types: [
                {name: "Unit type", type: "text", key: "value"}
            ]})

        node.icon = 'police-car';

        node
            .addInput(preferred)
            .addControl(amount)
            .addControl(interval)
            .addControl(ignoreDisabled)
            .addControl(spawnType)
            .addControl(team)
            .addControl(spawnGroups)
            .addOutput(enemySpawns);
    }

    worker(nodeData, inputs, outputs) {
        super.worker(nodeData, inputs, outputs);
    }

}