import FieldControl from "@/rete/controls/FieldControl";

export default class NameControl extends FieldControl {

    constructor(emitter) {
        let key = 'editor_name';
        super(key, {emitter: emitter, visible: true, placeholder:'Enter name'});
    }
}