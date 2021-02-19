import Rete from "rete";
import VueNumControl from "./VueNumControl";

export default class FieldControl extends Rete.Control {

    constructor(key, options) {
        super(key);
        options.ikey = key;
        this.component = VueNumControl;
        this.props = options;
        this.visible = options.visible;
    }

    setValue(val) {
        this.vueContext.value = val;
    }
}