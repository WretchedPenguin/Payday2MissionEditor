import sockets from "@/rete/sockets";
import GroupOutput from "@/rete/io/outputs/GroupOutput";

export default class ToggleOutput extends GroupOutput {
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
                    name: "Trigger times",
                    type: "number",
                    append: "x",
                    ikey: 'trigger_times'
                }
            ]
        });
    }
}