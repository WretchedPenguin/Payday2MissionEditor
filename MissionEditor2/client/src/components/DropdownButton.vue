<template lang="pug">
  .dropdown
    button.btn.btn-secondary.dropdown-toggle(type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' :id="id")
     | {{title}}
    .dropdown-menu(:aria-labelledby="id")
      a.dropdown-item(href='#') Action
      a.dropdown-item(href='#') Another action
      a.dropdown-item(href='#') Something else here
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

<style scoped>

</style>