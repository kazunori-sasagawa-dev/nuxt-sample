export default {
  data() {
    return {
      meta: {
        type: 'article',
        url: `http://localhost:3000${this.$route.fullPath}`
      }
    }
  },
  head() {
    return {
      title: this.$route.name === 'index' ? this.meta.title : this.meta.title + '- nuxt.jsで作るポートフォリオ用のブログサイト。',
      meta: [
        { hid: 'description', name: 'description', content: this.meta.description || 'nuxt.jsで作るポートフォリオ用のブログサイト。' },
        { hid: 'og:type', name: 'og:type', content: this.meta.type },
        { hid: 'og:title', name: 'og:title', content: this.$route.name === 'index' ? this.meta.title : this.meta.title + '- nuxt.jsで作るポートフォリオ用のブログサイト。' },
        { hid: 'og:description', name: 'og:description', content: this.meta.description || 'nuxt.jsで作るポートフォリオ用のブログサイト。' },
        { hid: 'og:url', name: 'og:url', content: this.meta.url },
      ]
    }
  }
}