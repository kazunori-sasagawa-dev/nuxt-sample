<template>
  <div class="l-contents">
    <div class="p-mainVisual">
      <div class="p-mainVisual__inner">
        <h1 class="p-mainVisual__title">nuxtブログ</h1>
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
        title: 'ブログサイト。',
        type: 'website'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/variables.scss';
@import url('https://fonts.googleapis.com/earlyaccess/nicomoji.css');
.p-mainVisual {
  margin-top: 24px;

  &__inner {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    max-width: 1280px;
    height: 640px;
    background: $black;
    margin: 0 auto;

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url('@/assets/images/top/img_mainVisual_01.jpg') top center / cover no-repeat;
      opacity: 0.8;
    }
  }

  &__title {
    position: relative;
    z-index: 1;
    font-family: 'Nico Moji';
    font-size: 7rem;
    color: #fff;
  }
}
</style>
