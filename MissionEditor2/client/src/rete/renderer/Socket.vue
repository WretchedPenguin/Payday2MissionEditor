<template lang="pug">
  .socket(
    :class="[type, socket.name] | kebab",
    :title="socket.name"
  )
</template>

<script>
export default {
  props: ['type', 'socket']
}
</script>

<style lang="sass" scoped>
@import "../vars"

.socket
  flex-shrink: 0
  display: inline-block
  cursor: pointer
  border-radius: $socket-size/2.0
  width: $socket-size
  height: $socket-size
  margin: $socket-margin
  vertical-align: middle
  background: $socket-color
  z-index: 2
  box-sizing: border-box
  //margin-top: 11px
  &:hover
    border-width: 4px

  &.multiple
    border-color: yellow

  &.output
    margin-right: - $socket-size / 2
    margin-left: $socket-margin

  &.input
    margin-left: - $socket-size / 2
    margin-right: $socket-margin

  &.number,
  &.unit
    background: $socket-color-number
    border-radius: 0px

  &.toggle
    background: $socket-color-toggle
    
  &.time
    background: $socket-color-time

</style>
