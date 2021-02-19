<template>
  <div class="field-control row">
    <label v-if="name" class="label-text col-2 col-form-label">{{ name }}</label>
    <div :class="name ? 'col-10' : 'col-12'" class="input-group input-group-xs">
      <input class="form-control node-input" :type="type || 'text'" :readonly="readonly" :value="value"
             @input="onChange($event)"
             @dblclick.stop=""
             @pointerdown.stop="" @pointermove.stop=""/>
      <div v-if="append" class="input-group-append">
        <span class="input-group-text">{{ append }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['readonly', 'emitter', 'ikey', 'type', 'change', 'getData', 'putData', 'name', 'prepend', 'append'],
  data() {
    return {
      value: '',
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
    update() {
      if (this.ikey) {
        this.putData(this.ikey, this.value);
      }
      this.emitter.trigger('process');
    }
  },
  mounted() {
    this.value = this.getData(this.ikey);
  }
}
</script>

<style lang="sass" scoped>
@import ../vars

.field-control
  .form-control,
  .input-group-addon,
  .input-group-btn > .btn,
  .label-text,
  .input-group-prepend > .input-group-text,
  .input-group-append > .input-group-text
    color: $text-color
    height: 22px
    padding: 1px 5px
    font-size: 12px
    line-height: 1.5

.node-input, .input-group-text
  color: $text-color
  background-color: #7F7F7F
  border: none
  text-align: center
  
</style>