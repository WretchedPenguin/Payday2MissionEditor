import FieldControl from "@/rete/controls/FieldControl";

export default class TextControl extends FieldControl {

    constructor(key, emitter, name, initial) {
        super(key, {emitter, visible: true, type: 'text', placeholder:'Enter value', name, initial});
    }
}