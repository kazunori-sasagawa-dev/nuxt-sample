<template>
  <div class="contents">
    <div class="mainVisual">
      <div class="mainVisual__inner">
        <img src="" alt="" class="mainVisual__image">
      </div>
    </div>
  </div>
</template>

<script>
import Meta from '@/mixins/meta_01.js'

export default {
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: 'このサイトについて'
      }
    }
  }
}
</script>
