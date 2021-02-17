import Rete from "rete";
import VueNumControl from "./VueNumControl.vue"

export default class NumControl extends Rete.Control {

    constructor(emitter : any, key : any, readonly = false) {
        super(key);
        // @ts-ignore
        this.component = VueNumControl;
        // @ts-ignore
        this.props = { emitter, ikey: key, readonly };
    }

    setValue(val : Number) {
        // @ts-ignore
        this.vueContext.value = val;
    }
}