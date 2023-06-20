<template>
  <section class="p-contact switch">
    <h2 class="p-contact__title">お問い合わせ</h2>
    <p class="p-contact__lead">フォームに必要事項を入力し、<br class="switch__display--sp" />送信ボタンをおしてください。</p>
    <div class="p-contact__contents">
      <form method="POST" name="contact" data-netlify="true" data-netlify-honeypot="bot-field" class="p-contact__form">

        <div class="p-contact__item">
          <label for="username" class="p-contact__label">お名前</label>
          <input type="text" id="username" name="username" autocomplete="username" class="p-contact__input">
        </div>

        <div class="p-contact__item">
          <label for="katakana" class="p-contact__label">フリガナ</label>
          <input type="text" id="katakana" name="katakana" autocomplete="katakana" class="p-contact__input">
        </div>

        <div class="p-contact__item">
          <label for="usermail" class="p-contact__label">メールアドレス</label>
          <input type="text" id="usermail" name="usermail" autocomplete="usermail" class="p-contact__input">
        </div>

        <div class="p-contact__item">
          <label for="message" class="p-contact__label">お問い合わせ内容</label>
          <textarea id="message" name="message" rows="5" class="p-contact__textarea"></textarea>
        </div>

        <!-- <div v-show="false" class="p-contact__item">
          <label for="message" class="p-contact__label">スパムではない場合空欄</label>
          <input type="text" name="bot-field" v-model="botField" />
        </div> -->

        <div class="p-contact__item">
          <button type="submit" class="p-contact__submit isActive">送信</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import Meta from '@/mixins/meta_01';

export default {
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: 'お問い合わせ',
        description: 'お問い合わせページ'
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/sass/variables';
@import '@/assets/sass/mixins';

.p-contact {
  @include container;

  &__title {
    @include title;
  }

  &__lead {
    text-align: center;
    margin-top: 48px;
    @media screen and (max-width: $SP) {
      margin-top: 16px;
    }
  }

  &__contents {
    max-width: 650px;
    background: #fff;
    margin: 48px auto 0;
    padding: 32px;
    @media screen and (max-width: $SP) {
      background: none;
      margin-top: 16px;
      padding: 0;
    }
  }

  &__item {
    & + & {
      margin-top: 32px;
    }
  }

  &__label {
    display: block;
    font-weight: $fontWeightBold;
  }

  &__input {
    width: 100%;
    background: #eee;
    margin-top: 4px;
    padding: 8px
  }

  &__textarea {
    @extend .p-contact__input;
  }

  &__errorText {
    font-size: 1.2rem;
    color: $red;
    margin-top: 4px;
  }

  &__submit {
    display: block;
    width: 320px;
    font-size: 1.8rem;
    background: #eee;
    text-align: center;
    margin: 0 auto;
    padding: 16px;
    transition: 0.8s;

    &.isActive {
      color: #fff;
      background: $black;

      &:hover {
        @media screen and (min-width: 751px) {
          opacity: 0.7;
        }
      }
    }
  }
}
</style>
