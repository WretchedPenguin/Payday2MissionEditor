import Vue from "vue";
import {Component} from "vue-property-decorator";
import Rete from "rete";
import ConnectionPlugin from "rete-connection-plugin";
import VueRenderPlugin from "rete-vue-render-plugin";
import NumComponent from "../rete/components/NumComponent";
import AddComponent from "../rete/components/AddComponent";

// @ts-ignore
@Component
export default class Home extends Vue {

    async initialize() {
        let container = this.$refs["rete"];
        let components: any[] = [
            new NumComponent(),
            new AddComponent()
        ];

        let editor = new Rete.NodeEditor('demo@0.1.0', container as HTMLElement);
        editor.use(ConnectionPlugin);
        editor.use(VueRenderPlugin);
        // editor.use(ContextMenuPlugin.default);
        // editor.use(AreaPlugin);
        // editor.use(CommentPlugin.default);
        // editor.use(HistoryPlugin);
        // editor.use(ConnectionMasteryPlugin.default);

        var engine = new Rete.Engine('demo@0.1.0');

        components.map(c => {
            editor.register(c);
            engine.register(c);
        });

        var n1 = await components[0].createNode({num: 2});
        var n2 = await components[0].createNode({num: 0});
        var add = await components[1].createNode();

        n1.position = [80, 200];
        n2.position = [80, 400];
        add.position = [500, 240];

        editor.addNode(n1);
        editor.addNode(n2);
        editor.addNode(add);

        editor.connect(n1.outputs.get('num'), add.inputs.get('num'));
        editor.connect(n2.outputs.get('num'), add.inputs.get('num2'));

        // @ts-ignore
        editor.on("process nodecreated noderemoved connectioncreated connectionremoved", async () => {
            console.log('process');
            await engine.abort();
            await engine.process(editor.toJSON());
        });

        editor.view.resize();
        // AreaPlugin.zoomAt(editor);
        editor.trigger('process');
    }

    mounted() {
        this.initialize().then(r => {});
    }

};