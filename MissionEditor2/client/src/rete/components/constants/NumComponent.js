import sockets from "@/rete/sockets";
import ConstantComponent from "@/rete/components/constants/ConstantComponent";

export default class NumComponent extends ConstantComponent {

    constructor() {
        super('num', "Number", sockets.number, 'number', 'Value', 'hash-key', 0);
    }
}