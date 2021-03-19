<template lang="pug">
  .table.list-control
    .header
      .tcol(v-for="(type) in types" v-html="type.name")
      .tcol.icon-container
        .m-auto.icon
    .trow(v-for="(field, fieldIndex) in fields" :key="field.key")
      .tcol(v-for="(type, index) in types")
        input.form-control.node-input.text-center.list-input(
          v-model="fields[fieldIndex][type.key]"
          @input="(event) => onChange(event, fieldIndex)"
          :placeholder="type.name")
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
  props: ['emitter', 'getData', 'putData', 'types', 'ikey', 'initial', 'change'],
  data() {
    return {
      fields: [],
      firstChange: false,
      lastKey: 0
    }
  },
  methods: {
    addField() {
      this.fields.push({key: this.lastKey++});
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
    },
    update() {
      if (this.ikey) {
        this.putData(this.ikey, this.fields);
        if (this.change) {
          this.change(this.fields);
        }
      }
      this.emitter.trigger('process');
    }
  },
  mounted() {
    if (this.getData(this.ikey) === undefined) {
      this.putData(this.ikey, this.initial);
    }
    this.fields = this.getData(this.ikey);
    if (this.fields === undefined) {
      this.fields = [];
    }
    this.fields = this.fields.map((value => {
      if (typeof (value) !== 'object') {
        value = {value: value}
      }
      value.key = this.lastKey++;
      return value;
    }));
    
    this.addField()
  }
}
</script>

<style lang="sass" scoped>

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
          vertical-align: initial


  .col-12
    padding: 0px


</style>