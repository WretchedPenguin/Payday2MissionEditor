import sockets from "@/rete/sockets";
import ConstantComponent from "@/rete/components/constants/ConstantComponent";

export default class UnitRefComponent extends ConstantComponent {

    constructor() {
        super('unit', "Unit Ref", sockets.unit, 'number', 'Unit ID', 'object');
    }
}