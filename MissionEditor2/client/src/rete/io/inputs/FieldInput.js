import Rete from "rete";
import FieldControl from "@/rete/controls/FieldControl";
import ControlInput from "@/rete/io/inputs/ControlInput";

export default class FieldInput extends ControlInput{
        
    constructor(key, socket, options, multiConn = false) {
        super(key, socket, FieldControl, options, multiConn);
    }
        
}
