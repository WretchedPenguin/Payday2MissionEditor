import FieldControl from "@/rete/controls/FieldControl";

export default class BooleanControl extends FieldControl {

    constructor(key, emitter, name, initial) {
        super(key, {emitter, visible: true, type: 'checkbox', name, initial});
    }
}