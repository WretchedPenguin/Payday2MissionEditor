import Vue from "vue";
import {Component} from "vue-property-decorator";

// @ts-ignore
@Component
export default Vue.extend( {
    // @ts-ignore
    props: ['readonly', 'emitter', 'ikey', 'getData', 'putData'],
    methods: {

        change(e: any) {
            this.$props.value = +e.target.value;
            // @ts-ignore
            this.update();
        },

        update() {
            if (this.$props.ikey) {
                this.$props.putData(this.$props.ikey, this.$props.value);
            }
            this.$props.emitter.trigger('process');
        },

        mounted() {
            this.$props.value = this.$props.getData(this.$props.ikey);
        }
    }
});