import { extend } from 'vee-validate'
import { required, email, max } from 'vee-validate/dist/rules'

// 必須
extend('required', {
  ...required,
  message: '必須項目です'
})

// メールアドレス
extend('email', {
  ...email,
  message: 'メールアドレスを半角英数字で入力してください'
})

// 文字数上限
extend('max', {
  ...max,
  message: '文字数上限に達しました'
})