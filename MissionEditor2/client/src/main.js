import Vue from 'vue'
import App from './App.vue'
import Prototype from "@/Prototype";

window.app = {};
Vue.config.silent = true;

new Vue({
    el: '#app',
    render: h => h(App)
})


// Prototype.addNodes(app.editor, app.components).then(() => {
//     app.resize();
// });