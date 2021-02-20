<template>
  <div id="rete-container">
    <div id="rete"></div>
  </div>
</template>

<script>
import Rete from "rete";
import ConnectionPlugin from "rete-connection-plugin";
import VueRenderPlugin from "rete-vue-render-plugin";
import NumComponent from "./rete/components/NumComponent";
import CustomNode from "@/rete/renderer/CustomNode";
import StartupComponent from "./rete/components/StartupComponent";
import ScriptComponent from "./rete/components/ScriptComponent";
import AreaPlugin from 'rete-area-plugin';
import AssetComponent from "@/rete/components/AssetComponent";
import ToggleComponent from "@/rete/components/ToggleComponent";
import UnitRefComponent from "@/rete/components/UnitRefComponent";
import TimerComponent from "@/rete/components/TimerComponent";
import TimerTriggerComponent from "@/rete/components/TimerTriggerComponent";
import TimerSetComponent from "@/rete/components/TimerSetComponent";

export default {
  name: 'App',
  async mounted() {
    let container = document.getElementById("rete");
    container.classList.add('custom-node-editor');

    let components = {
      constant: new NumComponent(),
      startup: new StartupComponent(),
      script: new ScriptComponent(),
      asset: new AssetComponent(),
      toggle: new ToggleComponent(),
      unitRef: new UnitRefComponent(),
      timer: new TimerComponent(),
      timerTrigger: new TimerTriggerComponent(),
      timerSet: new TimerSetComponent()
    };

    let editor = new Rete.NodeEditor('demo@0.1.0', container);

    const background = document.createElement('div');
    background.classList = 'background';

    editor.use(ConnectionPlugin);
    editor.use(VueRenderPlugin, {
      component: CustomNode
    });
    editor.use(AreaPlugin, {background});


    var engine = new Rete.Engine('demo@0.1.0');

    for (var k in components) {
      var v = components[k];
      editor.register(v);
      engine.register(v);
    }

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
    rest.position = [5000, 240];

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
    editor.addNode(rest);

    editor.connect(constant.outputs.get('num'), vanEscape.inputs.get('delay'));
    editor.connect(constant.outputs.get('num'), chopperEscape.inputs.get('delay'));
    editor.connect(startup.outputs.get('next_elements'), vanEscape.inputs.get('previous_elements'));
    editor.connect(startup.outputs.get('next_elements'), chopperEscape.inputs.get('previous_elements'));
    editor.connect(vanEscape.outputs.get('next_elements'), rest.inputs.get('previous_elements'));

    editor.connect(asset.outputs.get('next_elements'), enableChopperEscape.inputs.get('previous_elements'));
    editor.connect(enableChopperEscape.outputs.get('toggle'), chopperEscape.inputs.get('toggle'));
    editor.connect(chopperEscape.outputs.get('next_elements'), timerSet.inputs.get('previous_elements'));

    editor.connect(unitRef.outputs.get('unit'), timer.inputs.get('unit'));
    editor.connect(timer.outputs.get('time'), timerTrigger.inputs.get('time'));
    editor.connect(timerTrigger.outputs.get('next_elements'), rest.inputs.get('previous_elements'));

    editor.on("process nodecreated noderemoved connectioncreated connectionremoved", async () => {
      await engine.abort();
      await engine.process(editor.toJSON());
    });
    let lastClass;
    editor.on("connectionpick", io => {
      let el = $('#rete > div > div:first-child');
      el.removeClass(lastClass);
      el.addClass(io.socket.name);
      lastClass = io.socket.name;
    });

    editor.view.resize();
    AreaPlugin.zoomAt(editor);
    editor.trigger('process');
  }
}
</script>

<style lang="sass">
@import './rete/vars'

$grid-size: 50px
$grid-color: #363636
$dark-color: darken($grid-color, 10%)
$th: 0.008

#rete-container
  height: 100%
  width: 100%

@function line($dir, $t, $w, $color)
  $start: $grid-size * $t - $w * $grid-size
  $end: $grid-size * $t + $w * $grid-size
  @return linear-gradient(to $dir, transparent $start, $color $start, $color $end, transparent $end)

@function lines($dir)
  @return line($dir, 0.5, $th * 2, $grid-color), line($dir, 0.25, $th, $grid-color), line($dir, 0.75, $th, $grid-color), line($dir, 1, $th * 2, $grid-color)

.custom-node-editor
  .background
    z-index: -5
    background-size: $grid-size $grid-size
    background-image: line(right, 0.5, $th * 3, $dark-color), line(bottom, 0.5, $th * 3, $dark-color), lines(right), lines(bottom)
    background-color: darken($grid-color, 6%)

  *
    box-sizing: border-box

  .connection
    path
      fill: none
      stroke: #eee
      stroke-width: 2px
      pointer-events: none

      &.active
        stroke: #aaa

    &.socket-input-element
      path
        stroke: $socket-color

    &.socket-output-number
      path
        stroke: $socket-color-number

    &.socket-input-toggle
      path
        stroke: $socket-color-toggle

    &.socket-input-time
      path
        stroke: $socket-color-time

  .element > .connection > path
    stroke: $socket-color

  .unit-ref > .connection > path,
  .number > .connection > path
    stroke: $socket-color-number

  .toggle > .connection > path
    stroke: $socket-color-toggle

  .time > .connection > path
    stroke: $socket-color-time
</style>

