<template>
  <section class="p-complete switch">
    <h2 class="p-complete__title">送信完了</h2>
    <p class="p-complete__text">お問い合わせありがとうございます、<br class="switch__display--sp" />送信が完了しました</p>
    <p class="p-complete__button"><a href="/" class="p-complete__link">トップに戻る</a></p>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: '送信完了しました' + ' - nuxt.jsで作るポートフォリオ用のブログサイト。',
      meta: [
        { hid: 'robots', name: 'robots', content: 'noindex, nofollow' }
      ]
    }
  },
  mounted() {
    setTimeout(() => {
      window.location.href = '/'
    }, 10000)
  }
}
</script>

<style lang="scss">
@import '@/assets/sass/variables';
@import '@/assets/sass/mixins';

.p-complete {
  @include container;

  &__title {
    @include title;
  }

  &__text {
    text-align: center;
    margin-top: 48px;
    @media screen and (max-width: $SP) {
      margin-top: 16px;
    }
  }

  &__link {
    display: block;
    max-width: 320px;
    font-size: 1.8rem;
    color: #fff;
    background: $black;
    text-decoration: none;
    text-align: center;
    margin: 48px auto 0;
    padding: 16px 0;
    border-radius: 4px;
    @media screen and (max-width: $SP) {
      max-width: 100%;
    }

    &:visited {
      color: #fff;
    }
  }
}
</style>