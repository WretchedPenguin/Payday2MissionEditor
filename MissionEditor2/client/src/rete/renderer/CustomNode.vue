<template lang="pug">
  .node(:class="[selected(), node.name] | kebab")
    .title-container
      img.img-fluid.icon.m-1(:src="'assets/icons/' + (node.icon ? node.icon : 'script') + '.svg'")
      .title.text-uppercase.text-center.ml-auto.mr-auto {{node.name}}

    // Controls
    .control(
      v-if="control.visible"
      v-for='control in controls()',
      v-control="control"
    )
    // Inputs
    .input(v-for='input in inputs()' :key="input.key")
      Socket(v-socket:input="input", type="input", :socket="input.socket")
      .input-title(v-if='!input.control') {{input.name}}
      .input-control(
        v-if='input.control'
        v-control="input.control"
        :class="input.socket.name"
      )

    // Outputs
    .output(v-for='output in outputs()' :key="output.key")
      .output-title(v-if="!output.control")  {{output.name}}
      .output-control.ml-1(
        v-if="output.control"
        v-control="output.control"
        :class="output.socket.name"
      )
      Socket(v-socket:output="output", type="output", :socket="output.socket")
</template>

<script>
import mixin from './mixin';
import Socket from './Socket.vue';

export default {
  mixins: [mixin],
  components: {
    Socket
  }
}
</script>

<style lang="sass">
@import "../vars"
.node
  background: $node-color
  border-radius: 10px
  cursor: pointer
  min-width: $node-width
  width: $node_width
  height: auto
  box-sizing: content-box
  position: relative
  user-select: none

  &:hover
    background: lighten($node-color, 4%)

  .title-container
    border-top-left-radius: 10px
    border-top-right-radius: 10px
    margin-bottom: $line-margin
    background-color: $node-color
    display: flex

    .icon
      height: 40px

  .title
    color: white
    font-family: sans-serif
    font-size: 24px
    padding: 8px
    font-weight: bold

  .output,
  .input
    display: flex
    padding-bottom: $line-margin
    align-items: center

  .output
    text-align: right
    justify-content: flex-end

  .input
    text-align: left
    justify-content: flex-start

  .input-title, .output-title
    vertical-align: middle
    color: $text-color
    display: inline-block
    font-family: sans-serif
    font-size: 14px
    line-height: $socket-size

  .input-control
    z-index: 1
    width: calc(100% - #{$socket-size + 2*$socket-margin})
    display: inline-block

  .control,
  .input-control,
  .output-control
    width: 100%

  &.constant,
  &.unit-ref
    .title-container
      background-color: #548235

  &.script,
  &.timer,
  &.timer-trigger,
  &.timer-set
    .title-container
      background-color: #A9D18E

  &.startup,
  &.asset
    .title-container
      background-color: #9DC3E6

  &.toggle
    .title-container
      background-color: $socket-color-toggle

  &.disabled
    .title-container
      background-color: #A6A6A6


</style>