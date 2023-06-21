<template>
  <div class="l-contents">
    <div class="p-mainVisual">
      <div class="p-mainVisual__inner">
        <h1 class="p-mainVisual__title">nuxt<br class="switch__display--sp" />ブログ</h1>
      </div>
    </div>
    <ArticleList v-if="posts != 0" :posts="posts" />
  </div>
</template>

<script>
import Meta from '@/mixins/meta_01.js'
import ArticleList from '@/components/category/ArticleList'

export default {
  components: {
    ArticleList
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: 'nuxtブログ',
        type: 'website'
      }
    }
  },
  async asyncData({ $content }) {
    const posts = await $content('post').sortBy('createdAt', 'desc').limit('10').fetch()
    return { posts }
  }
}
</script>

<style lang="scss">
@import '@/assets/sass/variables.scss';
.p-mainVisual {
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
    border-radius: 24px;
    @media screen and (max-width: $SP) {
      height: 320px;
    }

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
    @media screen and (max-width: $SP) {
      line-height: 1.2;
      text-align: center;
    }
  }
}
</style>
