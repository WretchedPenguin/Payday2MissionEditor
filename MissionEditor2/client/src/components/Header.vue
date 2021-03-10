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
          ]
        }
      ]
    }
  },
  methods: {
    save() {
      // TODO: actual save function
      console.log('saving')
    },
    importBeardLib() {
      console.log('import');
      DotNet.invokeMethodAsync('MissionEditor2', 'ImportFromBeardLib');
    }
  },


}
</script>

<style lang="sass" scoped>

.header
  z-index: 100

</style>