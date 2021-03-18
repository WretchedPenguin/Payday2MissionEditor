<template>
  <div class="field-group">
    <VueFieldControl v-for="(field, index) in controls" :key="field.ikey"
                     :class="index !== Object.keys(controls).length - 1 ? 'line' : '' "
                     :readonly="field.readonly"
                     :emitter="emitter"
                     :ikey="field.ikey"
                     :type="field.type"
                     :get-data="getData"
                     :put-data="putData"
                     :name="field.name"
                     :prepend="field.prepend"
                     :append="field.append"
                     :initial="field.initial">
    </VueFieldControl>
  </div>
</template>

<script>

import VueFieldControl from "@/rete/controls/VueFieldControl";

export default {
  props: ['emitter', 'getData', 'putData', 'fields'],
  data() {
    return {
      controls: this.fields
    }
  },

  components: {
    VueFieldControl
  }
}
</script>

<style lang="sass" scoped>

$line_width: 3%

.line
  margin-bottom: $line-margin

.input-control > .field-group,
.output-control > .field-group
  &:after,
  &:before
    border-bottom: 1px solid $socket-color
    content: ''
    display: block
    width: $line_width

.input-control > .field-group
  border-left: 1px solid $socket-color

.output-control > .field-group
  border-right: 1px solid $socket-color

  &:before,
  &:after
    margin-left: (100 - $line_width)

.Toggle > .field-group
  border-color: $socket-color-toggle

  &:before,
  &:after
    border-color: $socket-color-toggle

.node.disabled .input-control > .field-group
  border-color: $socket-color-disabled

  &:before,
  &:after
    border-color: $socket-color-disabled


</style>