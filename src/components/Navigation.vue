<template lang="pug">
#navigation
  .nav
    router-link(to='/') Wir
    router-link(to='/denke') Denke
    router-link(to='/cases') Cases
    router-link(to='/#leistungen') Leistungen
    router-link(to='/#team') Team
    router-link(to='/#kontakt') Kontakt
</template>

<script>

export default {
  name: 'Navigation',
  props: ['color']
}
</script>

<style lang="sass" scoped>


</style>
