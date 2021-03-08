<template lang="pug">
  .header.bg-dark
    DropdownButton(v-for="item in items" :title="item.title" :items="items")
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
            {title: "Save",onClick: this.save()}
          ]
        }
      ],
      lastSaveLocation: ''
    }
  },
  methods: {
    save() {

    }
  }

}
</script>

<style lang="sass" scoped>

.header
  z-index: 100

</style>