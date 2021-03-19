<template lang="pug">
  .modal.fade(:id="id" tabindex='-1' role='dialog' :aria-labelledby="labelId" aria-hidden='true')
    .modal-dialog(role='document')
      .modal-content.bg-dark
        .modal-header
          h5.modal-title(:id="labelId") {{title}}
          button.close(type='button' data-dismiss='modal' aria-label='Close')
            span(aria-hidden='true') &times;
        .modal-body
          slot
        .modal-footer
          button.btn(:class="'btn-' + s.theme" type='button' data-dismiss='modal') {{s.text}}
          button.btn(:class="'btn-' + p.theme" @click="primary.click" type='button' data-dismiss='modal') {{p.text}}
</template>

<script>
export default {
  props:['id', 'title', 'primary', 'secondary'],
  data(){
    return {
      labelId: this.id + "Label",
      p: this.primary || {theme: 'primary', text: 'Confirm'},
      s: this.secondary || {theme: 'secondary', text: 'Close'}
    }
  },
  name: "Modal"
}
</script>

<style scoped>

</style>