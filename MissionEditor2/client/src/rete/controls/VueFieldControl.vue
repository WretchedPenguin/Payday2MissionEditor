<template lang="pug">
  .field-control
    label( v-if="name" class="label-text col-form-label" v-html="name")
    .input-group.input-group-xs.ml-auto(:class="inputLength ? 'col-' + inputLength : (name ? 'col-6' : 'col-12')")
      label.switch.m-auto( v-if="type === 'checkbox'")
        input(
          type="checkbox"
          @change="onCheckboxChange($event)" 
          :checked="value ? 'checked' : ''")
        span.slider.round
      input.form-control.node-input.text-center(
        v-else
        :type="type || 'text'"
        :readonly="read_only"
        :value="value"
        :placeholder="placeholder"
        @input="onChange($event)"
        @dblclick.stop=""
        @pointerdown.stop="" 
        @pointermove.stop=""
        step="0.1")
      .input-group-append( v-if="append")
        .input-group-text(v-html="append")
</template>

<script>
export default {
  props: ['initial', 'readonly', 'emitter', 'ikey', 'type', 'getData', 'putData', 'name', 'prepend', 'append', 'inputLength', 'placeholder', 'change'],
  data() {
    return {
      value: this.initial,
      read_only: this.readonly
    }
  },
  methods: {
    parse(value) {
      return this.type === 'number' ? +value : value;
    },
    onChange(e) {
      this.value = this.parse(e.target.value);
      this.update();
    },
    onCheckboxChange(e) {
      this.value = e.target.checked;
      this.update();
    },
    update() {
      if (this.ikey) {
        this.putData(this.ikey, this.value);
        if (this.change)
          this.change(this.value);
      }
      this.emitter.trigger('process');
    }
  },
  mounted() {
    if (this.getData(this.ikey) === undefined) {
      this.putData(this.ikey, this.initial);
    }

    this.value = this.getData(this.ikey);
  }
}
</script>

<style lang="sass">
@import ../vars

$switch-size: 0.5

.field-control
  display: flex

  .form-control,
  .input-group-addon,
  .input-group-btn > .btn,
  .label-text,
  .input-group-prepend > .input-group-text,
  .input-group-append > .input-group-text
    color: $text-color
    height: 22px
    padding: 1px 5px
    font-size: $text-size
    line-height: 1.5

    ::placeholder
      color: $placeholder-color

.node-input,
.input-group-text
  color: $text-color
  height: 22px
  padding: 1px 5px
  font-size: $text-size
  line-height: 1.5
  background-color: $input-background-color
  border: none
  
  &:focus
    background-color: $input-background-color

  &::placeholder
    color: $placeholder-color

  &:read-only
    background-color: #595959

    & + .input-group-append > .input-group-text
      background-color: #595959

.switch
  position: relative
  display: inline-block
  width: 60px * $switch-size
  height: 34px * $switch-size

  input
    opacity: 0
    width: 0
    height: 0

.slider
  position: absolute
  cursor: pointer
  top: 0
  left: 0
  right: 0
  bottom: 0
  background-color: #ccc
  -webkit-transition: .4s
  transition: .4s

  &:before
    position: absolute
    content: ""
    height: 26px * $switch-size
    width: 26px * $switch-size
    left: 4px * $switch-size
    bottom: 4px * $switch-size
    background-color: white
    -webkit-transition: .4s
    transition: .4s

input
  &:checked + .slider
    background-color: #2196F3

  &:focus + .slider
    box-shadow: 0 0 1px #2196F3

  &:checked + .slider:before
    -webkit-transform: translateX(26px * $switch-size)
    -ms-transform: translateX(26px * $switch-size)
    transform: translateX(26px * $switch-size)

.slider.round
  border-radius: 34px * $switch-size

  &:before
    border-radius: 50%
</style>