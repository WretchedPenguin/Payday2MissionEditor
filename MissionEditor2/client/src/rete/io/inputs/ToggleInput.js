import GroupInput from "@/rete/io/inputs/GroupInput";
import sockets from "@/rete/sockets";

export default class ToggleInput extends GroupInput {
    constructor(emitter) {
        super('toggle', sockets.toggle, {
            name: 'Toggle',
            emitter: emitter,
            fields: [
                {
                    name: "Enabled",
                    type: 'checkbox',
                    ikey: 'enabled'
                },
                {
                    name: "Trigger count",
                    type: "number",
                    append: "x",
                    ikey: 'triggerCount'
                }
            ]
        });
    }

    update(nodeData, node, inputs) {
        this.control.setChildValue(1, inputs['toggle']);        
        this.control.setChildReadonly(1, true);        
        if (nodeData.data.enabled) {
            node.vueContext.$el.classList.remove("disabled");
        } else {
            node.vueContext.$el.classList.add("disabled");
        }
    }
}