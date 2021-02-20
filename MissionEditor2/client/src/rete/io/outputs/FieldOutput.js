import Rete from "rete";
import FieldControl from "@/rete/controls/FieldControl";
import ControlOutput from "@/rete/io/outputs/ControlOutput";

export default class FieldOutput extends ControlOutput {
        
    constructor(key, socket, options, multiConn = true) {
        super(key, socket, FieldControl, options, multiConn);
    }
}