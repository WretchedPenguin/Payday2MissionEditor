<template>
  <input type="number" :readonly="readonly" :value="value" @input="change($event)" @dblclick.stop="" @pointerdown.stop="" @pointermove.stop=""/>
</template>

<script src="./VueNumControl.ts">
</script>

<style scoped>

</style>