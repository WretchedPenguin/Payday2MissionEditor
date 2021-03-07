<template lang="pug">
  .table.list-control
    .header
      .tcol(v-for="(type) in types" v-html="type.name")
      .tcol
    .trow(v-for="(field, fieldIndex) in fields" :key="field.key")
      .tcol(v-for="(type, index) in types")
        input.form-control.node-input.list-input(
          v-model="fields[fieldIndex][type.key]" 
          @input="(event) => onChange(event, fieldIndex)")
      .tcol.icon-container(v-if="fieldIndex !== Object.keys(fields).length - 1" @click.stop="deleteField(field.key)")
        HoverImage.m-auto.icon(
          src="assets/icons/rubbish.svg"
          src-hover="assets/icons/rubbish-filled.svg")
</template>

<script>

import VueFieldControl from "@/rete/controls/VueFieldControl";
import HoverImage from "@/components/HoverImage";

export default {
  components: {HoverImage: HoverImage, VueFieldControl: VueFieldControl},
  props: ['emitter', 'getData', 'putData', 'types', 'ikey', 'initial'],
  data() {
    return {
      fields: [],
      firstChange: false,
      lastKey: 0
    }
  },
  methods: {
    addField() {
      this.fields.push({key: this.lastKey++, notify_unit_id: 0, notify_unit_sequence: '', time: 0});
    },
    deleteField(key) {
      this.fields = this.fields.filter(f => f.key !== key);
    },
    onChange(event, index) {
      if (this.firstChange) {
        this.firstChange = false;
        return;
      }
      if (index === Object.keys(this.fields).length - 1) {
        this.addField();
        this.firstChange = true;
      }
    }
  },
  mounted() {
    if (this.getData(this.ikey) === undefined) {
      this.putData(this.ikey, this.initial);
    }
    this.fields = this.getData(this.ikey);
    this.fields.forEach((value => value.key = this.lastKey++))
    this.addField()
  }
}
</script>

<style lang="sass">
@import '../vars'

.list-control

  &.table
    display: table
    width: 100%
    padding-right: 3px

    & > *
      display: table-row

    .header
      font-size: $text-size
      color: $text-color
      text-align: center

    .tcol
      display: table-cell
      width: 0px
      padding-left: 3px
      padding-bottom: 3px

      .list-input
        color: $text-color
        height: 22px
        padding: 1px 5px
        font-size: $text-size
        line-height: 1.5

        ::placeholder
          color: $placeholder-color
      
      &.icon-container
        max-width: 10px
        text-align: center

        .icon
          width: 15px
          padding-bottom: 3px
          
        

  .col-12
    padding: 0px


</style>