import Rete from "rete";

export default class FieldOutput extends Rete.Output {
    
    constructor(key, title, socket, multiConns) {
        super(key, title, socket, multiConns);
    }
    
    addControl(control){
        this.control = control;
    }
}