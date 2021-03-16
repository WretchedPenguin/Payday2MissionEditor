import Rete from "rete";
import VueListControl from "@/rete/controls/VueListControl";

export default class ListControl extends Rete.Control {

    constructor(key, options) {
        super(key);
        options.ikey = key;
        this.component = VueListControl;
        this.props = options;
        this.visible = options.visible;
    }

    setValue(val) {
        //this.vueContext.value = val;
    }

    setChildReadonly(index, readonly) {
        //this.vueContext.$children[index].read_only = readonly;
    }

    setChildValue(index, value) {
        //this.vueContext.$children[index].value = value;
    }
}