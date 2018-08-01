<template lang="pug">
  #app
    mast-head
    router-view
</template>

<script>
  import MastHead from '@/components/MastHead'
  import Navigation from '@/components/Navigation'
  import SiteMenu from '@/components/SiteMenu'

  export default {
    name: 'app',
    components: { MastHead, Navigation, SiteMenu }
  }
</script>

<style lang="sass">
  @import './assets/sass/bulma.sass'
  @import './assets/sass/master.sass'
  @import './assets/sass/variables.sass'
</style>
