import Rete from "rete";
import GroupControl from "@/rete/controls/GroupControl";
import ControlInput from "@/rete/io/inputs/ControlInput";

export default class GroupInput extends ControlInput{

    constructor(key, socket, options, multiConn = false) {
        super(key, socket, GroupControl, options, multiConn);
    }

}
