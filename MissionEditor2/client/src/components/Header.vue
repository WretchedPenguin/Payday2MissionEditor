<template lang="pug">
  .header.bg-dark
    DropdownButton(v-for="item in items" :title="item.title" :items="item.items" :key="title")
</template>

<script>
import DropdownButton from "@/components/DropdownButton";

export default {
  name: "Header",
  components: {DropdownButton},
  data() {
    return {
      items: [
        {
          title: "File",
          items: [
            {title: "Save", onClick: this.save},
            {title: "Save as...", onClick: this.save},
            {title: "Import from BeardLib", onClick: this.importBeardLib},
          ],
        },
        {
          title: "Element",
          items: [
            {title: "Auto align", onClick: this.autoAlign},
          ],
        },
      ]
    }
  },
  methods: {
    save() {
      // TODO: actual save function
      console.log('saving')
    },
    importBeardLib() {
      this.clear();
      DotNet.invokeMethodAsync('MissionEditor2', 'ImportFromBeardLib');
    },
    clear(){
      app.editor.fromJSON({id: 'demo@0.1.0', nodes: {}});
    },
    autoAlign(){
      app.editor.trigger('arrangeall');
      app.resize();
    }
  },


}
</script>

<style lang="sass" scoped>

.header
  z-index: 100

</style>