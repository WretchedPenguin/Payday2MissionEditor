export default class Prototype{
    
    static async addNodes(editor, components){

        var constant = await components['constant'].createNode({num: 3});
        var startup = await components['startup'].createNode();
        var vanEscape = await components['MissionScriptElement'].createNode({editor_name: "Van escape", enabled: true, base_delay: 5});
        var chopperEscape = await components['MissionScriptElement'].createNode({editor_name: "Chopper escape", enabled: false});
        var asset = await components['asset'].createNode({asset: "q_chopper_escape"});
        var enableChopperEscape = await components['toggle'].createNode({
            editor_name: "Enable chopper escape",
            enabled: true,
            trigger_times: 1, id: 200018
        });
        var unitRef = await components['unitRef'].createNode({unit: 100523});
        var timer = await components['timer'].createNode({time: 120});
        var timerTrigger = await components['timerTrigger'].createNode({equalTo: 0, editor_name: "On escape arrive"});
        var timerSet = await components['timerSet'].createNode({value: 180, editor_name: "Set chopper delay"});
        var group = await components['module'].createNode({module: 'Other logic'});

        var unitSequence = await components['ElementUnitSequence'].createNode({editor_name: "sequence"});
        var spawnEnemyGroup = await components['ElementSpawnEnemyGroup'].createNode({editor_name: "group"});

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
        unitSequence.position = [1375, 240];
        group.position = [500, -40];
        spawnEnemyGroup.position = [1750, 240];

        // editor.addNode(constant);
        // editor.addNode(startup);
        // editor.addNode(vanEscape);
        // editor.addNode(chopperEscape);
        // editor.addNode(asset);
        // editor.addNode(enableChopperEscape);
        // editor.addNode(unitRef);
        // editor.addNode(timer);
        // editor.addNode(timerTrigger);
        // editor.addNode(timerSet);
        // editor.addNode(unitSequence);
        // editor.addNode(group);
        editor.addNode(spawnEnemyGroup);

        // editor.connect(constant.outputs.get('num'), vanEscape.inputs.get('base_delay'));
        // editor.connect(constant.outputs.get('num'), chopperEscape.inputs.get('base_delay'));
        // editor.connect(startup.outputs.get('next_elements'), vanEscape.inputs.get('previous_elements'));
        // editor.connect(startup.outputs.get('next_elements'), chopperEscape.inputs.get('previous_elements'));
        // editor.connect(startup.outputs.get('next_elements'), group.inputs.get('Previous elements'));

        // editor.connect(asset.outputs.get('next_elements'), enableChopperEscape.inputs.get('previous_elements'));
        // editor.connect(enableChopperEscape.outputs.get('toggle'), chopperEscape.inputs.get('toggle'));
        // editor.connect(chopperEscape.outputs.get('next_elements'), timerSet.inputs.get('previous_elements'));
        //
        // editor.connect(unitRef.outputs.get('unit'), timer.inputs.get('unit'));
        // editor.connect(timer.outputs.get('time'), timerTrigger.inputs.get('time'));
    }
    
}