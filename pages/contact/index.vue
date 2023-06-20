<template>
  <section class="p-contact switch">
    <h2 class="p-contact__title">お問い合わせ</h2>
    <p class="p-contact__lead">フォームに必要事項を入力し、<br class="switch__display--sp" />送信ボタンをおしてください。</p>
    <div class="p-contact__contents">
      <ValidationObserver ref="obs" v-slot="{ invalid, validated }" tag="form" action="mail-sent" method="POST" name="contact" data-netlify="true" data-netlify-honeypot="bot-field" class="p-contact__form" :class="sendingClass">
        <!-- <input type="hidden" name="form-name" class="p-contact__input--hidden"> -->

        <div class="p-contact__item">
          <label for="username" class="p-contact__label">お名前</label>
          <ValidationProvider v-slot="{ errors }" rules="required|max:100" name="お名前">
            <input type="text" id="username" name="username" v-model="username" autocomplete="username" class="p-contact__input">
            <p v-if="errors.length" class="p-contact__errorText">{{ errors[0] }}</p>
          </ValidationProvider>
        </div>

        <div class="p-contact__item">
          <label for="katakana" class="p-contact__label">フリガナ</label>
          <ValidationProvider v-slot="{ errors }" rules="required" name="フリガナ">
            <input type="text" id="katakana" name="katakana" v-model="katakana" class="p-contact__input">
            <p v-if="errors.length" class="p-contact__errorText">{{ errors[0] }}</p>
          </ValidationProvider>
        </div>

        <div class="p-contact__item">
          <label for="usermail" class="p-contact__label">メールアドレス</label>
          <ValidationProvider v-slot="{ errors }" rules="required|email|max:256" name="メールアドレス">
            <input type="text" id="usermail" name="usermail" v-model="usermail" autocomplete="usermail" class="p-contact__input">
            <p v-if="errors.length" class="p-contact__errorText">{{ errors[0] }}</p>
          </ValidationProvider>
        </div>

        <div class="p-contact__item">
          <label for="message" class="p-contact__label">お問い合わせ内容</label>
          <ValidationProvider v-slot="{ errors }" rules="required|max:2000" name="お問い合わせ内容">
            <textarea id="message" name="message" v-model="message" rows="5" class="p-contact__textarea"></textarea>
            <p v-if="errors.length" class="p-contact__errorText">{{ errors[0] }}</p>
          </ValidationProvider>
        </div>

        <div v-show="false" class="p-contact__item">
          <label for="message" class="p-contact__label">スパムではない場合空欄</label>
          <input type="text" name="bot-field" v-model="botField" />
        </div>

        <div class="p-contact__item">
          <button type="submit" :disabled="invalid || !validated" :class="invalid || !validated ? 'p-contact__submit' : 'p-contact__submit isActive'">送信</button>
        </div>
      </ValidationObserver>
    </div>
  </section>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import Meta from '@/mixins/meta_01';

export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: 'お問い合わせ',
        description: 'お問い合わせページ'
      },
      username: '',
      katakana: '',
      usermail: '',
      message: '',
      botField: '',
      isSubmit: false,
      isSending: false,
      isError: false,
      completeMessage: ''
    }
  },
  computed: {
    sendingClass() {
      return {
        'is-sending' : this.isSending,
        'is-error': this.isError,
        'is-complete': this.isSubmit
      }
    }
  },
  methods: {
    onSubmit() {
      if (this.isSending) return
      this.isSending = true
      this.completeMessage = '送信処理中...'
      const params = new URLSearchParams()
      params.append('form-name', 'contact')
      params.append('username', this.username)
      params.append('katakana', this.katakana)
      params.append('usermail', this.usermail)
      params.append('message', this.message)
      if (this.botField) params.append('bot-field', this.botField)
      this.$axios.$post('/', params).then(() => {
        this.completeMessage = 'お問い合わせを送信しました'
        this.resetForm()
        this.isSubmit = true
      }).catch(err => {
        this.completeMessage = 'お問い合わせの送信が失敗しました'
        this.isError = true
      }).finally(() => {
        this.isSending = false
      })
    },
    resetForm() {
      this.username = ''
      this.katakana = ''
      this.usermail = ''
      this.message = ''
      this.isError = false
      this.$refs.observer.reset()
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
