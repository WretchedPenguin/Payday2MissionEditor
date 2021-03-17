<template lang="pug">
  .dropdown
    .btn.btn-secondary.dropdown-toggle.text-uppercase.bg-transparent.border-0(type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' :id="id")
     | {{title}}
    .dropdown-menu.bg-dark(:aria-labelledby="id")
      .dropdown-item.text-white(href='#' v-for="item in items" :key="item.title" @click="item.onClick") {{item.title}} 
</template>

<script>
export default {
  props:['title', 'items'],
  name: "DropdownButton",
  data(){
    return{
      id: 'dropdownMenuButton' + this.title
    }
  }
}
</script>

<style lang="sass" scoped>
  .btn
    width: 10rem
</style>