import NamedComponent from "@/rete/components/NamedComponent";
import FieldControl from "@/rete/controls/FieldControl";
import Rete from "rete";
import sockets from "@/rete/sockets";
import TextControl from "@/rete/controls/TextControl";
import NumberControl from "@/rete/controls/NumberControl";
import BooleanControl from "@/rete/controls/BooleanControl";
import PreviousElementsInput from "@/rete/io/inputs/PreviousElementsInput";

export default class SpawnEnemy extends NamedComponent{

    constructor() {
        super("Spawn enemy");
        this.path = ['Spawn']
    }

    builder(node) {
        super.builder(node);
        let enemySpawnGroup = new Rete.Input('group', 'Spawn group', sockets.enemy);
        let previousElementsInput = new PreviousElementsInput();

        let accessibility = new TextControl('accessibility', this.editor, "Accessibility", "any");
        let amount = new NumberControl("amount", this.editor, "Amount", 0);
        let enemy = new TextControl("enemy", this.editor, "Enemy", "");
        let forcePickup = new TextControl('force_pickup', this.editor, "Force pickup", "none");
        let interval = new NumberControl("interval", this.editor, "Interval", 0);
        let participateToGroupAi = new BooleanControl("participate_to_group_ai", this.editor, "Participate to group ai", true);
        let spawnAction = new TextControl('spawn_action', this.editor, "Spawn action", "none");
        let team = new TextControl('team', this.editor, "Team", "default");
        let voice = new NumberControl("voice", this.editor, "Voice", 0);

        node.icon = 'police';

        node
            .addInput(enemySpawnGroup)
            .addInput(previousElementsInput)
            .addControl(accessibility)
            .addControl(amount)
            .addControl(enemy)
            .addControl(forcePickup)
            .addControl(interval)
            .addControl(participateToGroupAi)
            .addControl(spawnAction)
            .addControl(team)
            .addControl(voice);
    }

    worker(nodeData, inputs, outputs) {
        super.worker(nodeData, inputs, outputs);
    }

}