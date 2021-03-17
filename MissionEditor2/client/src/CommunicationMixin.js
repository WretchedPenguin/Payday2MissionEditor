export default {
    data() {
        return {
            loadedConnections: []
        }
    },
    methods: {
        async createNode(element, position) {
            if (!this.components[element.class]) {
                console.error("no component was found for " + element.class)
                return;
            }
            if (element.values.on_executed) {
                element.values.on_executed.forEach(item => {
                    this.loadedConnections.push({from: element.id, to: item.id, type: 'element'});
                })
            }
            if (element.values.elements) {
                element.values.elements.forEach(item => {
                    this.loadedConnections.push({from: element.id, to: item, type: 'elements'});
                })
            }

            var initialValues = element.values;
            initialValues.id = element.id;

            var node = await this.components[element.class].createNode(initialValues);
            node.position = [position.x * 10, position.z * 10];

            this.editor.addNode(node);
            this.resize();
            this.attemptConnections();
        }
        ,
        async updateNode(id, name, value) {
            var node = this.findNode(id);
            if (!node) {
                console.error("no node was found for id " + id)
            }
            node.data[name] = value;
        }
        ,
        attemptConnections() {
            this.loadedConnections.forEach((item, index) => {
                let from = this.findNode(item.from);
                let to = this.findNode(item.to);

                if (from && to) {
                    if (item.type === 'element') {
                        this.editor.connect(from.outputs.get('next_elements'), to.inputs.get('previous_elements'));
                    } else {
                        this.editor.connect(from.outputs.get(item.type), to.inputs.get(item.type));
                    }
                    this.loadedConnections.splice(index, 1);
                }
            });
        }
        ,
    }
}