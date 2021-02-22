<template lang="pug">
  img(
    :src="hover ? srcHover : src"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    )
</template>

<script>

export default {
  name: "HoverImage",
  props: ['src', 'srcHover', 'click'],
  data(){
    return {
      hover: false
    }
  }
}
</script>

<style scoped>

</style>