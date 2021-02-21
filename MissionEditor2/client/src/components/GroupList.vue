<template lang="pug">
  .view()
    .list-group.list-group-horizontal(v-model="module")
      .group.mt-auto(v-for="(module, key) in modules"
        :key="key"
        :label="key"
        @click="openModule(key)"
        :class="key == active ? 'active' : ''")
        span.text-uppercase.font-weight-bold {{key}}
      .group.mt-auto( @click="addModule()") +

</template>


<script>
import Vue from 'vue';

export default {
  props: ['editor', 'modules', 'resize'],

  data() {
    return {
      module: 'global',
      active: 'global'
    }
  },
  mounted() {
    this.module = 'global';
  },
  watch: {
    async module(curr, prev) {
      this.active = curr;
      if (prev)
        this.modules[prev].data = this.editor.toJSON();

      await this.editor.fromJSON(this.modules[curr].data);

      this.editor.trigger('process');
      this.resize();
    }
  },
  methods: {
    initialData() {
      return {id: 'demo@0.1.0', nodes: {}}
    },
    addModule() {
      Vue.set(this.modules, 'group ' + Object.keys(this.modules).length, {data: this.initialData()});
      this.$forceUpdate();
    },
    openModule(name) {
      this.module = name;
    }
  }
}
</script>


<style lang="sass" scoped>
@import '../rete/vars.sass'

.view
  display: flex
  z-index: 10
  position: absolute
  left: 0
  bottom: 0

  .group
    background-color: $node-color
    color: $socket-color-disabled
    display: inline-block
    margin-right: 1px
    border-radius: 0px 15px 0px 0px
    font-size: $title-size - 4
    padding: 0rem 1.5rem 0rem 1.5rem
    
    &.active
      color: $title-text-color
      background-color: $node-color-disabled
      font-size: $title-size

</style>
