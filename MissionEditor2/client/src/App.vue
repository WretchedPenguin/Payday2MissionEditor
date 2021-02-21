<template>
  <div id="rete-container">
    <div id="rete">
      <GroupList :editor="editor" :modules="modules" :resize="resize"></GroupList>
    </div>
  </div>
</template>

<script>
import Rete from "rete";
import ConnectionPlugin from "rete-connection-plugin";
import VueRenderPlugin from "rete-vue-render-plugin";
import ModulePlugin from "rete-module-plugin";
import ContextMenuPlugin from "rete-context-menu-plugin";
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
import Prototype from "@/Prototype";
import {ModuleComponent} from "@/rete/components/modules/ModuleComponent";
import GroupList from "@/components/GroupList";
import InputComponent from "@/rete/components/modules/InputComponent";
import sockets from "@/rete/sockets";

export default {
  name: 'App',
  components: {GroupList},
  data() {
    return {
      editor: {},
      modules: {}
    }
  },
  methods: {
    resize() {
      this.editor.view.resize();
      AreaPlugin.zoomAt(this.editor);
    }
  },
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
      timerSet: new TimerSetComponent(),
      module: new ModuleComponent(),
      inputElement: new InputComponent('Input element', 'Previous elements', sockets.element),
      inputNumber: new InputComponent('Input number', 'Number', sockets.number),
    };


    this.editor = new Rete.NodeEditor('demo@0.1.0', container);
    let editor = this.editor;

    const background = document.createElement('div');
    background.classList = 'background';


    var engine = new Rete.Engine('demo@0.1.0');

    this.modules = {
      "global": {data: {id: 'demo@0.1.0', nodes: {}}},
      "Other logic": {data: {id: 'demo@0.1.0', nodes: {}}}
    };

    editor.use(ModulePlugin, {
      engine,
      modules: this.modules
    });
    editor.use(ConnectionPlugin);
    editor.use(VueRenderPlugin, {
      component: CustomNode
    });
    editor.use(AreaPlugin, {background});
    editor.use(ContextMenuPlugin, {
      delay: 10,
      allocate(component) {
        return component.path || ['Other'];
      }
    });

    for (var k in components) {
      var v = components[k];
      editor.register(v);
      engine.register(v);
    }

    await Prototype.addNodes(editor, components);

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

    this.resize();
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

    &.socket-output-number,
    &.socket-output-unit
      path
        stroke: $socket-color-number

    &.socket-input-toggle
      path
        stroke: $socket-color-toggle

    &.socket-input-time
      path
        stroke: $socket-color-time

  .Element path
    stroke: $socket-color

  .Unit path,
  .Number path
    stroke: $socket-color-number

  .Toggle path
    stroke: $socket-color-toggle

  .Time path
    stroke: $socket-color-time
</style>

