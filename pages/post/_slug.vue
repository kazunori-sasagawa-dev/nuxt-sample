<template>
  <article class="p-post">
    <section class="p-post__inner">
      <p class="p-post__time">{{ $dayjs(post.createdAt).format('YYYY/MM/DD') }}</p>
      <p class="p-post__categoryName">{{ getCatName(post.category) }}</p>
      <h1 class="p-post__title">{{ post.title }}</h1>
      <nuxt-content :document="post" />
    </section>
  </article>
</template>

<script>
import Vue from 'vue';
import taxonomy from '@/taxonomy';

export default Vue.extend({
  async asyncData ({ $content, params }) {
    const post = await $content(`post/${params.slug}`).fetch()
    return { post }
  },
  data() {
    return {
      category: [...taxonomy.category]
    }
  },
  head() {
    return {
      title: this.post.title + ' - nuxt.jsで作るポートフォリオ用のブログサイト。',
      meta: [
        { hid: 'description', name: 'description', content: this.post.description },
        { hid: 'og:type', name: 'og:type', content: 'article' },
        { hid: 'og:title', name: 'og:title', content: this.post.title + ' - nuxt.jsで作るポートフォリオ用のブログサイト。' },
        { hid: 'og:description', name: 'og:description', content: this.post.description },
        { hid: 'og:url', name: 'og:url', content: this.$route.fullPath },
        { hid: 'og:image', name: 'og:image', content: `${this.$config.baseURL}/img_ogp_01.png` }
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
@import '@/assets/sass/variables';
.p-post {
  padding-bottom: 64px;

  &__inner {
    max-width: 1280px;
    margin: 0 auto;
  }

  &__time {
    text-align: right;
  }

  &__categoryName {
    display: inline-block;
    font-size: 1.2rem;
    background: #fff;
    padding: 4px 16px;
    border: 1px solid #ccc;
    border-radius: 50px;
  }

  &__title {
    font-size: 2.4rem;
    margin-top: 16px;
  }

  h2 {
    font-size: 1.8rem;
    font-weight: $fontWeightBold;
    margin-top: 64px;
    padding-bottom: 4px;
    border-bottom: 1px solid #ccc;
  }

  p {
    margin-top: 32px;
  }

  strong {
    font-weight: $fontWeightBold;
  }

  em {
    font-style: oblique;
    font-weight: $fontWeightBold;
  }

  ul {
    margin-top: 32px;
  }

  ol {
    margin-top: 32px;
  }
}
</style>