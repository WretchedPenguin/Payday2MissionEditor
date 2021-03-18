<template lang="pug">
  .view()
    .list-group.list-group-horizontal(v-model="module")
      .group.mt-auto(v-for="(module, key) in modules"
        :key="key"
        :label="key"
        @click="openModule(key)"
        :class="key == active ? 'active' : ''")
        span.font-weight-bold {{key}}
        .d-flex(@click.stop="renameModule(key)")
          HoverImage.m-auto.icon(
            v-if="key != 'Global'"
            src="assets/icons/pencil.svg"
            src-hover="assets/icons/pencil-filled.svg")
        .d-flex(@click.stop="deleteModule(key)")
          HoverImage.m-auto.icon(
            v-if="key != 'Global'"
            src="assets/icons/rubbish.svg"
            src-hover="assets/icons/rubbish-filled.svg")
      .group.mt-auto( @click="addModule()") +
</template>


<script>
import Vue from 'vue';
import HoverImage from "@/components/HoverImage";

export default {
  props: ['editor', 'modules', 'resize'],

  components: {
    HoverImage
  },

  data() {
    return {
      module: 'Global',
      active: 'Global'
    }
  },
  mounted() {
    this.module = 'Global';
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
    },
    renameModule(name) {
      let value = this.modules[name];
      let newName = prompt("What would you like to change the name to?")
      if (newName === null) {
        return;
      }
      while (this.modules[newName] != null) {
        newName = prompt("Name already exists")
      }
      Vue.delete(this.modules, name);
      Vue.set(this.modules, name, value);
      this.$forceUpdate();
    },
    deleteModule(name) {
      let response = prompt("Confirm deleting '" + name + "' by entering the name");
      if (response === name) {
        Vue.delete(this.modules, name);
      }
    }
  }
}
</script>


<style lang="sass" scoped>

.view
  display: flex
  z-index: 10
  position: absolute
  left: 0
  bottom: 0

  .group
    background-color: $node-color
    color: $socket-color-disabled
    display: flex
    margin-right: 1px
    border-radius: 0px 15px 0px 0px
    font-size: $title-size - 4
    padding: 0rem 1.5rem 0rem 1.5rem

    &.active
      color: $title-text-color
      background-color: $node-color-disabled
      font-size: $title-size

      &:hover
        background-color: lighten($node-color-disabled, 4%)
        color: $title-text-color

    &:hover
      background-color: lighten($node-color, 4%)
      color: lighten($socket-color-disabled, 4%)

    .icon
      height: 20px
      padding-left: 5px

</style>
