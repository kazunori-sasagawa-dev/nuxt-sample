<template>
  <header class="l-header">
    <div class="l-header__inner">
      <p class="l-header__title"><a href="/" class="l-header__titleLink">nuxtブログ</a></p>
      <nav class="l-header__navigation">
        <ul class="l-header__list">
          <li class="l-header__item">works</li>
          <li class="l-header__item">profile</li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">
@import '@/assets/sass/variables.scss';
.l-header {
  position: fixed;
  top: 24px;
  left: 0;
  z-index: 10;
  width: 100%;
  padding: 0 24px;

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1280px;
    height: 72px;
    background: #fff;
    margin: 0 auto;
    padding: 0 24px;
    @media screen and (max-width: $SP) {
      height: 64px;
      padding: 0 16px;
    }
  }

  &__titleLink {
    font-family: 'Nico Moji';
    font-size: 2.4rem;
    color: $black;
    text-decoration: none;
    @media screen and (max-width: $SP) {
      font-size: 1.8rem;
    }

    &:visited {
      color: $black;
    }
  }

  &__list {
    display: flex;
  }

  &__item {
    & + & {
      margin-left: 24px;
    }
  }
}
</style>
