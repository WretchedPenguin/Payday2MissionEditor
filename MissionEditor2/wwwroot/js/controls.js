var VueNumControl = {
    props: ['readonly', 'emitter', 'key', 'getData', 'putData'],
    template:
        '<input type="number" :readonly="readonly" :value="value" @input="change($event)" @dblclick.stop="" @pointerdown.stop="" @pointermove.stop=""/>',
    data() {
        return {
            value: 0
        }
    },
    methods: {
        change(e) {
            this.value = +e.target.value;
            this.update();
        },
        update() {
            if (this.key)
                this.putData(this.key, this.value);
            this.emitter.trigger('process');
        }
    },
    mounted() {
        this.value = this.getData(this.key);
    }
}

class NumControl extends Rete.Control {

    constructor(emitter, key, readonly) {
        super(key);
        this.component = VueNumControl;
        this.props = { emitter, key, readonly };
    }

    setValue(val) {
        this.vueContext.value = val;
    }
}