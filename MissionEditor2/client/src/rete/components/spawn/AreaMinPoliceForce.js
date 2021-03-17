import NamedComponent from "@/rete/components/NamedComponent";
import Rete from "rete";
import sockets from "@/rete/sockets";
import PreviousElementsInput from "@/rete/io/inputs/PreviousElementsInput";

export default class AreaMinPoliceForce extends NamedComponent 
{
    constructor() {
        super("Area min police force");
        this.path = ['Spawn']
    }

    builder(node) {
        super.builder(node);
        let previousElementsInput = new PreviousElementsInput();

        node.icon = 'police-swat';

        node
            .addInput(previousElementsInput);
    }

    worker(nodeData, inputs, outputs) {
        super.worker(nodeData, inputs, outputs);
    }
}