<template>
  <section class="p-category">
    <h1 class="p-category__title">{{ getCatName($route.params.slug) }}</h1>
    <div class="p-category__content">
      <ArticleList :posts="posts" />
    </div>
  </section>
</template>

<script>
import Vue from 'vue';
import taxonomy from '@/taxonomy';
import ArticleList from '@/components/category/ArticleList';

export default Vue.extend({
  components: {
    ArticleList
  },
  async asyncData({ store, $content, params }) {
    const posts = await $content('post').sortBy('createdAt', 'desc').where({ category: { $contains: params.slug } }).fetch()
    return { posts }
  },
  data() {
    return {
      category: [...taxonomy.category]
    }
  },
  head() {
    return {
      title: this.getCatName(this.$route.params.slug) + ' - nuxt.jsで作るポートフォリオ用のブログサイト。',
      meta: [
        { hid: 'description', name: 'description', content: this.getCatName(this.$route.params.slug) + '記事一覧' },
        { hid: 'og:type', name: 'og:type', content: 'article' },
        { hid: 'og:title', name: 'og:title', content: this.getCatName(this.$route.params.slug) + ' - nuxt.jsで作るポートフォリオ用のブログサイト。' },
        { hid: 'og:description', name: 'og:description', content: this.getCatName(this.$route.params.slug) + '記事一覧' },
        { hid: 'og:url', name: 'og:url', content: this.$route.fullPath },
      ]
    }
  },
  methods: {
    getCatName(cat) {
      return this.category.find((v) => v.slug === cat).text
    }
  }
})
</script>

<style lang="scss">
.p-category {
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