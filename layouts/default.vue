<template>
  <div class="l-wrapper">
    <Header />
    <main class="l-main">
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'

export default {
  components: {
    Header,
    Footer
  },
  head() {
    return {
      meta: [
        { hid: 'og:image', name: 'og:image', content: `${this.$route.fullPath}img_ogp_01.png` }
      ],
      link: [
        { rel: 'canonical', href: `${this.$config.baseURL}${this.$route.fullPath}` }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/sass/common_01.scss';
</style>