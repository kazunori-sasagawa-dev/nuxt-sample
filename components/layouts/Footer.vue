<template>
  <footer class="l-footer">
    <div class="l-footer__inner">
      <p class="l-footer__copyright">Copyright &copy; sasagawa-kazunori All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss">
.l-footer {
  &__inner {
    max-width: 1280px;
    margin: 0 auto;
    padding: 24px 0 72px;
    border-top: 1px solid #ccc;
  }

  &__copyright {
    font-size: 1.2rem;
    text-align: center;
  }
}
</style>
