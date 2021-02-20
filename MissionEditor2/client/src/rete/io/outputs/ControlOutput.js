import Rete from "rete";

export default class ControlOutput extends Rete.Output{
    
    field;
    
    constructor(key, socket, control, options, multiConn = false) {
        super(key, options.name, socket, multiConn);

        this.field = new control(key, options);
        this.addControl(this.field);
    }
    
    addControl(control){
        this.control = control;
    }
}