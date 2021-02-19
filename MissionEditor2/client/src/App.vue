<template>
  <div id="rete-container" >
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

export default {
  name: 'App',
  async mounted() {
    let container = document.getElementById("rete");
    container.classList.add('custom-node-editor');
    
    let components = {
      constant: new NumComponent(),
      startup: new StartupComponent(),
      script: new ScriptComponent()
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

    var n1 = await components['constant'].createNode({num: 3});
    var startup = await components['startup'].createNode();
    var vanEscape = await components['script'].createNode({name:"Van escape"});

    startup.position = [80, 200];
    vanEscape.position = [900, 240]

    n1.position = [500, 400];

    editor.addNode(startup);
    editor.addNode(vanEscape)

    editor.addNode(n1);

    editor.connect(n1.outputs.get('num'), vanEscape.inputs.get('delay'));
    editor.connect(startup.outputs.get('startup'), vanEscape.inputs.get('previous_elements'));

    editor.on("process nodecreated noderemoved connectioncreated connectionremoved", async () => {
      await engine.abort();
      await engine.process(editor.toJSON());
    });    

    editor.view.resize();
    AreaPlugin.zoomAt(editor);

    editor.trigger('process');
  }
}
</script>

<style lang="sass">
@import './rete/vars'

$grid-size: 20px
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
    &.input-previous-elements
      path
        stroke: $socket-color
    &.output-number
      path
        stroke: $socket-color-number
</style>

