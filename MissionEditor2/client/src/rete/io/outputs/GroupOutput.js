import ControlOutput from "@/rete/io/outputs/ControlOutput";
import GroupControl from "@/rete/controls/GroupControl";

export default class GroupOutput extends ControlOutput {
    constructor(key, socket, options, multiConn = true) {
        super(key, socket, GroupControl, options, multiConn);
    }
}