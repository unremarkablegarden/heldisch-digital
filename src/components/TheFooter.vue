<template lang="pug">
#footer
  section.section.footy#kontakt
    .columns
      .column.is-8.is-offset-1
        p
        | Sie möchten mit uns arbeiten?
        br
        strong
          a(href='mailto:404@heldisch-digital.com') Erzählen Sie uns von Ihrem Projekt!
      .column.is-3
        strong HELDISCH Digital
        p
          | Unit der HELDISCH GmbH
          br
          | Gneisenaustraße 44/45
          br
          | 10961 Berlin
          br
          | 030 6165 738-0
  section.bottombar
    .columns
      .column.is-8.is-offset-1
        a(href='/datenschutz') Datenschutz
        a(href='/impressum') Impressum
</template>

<script>

export default {
  name: 'TheFooter'
}
</script>

<style lang="sass" scoped>
  @import "~bulma/sass/utilities/_all"
  @import "~bulma/sass/base/helpers"

  a
    color: #4a4a4a
    &:hover
      color: #111
  section.footy
    text-align: left
    font-size: 1rem
    +mobile
      text-align: center
      font-size: 1.2rem
  section.bottombar
    background: #f1f1f1
    font-size: .9em
    padding: .75em
    a
      font-family: 'Cardo'
      font-style: italic
      color: #aaa
      margin-right: 3em
    a:hover
      color: #666
</style>
