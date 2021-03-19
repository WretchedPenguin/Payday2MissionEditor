<template lang="pug">
  #rete-container
    Header
    #rete
      GroupList(:editor='editor' :modules='modules' :resize='resize')
</template>

<script>
import Rete from "rete";
import ConnectionPlugin from "rete-connection-plugin";
import VueRenderPlugin from "rete-vue-render-plugin";
import ModulePlugin from "rete-module-plugin";
import ContextMenuPlugin from "rete-context-menu-plugin";
import AutoArrangePlugin from '../lib/auto-arrange-plugin-devel/src/index';
import CustomNode from "@/rete/renderer/Node";
import AreaPlugin from 'rete-area-plugin';
import GroupList from "@/components/GroupList";
import Header from "@/components/Header";
import components from "./Components"
import CommunicationMixin from "@/CommunicationMixin";

require("jquery");

export default {
  name: 'App',
  components: {Header, GroupList},
  mixins: [CommunicationMixin],
  data() {
    return {
      editor: {},
      modules: {},
      components: {},
    }
  },
  methods: {
    resize() {
      this.editor.view.resize();
      AreaPlugin.zoomAt(this.editor);
    },
    findNode(id) {
      return this.editor.nodes.find(n => n.data.id === id);
    },
  },
  async mounted() {
    window.app = this;
    let container = document.getElementById("rete");
    container.classList.add('custom-node-editor');

    this.editor = new Rete.NodeEditor('demo@0.1.0', container);
    let editor = this.editor;

    this.components = components;

    const background = document.createElement('div');
    background.classList = 'background';

    var engine = new Rete.Engine('demo@0.1.0');

    this.modules = {
      "Global": {data: {id: 'demo@0.1.0', nodes: {}}},
      "Other logic": {
        data: {
          id: 'demo@0.1.0', nodes: {
            "1": {
              "id": 1,
              "data": {
                "name": "Previous elements"
              },
              "inputs": {},
              "outputs": {
                "output": {
                  "connections": [{
                    "node": 2,
                    "input": "input",
                    "data": {}
                  }]
                }
              },
              "position": [348, 78],
              "name": "Input element"
            }, "2": {
              "id": 2,
              "data": {
                "name": "Next elements"
              },
              "inputs": {
                "input": {
                  "connections": [{
                    "node": 1,
                    "output": "output",
                    "data": {}
                  }]
                }
              },
              "outputs": {},
              "position": [1086, 202],
              "name": "Output element"
            }
          },
        }
      }
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
      delay: 100,
      allocate(component) {
        return component.path || ['Other'];
      }
    });
    editor.use(AutoArrangePlugin, {margin: {x: 200, y: 200}, depth: 0});

    for (var k in components) {
      var v = components[k];
      editor.register(v);
      engine.register(v);
    }

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

#rete-container
  height: 100%
  width: 100%


</style>

