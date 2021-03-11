import Rete from "rete";

export default {
    number: new Rete.Socket("Number"),
    element: new Rete.Socket("Element"),
    toggle: new Rete.Socket("Toggle"),
    unit: new Rete.Socket("Unit"),
    time: new Rete.Socket("Time"),
    enemy: new Rete.Socket("Enemy"),
    enemyGroup: new Rete.Socket("EnemyGroup"),
    remove: new Rete.Socket("PreferredRemove"),
}