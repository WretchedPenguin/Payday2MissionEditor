var components;
var editor;

(async () => {
    var container = document.querySelector('#rete');
    components = [new NumComponent(), new AddComponent()];

    editor = new Rete.NodeEditor('demo@0.1.0', container);
    editor.use(ConnectionPlugin.default);
    editor.use(VueRenderPlugin.default);
//    editor.use(ContextMenuPlugin.default);
//    editor.use(AreaPlugin);
//    editor.use(CommentPlugin.default);
//    editor.use(HistoryPlugin);
//    editor.use(ConnectionMasteryPlugin.default);

    var engine = new Rete.Engine('demo@0.1.0');

    components.map(c => {
        editor.register(c);
        engine.register(c);
    });

    editor.on('process nodecreated noderemoved connectioncreated connectionremoved',
        async () => {
            console.log('process');
            await engine.abort();
            await engine.process(editor.toJSON());
        });

    editor.view.resize();
//    AreaPlugin.zoomAt(editor);
    editor.trigger('process');
})();