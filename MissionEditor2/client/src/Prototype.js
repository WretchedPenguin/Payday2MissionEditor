export default class Prototype{
    
    static async addNodes(editor, components){

        var constant = await components['constant'].createNode({num: 3});
        var startup = await components['startup'].createNode();
        var vanEscape = await components['script'].createNode({name: "Van escape", enabled: true, delay: 5});
        var chopperEscape = await components['script'].createNode({name: "Chopper escape", enabled: false});
        var asset = await components['asset'].createNode({asset: "q_chopper_escape"});
        var enableChopperEscape = await components['toggle'].createNode({
            name: "Enable chopper escape",
            enabled: true,
            triggerCount: 1
        });
        var unitRef = await components['unitRef'].createNode({unit: 100523});
        var timer = await components['timer'].createNode({time: 120});
        var timerTrigger = await components['timerTrigger'].createNode({equalTo: 0, name: "On escape arrive"});
        var timerSet = await components['timerSet'].createNode({value: 180, name: "Set chopper delay"});
        var group = await components['module'].createNode({module: 'Other logic'});

        var rest = await components['script'].createNode({name: "Rest of the heist", enabled: true, delay: 0});

        constant.position = [500, 400];
        startup.position = [80, 200];
        vanEscape.position = [900, 240];
        chopperEscape.position = [900, 600];
        asset.position = [100, 500];
        enableChopperEscape.position = [480, 640];
        unitRef.position = [980, -70];
        timer.position = [1400, -20];
        timerTrigger.position = [1800, 30];
        timerSet.position = [1400, 650];
        // rest.position = [5000, 240];
        group.position = [500, -40];

        editor.addNode(constant);
        editor.addNode(startup);
        editor.addNode(vanEscape);
        editor.addNode(chopperEscape);
        editor.addNode(asset);
        editor.addNode(enableChopperEscape);
        editor.addNode(unitRef);
        editor.addNode(timer);
        editor.addNode(timerTrigger);
        editor.addNode(timerSet);
        // editor.addNode(rest);
        editor.addNode(group);

        editor.connect(constant.outputs.get('num'), vanEscape.inputs.get('delay'));
        editor.connect(constant.outputs.get('num'), chopperEscape.inputs.get('delay'));
        editor.connect(startup.outputs.get('next_elements'), vanEscape.inputs.get('previous_elements'));
        editor.connect(startup.outputs.get('next_elements'), chopperEscape.inputs.get('previous_elements'));
        // editor.connect(vanEscape.outputs.get('next_elements'), rest.inputs.get('previous_elements'));

        editor.connect(asset.outputs.get('next_elements'), enableChopperEscape.inputs.get('previous_elements'));
        editor.connect(enableChopperEscape.outputs.get('toggle'), chopperEscape.inputs.get('toggle'));
        editor.connect(chopperEscape.outputs.get('next_elements'), timerSet.inputs.get('previous_elements'));

        editor.connect(unitRef.outputs.get('unit'), timer.inputs.get('unit'));
        editor.connect(timer.outputs.get('time'), timerTrigger.inputs.get('time'));
        // editor.connect(timerTrigger.outputs.get('next_elements'), rest.inputs.get('previous_elements'));
    }
    
}