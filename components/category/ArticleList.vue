<template>
  <section class="p-archive">
    <h2 v-if="$route.name === 'index'" class="p-archive__title">WORKS</h2>
    <ul class="p-archive__list">
      <li v-for="post in posts" :key="post.slug" class="p-archive__item">
        <nuxt-link :to="{ name: 'post-slug', params: { slug: post.slug } }" class="p-archive__link">
          <div class="p-archive__photo"><img src="@/assets/images/top/img_archive_01.svg" alt="" class="p-archive__image"></div>
          <p class="p-archive__time">{{ $dayjs(post.updatedAt).format('YYYY/MM/DD') }}</p>
          <p class="p-archive__categoryName">{{ getCatName(post.category) }}</p>
          <p class="p-archive__name">{{ post.title }}</p>
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
import Vue from 'vue';
import taxonomy from '@/taxonomy';

export default Vue.extend({
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      category: [...taxonomy.category]
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
.p-archive {
  max-width: 1280px;
  margin: 0 auto;
  padding: 48px 0 64px;
  @media screen and (max-width: $SP) {
    padding: 32px 0 64px;
  }

  &__title {
    font-size: 2.4rem;
    font-weight: $fontWeightBold;

    & + [class*='__list'] {
      margin-top: 24px;
    }
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 48px 48px;
    @media screen and (max-width: 1050px) {
      gap: 48px 16px;
    }
    @media screen and (max-width: $SP) {
      display: block;
    }
  }

  &__item {
    width: calc((100% - 144px) / 4);
    @media screen and (max-width: 1050px) {
      width: calc((100% - 48px) / 4);
    }
    @media screen and (max-width: $SP) {
      width: 100%;

      & + & {
        margin-top: 48px;
      }
    }
  }

  &__link {
    display: block;
    color: $black;
    text-decoration: none;

    &:visited {
      color: $black;
    }
  }

  &__image {
    border-radius: 8px;
  }

  &__name {
    font-size: 1.6rem;
    font-weight: $fontWeightBold;
    margin-top: 24px;
    @media screen and (max-width: $SP) {
      margin-top: 8px;
    }
  }

  &__categoryName {
    display: inline-block;
    font-size: 1.2rem;
    color: #ccc;
    background: #fff;
    padding: 2px 16px;
    border: 1px solid #ccc;
    border-radius: 50px;
    @media screen and (max-width: $SP) {
      margin-top: 0;
    }
  }

  &__time {
    font-size: 1.2rem;
    color: #bbb;
    text-align: right;
    margin-top: 24px;
    @media screen and (max-width: $SP) {
      margin-top: 8px;
    }
  }
}
</style>