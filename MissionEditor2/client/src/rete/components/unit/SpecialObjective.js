import NamedComponent from "@/rete/components/NamedComponent";
import Rete from "rete";
import sockets from "@/rete/sockets";
import TextControl from "@/rete/controls/TextControl";
import NumberControl from "@/rete/controls/NumberControl";
import BooleanControl from "@/rete/controls/BooleanControl";
import PreviousElementsInput from "@/rete/io/inputs/PreviousElementsInput";

export default class SpecialObjective extends NamedComponent{

    constructor() {
        super("Special objective");
        this.path = ['Unit']
    }

    builder(node) {
        super.builder(node);
        let previousElementsInput = new PreviousElementsInput();

        let access = new TextControl('SO_access', this.editor, "Access", "1073741823");
        let actionDurationMax = new NumberControl("action_duration_max", this.editor, "Max duration", 0);
        let actionDurationMin = new NumberControl("action_duration_min", this.editor, "Min duration", 0);
        let aiGroup = new TextControl("ai_group", this.editor, "AI group", "enemies");
        let alignPosition = new BooleanControl("align_position", this.editor, "Align position", true);
        let alignRotation = new BooleanControl("align_rotation", this.editor, "Align rotation", true);
        let attitude = new TextControl('attitude', this.editor, "Attitude", "avoid");
        let baseChance = new NumberControl("base_chance", this.editor, "Base chance", 0);
        let chanceInc = new NumberControl("chance_inc", this.editor, "Chance increment", 0);
        let baseDelay = new NumberControl("base_delay", this.editor, "Base delay", 0);
        let interactionVoice = new TextControl('interaction_voice', this.editor, "Voice", "none");
        let interruptDis = new NumberControl("interrupt_dis", this.editor, "Interrupt distance", 0);
        let interruptDmg = new NumberControl("interrupt_dmg", this.editor, "Interrupt damage", 0);
        let interval = new NumberControl("interval", this.editor, "Interval", 0);
        let isNavigationLink = new BooleanControl("is_navigation_link", this.editor, "Is nav link", true);
        let pathHaste = new TextControl('path_haste', this.editor, "Haste", "none");
        let pathStance = new TextControl('path_stance', this.editor, "Stance", "none");
        let pathStyle = new TextControl('path_style', this.editor, "Style", "destination");
        let pose = new TextControl('pose', this.editor, "Pose", "none");
        let action = new TextControl('SO_action', this.editor, "Action", "e_nl_climb_up_3_5m");
        

        node.icon = 'medal';
        node.path = this.path;

        node
            .addInput(previousElementsInput)
            .addControl(access)
            .addControl(actionDurationMax)
            .addControl(actionDurationMin)
            .addControl(aiGroup)
            .addControl(alignPosition)
            .addControl(alignRotation)
            .addControl(attitude)
            .addControl(baseChance)
            .addControl(baseDelay)
            .addControl(interactionVoice)
            .addControl(interruptDis)
            .addControl(interruptDmg)
            .addControl(interval)
            .addControl(isNavigationLink)
            .addControl(pathHaste)
            .addControl(pathStance)
            .addControl(pathStyle)
            .addControl(pose)
            .addControl(action)
        ;
    }

    worker(nodeData, inputs, outputs) {
        super.worker(nodeData, inputs, outputs);
    }

}