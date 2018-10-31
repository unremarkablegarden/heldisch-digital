<template lang="pug">
  #app
    mast-head
    router-view
    TheFooter
</template>

<script>
  import MastHead from '@/components/MastHead'
  import Navigation from '@/components/Navigation'
  import SiteMenu from '@/components/SiteMenu'
  import TheFooter from '@/components/TheFooter'

  export default {
    name: 'app',
    components: { MastHead, Navigation, SiteMenu, TheFooter }
  }
</script>

<style lang="sass">
  @import './assets/sass/bulma.sass'
  @import './assets/sass/master.sass'
</style>
