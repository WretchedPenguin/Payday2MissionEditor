//#region Constant number
function ConstantNumber() {
    this.addOutput("value", "number");
    this.addProperty("value", 1.0);
    this.widget = this.addWidget("number", "value", 1, "value");
    this.widgets_up = true;
    this.size = [180, 30];
}

ConstantNumber.title = "Const Number";
ConstantNumber.desc = "Constant number";

ConstantNumber.prototype.onExecute = function() {
    this.setOutputData(0, parseFloat(this.properties["value"]));
};

ConstantNumber.prototype.getTitle = function() {
    if (this.flags.collapsed) {
        return this.properties.value;
    }
    return this.title;
};

ConstantNumber.prototype.setValue = function(v) {
    this.setProperty("value", v);
}

ConstantNumber.prototype.onDrawBackground = function(ctx) {
    //show the current value
    this.outputs[0].label = this.properties["value"].toFixed(3);
};

LiteGraph.registerNodeType("basic/const", ConstantNumber);
//#endregion

//#region Watch
function Watch() {
    this.size = [60, 30];
    this.addInput("value", 0, { label: "" });
    this.value = 0;
}

Watch.title = "Watch";
Watch.desc = "Show value of input";

Watch.prototype.onExecute = function () {
    if (this.inputs[0]) {
        this.value = this.getInputData(0);
    }
};

Watch.prototype.getTitle = function () {
    if (this.flags.collapsed) {
        return this.inputs[0].label;
    }
    return this.title;
};

Watch.toString = function (o) {
    if (o == null) {
        return "null";
    } else if (o.constructor === Number) {
        return o.toFixed(3);
    } else if (o.constructor === Array) {
        var str = "[";
        for (var i = 0; i < o.length; ++i) {
            str += Watch.toString(o[i]) + (i + 1 != o.length ? "," : "");
        }
        str += "]";
        return str;
    } else {
        return String(o);
    }
};

Watch.prototype.onDrawBackground = function (ctx) {
    //show the current value
    this.inputs[0].label = Watch.toString(this.value);
};

LiteGraph.registerNodeType("basic/watch", Watch);
//#endregion

//#region Empty node
function EmptyNode() {
    this.title = "Empty";
    this.addInput("Previous element", "element");
    this.addInput("delay", "number");
    this.addInput("enabled", "boolean");
    this.addInput("triggerCount", "number");
    this.addOutput("Next elements", "element");
    
    this.widgets_start_y = LiteGraph.NODE_SLOT_HEIGHT;
    
    this.addProperty("delay", 0);
    this.delay_widget = this.addWidget("number", "delay", 0, "delay");

    this.addProperty("enabled", true);
    this.enabled_widget = this.addWidget("toggle", "enabled", true, "enabled");

    this.addProperty("triggerCount", true);
    this.trigger_widget = this.addWidget("number", "triggerCount", 1, "triggerCount");

    this.onExecute = function () {
        if (this.inputs[1].link) {
            this.properties.delay = this.getInputData(1);
            this.delay_widget.value = this.getInputData(1);
        }
        if (this.inputs[3].link) {
            var count = Math.round(this.getInputData(3));
            count = Math.abs(count);
            this.properties.triggerCount = count;
            this.trigger_widget.value = count;
        }
    };
}

LiteGraph.registerNodeType("basic/empty", EmptyNode);
//#endregion

//#region Startup node
function StartupNode() {
    this.title = "Startup";
    this.addOutput("On startup", "element");
}

LiteGraph.registerNodeType("basic/startup", StartupNode);
//#endregion