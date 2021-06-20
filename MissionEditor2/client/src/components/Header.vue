<template lang="pug">
  div
    .header.bg-dark.list-group.list-group-horizontal.rounded-0
      DropdownButton(v-for="item in items" :title="item.title" :items="item.items" :key="title")
      VueFieldControl(
        type="checkbox" 
        :initial="renderConnections" 
        :change="toggleRenderConnections" 
        name="Render connections" 
        :emitter="emitter" 
        :getData="(k) =>{return renderConnections}" 
        :putData="(k,v) =>{}"
        ikey="something")
    Modal(:id="fileNewId" :primary="{theme: 'danger', text: 'Discard', click: this.new}" title="Discard changes?")
      p Starting a new document will discard all unsaved changes.
      p Would you like to continue?
    Modal(:id="fileImportId" :primary="{theme: 'danger', text: 'Import', click: this.importBeardLib}" title="Start import?")
      p Starting import from BeardLib will clear all elements and import them from Payday 2 (if you have the mod installed).
      p Would you like to continue?
    Modal(:id="elementAlignId" :primary="{theme: 'danger', text: 'Align', click: this.autoAlign}" title="Start align?")
      p This option will automatically align ALL elements and it's not always perfect but can help with performance. 
      p Mostly recommended when importing an existing mission.
      p If you manually aligned the elements and want to test this function, be sure to save first!
      p Would you like to continue?
</template>

<script>
import DropdownButton from "@/components/DropdownButton";
import Modal from "@/components/Modal";
import VueFieldControl from "@/rete/controls/VueFieldControl";

export default {
  name: "Header",
  components: {VueFieldControl, Modal, DropdownButton},
  data() {
    return {
      renderConnections: true,
      fileNewId: 'fileNew',
      fileImportId: 'fileImport',
      elementAlignId: 'elementAlign',
      items: [
        {
          title: "File",
          items: [
            {title: "New", onClick: this.openModal.bind(this, () => this.fileNewId)},
            {title: "Save", onClick: this.save},
            {title: "Save as...", onClick: this.save},
            {title: "Import from BeardLib", onClick: this.openModal.bind(this, () => this.fileImportId)},
          ],
        },
        {
          title: "Elements",
          items: [
            {title: "Auto align", onClick: this.openModal.bind(this, () => this.elementAlignId)},
          ],
        },
      ]
    }
  },
  methods: {
    openModal(idFunc){
      $('#' + idFunc()).modal()
    },
    
    new(){
      this.clear();
    },
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
    },
    toggleRenderConnections(){
      this.renderConnections = !this.renderConnections;
      $('div > svg').parent().css('display', this.renderConnections ? 'inline' : 'none')
    }
  }

}
</script>

<style lang="sass" scoped>
</style>