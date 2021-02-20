import Rete from "rete";
import sockets from "@/rete/sockets";

export default class NextElementsOutput extends Rete.Output {
    constructor(title) {
        super('next_elements', title ? title : "Next elements", sockets.element);
    }
}