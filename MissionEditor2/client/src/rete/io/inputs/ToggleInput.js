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
                    ikey: 'enabled',
                    initial: true
                },
                {
                    name: "Trigger times",
                    type: "number",
                    append: "x",
                    ikey: 'trigger_times',
                    initial: 0
                }
            ]
        });
    }

    update(nodeData, node, inputs) {
        if(inputs['toggle'].length > 0) {
            this.control.setChildValue(1, inputs['toggle']);
            this.control.setChildReadonly(1, true);
        }else{
            this.control.setChildReadonly(1, false);
        }
        if (nodeData.data.enabled) {
            //node.vueContext.$el.firstChild.classList.remove("disabled");
        } else {
            //node.vueContext.$el.firstChild.classList.add("disabled");
        }
    }
}