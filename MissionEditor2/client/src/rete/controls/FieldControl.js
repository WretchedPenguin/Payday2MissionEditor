import Rete from "rete";
import VueFieldControl from "./VueFieldControl";

export default class FieldControl extends Rete.Control {

    constructor(key, options) {
        super(key);
        options.ikey = key;
        options.change = () => this.onChange()
        this.component = VueFieldControl;
        this.props = options;
        this.visible = options.visible;
    }

    setValue(val) {
        //this.vueContext.value = val;
    }
    
    setReadonly(readonly){
        //this.vueContext.read_only = readonly;
    }

    onChange() {}
}