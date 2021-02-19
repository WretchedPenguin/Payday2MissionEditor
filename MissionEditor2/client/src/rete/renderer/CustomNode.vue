<template lang="pug">
  .node(:class="[selected(), node.name] | kebab")
    .title-container(:style="node.titleStyle")
      .title.text-uppercase.text-center {{node.name}}

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
      .input-control.ml-3.mr-3(
        v-if='input.control'
        v-control="input.control"
      )

    // Outputs
    .output(v-for='output in outputs()' :key="output.key")
      .output-title(v-if="!output.control")  {{output.name}}
      .output-control.ml-2(
        v-if="output.control"
        v-control="output.control"
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

<style lang="sass" scoped>
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
    margin-bottom: 8px
    
  .title
    color: white
    font-family: sans-serif
    font-size: 24px
    padding: 8px

  .output,
  .input
    display: flex
    padding-bottom: 8px
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
    margin: $socket-margin
    line-height: $socket-size

  .input-control
    z-index: 1
    width: calc(100% - #{$socket-size + 2*$socket-margin})
    vertical-align: middle
    display: inline-block

  .control
    padding: $socket-margin $socket-size/2 + $socket-margin
    padding-top: 0px
</style>