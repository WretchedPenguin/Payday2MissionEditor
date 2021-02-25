import Rete from "rete";
import FieldControl from "@/rete/controls/FieldControl";

export default class ControlInput extends Rete.Input{
    
    constructor(key, socket, control, options, multiConn = false) {
        super(key, options.name, socket, multiConn);

        let field = new control(key, options);
        this.addControl(field);
    }

    update(nodeData, inputs, key){
        key = key ? key : this.key;
        var hasInput = !!inputs[key].length;
        var input = hasInput ? inputs[key][0] : nodeData.data[key];
        
        this.control.setValue(input);
        this.control.setReadonly(hasInput);
    }

}
