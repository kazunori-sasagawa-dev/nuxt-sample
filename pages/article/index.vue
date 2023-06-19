<template>
  <section class="p-article">
    <h1 class="p-article__title">記事一覧</h1>
    <div class="p-article__content">
      <ArticleList v-if="posts != 0" :posts="posts" />
    </div>
  </section>
</template>

<script>
import Vue from 'vue';
import Meta from '@/mixins/meta_01.js'
import ArticleList from '@/components/category/ArticleList';

export default Vue.extend({
  components: {
    ArticleList
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: '記事一覧' + ' - nuxt.jsで作るポートフォリオ用のブログサイト。',
        description: '作成した記事一覧'
      }
    }
  },
  async asyncData({ $content }) {
    const posts = await $content('post').sortBy('createdAt', 'desc').fetch()
    return { posts }
  }
})
</script>

<style lang="scss">
.p-article {
  max-width: 1280px;
  margin: 0 auto;

  &__title {
    font-size: 2.4rem;
    background: #eee;
    text-align: center;
    padding: 24px;
  }
}
</style>