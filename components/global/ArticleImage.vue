<template>
  <div>
    <img :src="require(`@/assets/images/post/${this.file}`)">
  </div>
</template>

<script>
export default {
  props: ['file']
}
</script>
<style scoped>
div {
  margin-top: 32px;
}
</style>