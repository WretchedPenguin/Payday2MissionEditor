<template lang="pug">
  .dropdown
    .btn.btn-secondary.dropdown-toggle.text-uppercase.bg-transparent.border-0.w-10r(data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' :id="id")
     | {{title}}
    .dropdown-menu(:aria-labelledby="id" role="button")
      .dropdown-item.text-white(v-for="item in items" :key="item.title" @click="() => item.onClick()") {{item.title}} 
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
</style>