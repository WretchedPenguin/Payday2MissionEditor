import Rete from "rete";
import sockets from "@/rete/sockets";

export default class PreviousElementsInput extends Rete.Input{
    constructor(title) {
        super('previous_elements', title ? title : 'Previous elements', sockets.element, true);
    }
}