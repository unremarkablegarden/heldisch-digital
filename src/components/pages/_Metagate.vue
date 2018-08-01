<template lang="pug">
#hartmannbund.page
  section.hero.is-medium
    .hero-body.no-padding
      .container.columns
        .column.is-4.is-offset-1
          img.back-btn(src='../../assets/svg/back_btn.svg')
          h1.case-title Hartmannbund
          .subtitle Stark für Artze
        .column.is-10
          img(src='../../assets/img/cases/hartmannbund/hero@2x.png').is-pulled-right
  section.section.aufgabe
    .container
      .columns
        .column.is-6.is-offset-3
          h3 Aufgabe
          .subtitle Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit. Nam dapibus nisl vitae elit fringilla rutrum.
      .columns
        .column.is-3.is-offset-3
          h4 Lösung
          p Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. 	Ut porta viverra est, ut dignissim elit. Nam dapibus nisl vitae elit fringilla rutrum.
        .column.is-2.is-offset-1
          h4 Weg
          ul
            li Sed sapien metus
            li nec pharetra id
            li tempor a tortor
            li Pellentesque non
            li nec pharetra id
            li tempor a tortor
            li Pellentesque non dignissim
  section.section.phone
    .container.columns
      .column.is-4.is-offset-3
        h2 Lorem ipsum, Keule!
        p Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metus.
        p Sed sollicitudin ipsum quis nunc sollicitudin ultrices. Donec euismod scelerisque ligula.
      .column.is-4.is-offset-1
        img(src='../../assets/img/metagate-phone.jpg')
  section.section.screenshot.no-padding
    .columns
      .column.is-7
        img(src='../../assets/img/metagate-screen-left.jpg')
      .column.is-4
        h3 Cras quis nulla commodo, aliquam lectus sed, blandit augue.
        p Sed sollicitudin ipsum quis nunc sollicitudin ultrices. Donec euismod scelerisque ligula.
  section.section.screenshot.no-padding
    .columns
      .column.is-4.is-offset-1
        h3 Cras quis nulla commodo, aliquam lectus sed, blandit augue.
        p Sed sollicitudin ipsum quis nunc sollicitudin ultrices. Donec euismod scelerisque ligula.
      .column.is-7
        img(src='../../assets/img/metagate-screen-right.jpg')
  section.section.screenshot
    .container.columns
      .column.is-4.is-offset-1
        img(src='../../assets/img/metagate-logo.png')
      .column.is-4.is-offset-1
        h3 Curabitur lobortis id lorem id bibendum.
        p Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metus. Sed sollicitudin ipsum quis nunc sollicitudin ultrices. Donec euismod scelerisque ligula.
  section.section.puter.no-padding
    img(src='../../assets/img/metagate-puter.png').lappie
    img(src='../../assets/img/metagate-puter-bg.jpg').puter-bg
  section.section.fakten
    .columns
      .column.is-3.is-offset-1
        h2
          | FAK
          br
          | TEN
      .column.is-4
        h3 120.000
        .subtitle Aufrufe
        p Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metus. Sed sollicitudin ipsum quis nunc sollicitudin ultrices. Donec euismod scelerisque ligula.
      .column.is-4
        h3 8.000
        .subtitle Teilnehmer
        p Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper.
  section.section.last
    .columns
      .column.is-8.is-offset-1
        p
        | Du möchtest mit uns arbeiten?
        br
        strong Erzähle uns von deinem Projekt!
      .column.is-3
        strong Erzähle uns von deinem Projekt!
        p
          | Gneisnaustraße 44/45
          br
          | 10961 Berlin
          br
          | 030 666 666 666
</template>

<script>
export default {
  name: 'Hartmannbund'
}
</script>

<style lang="sass" scoped>
@import "../assets/sass/variables.sass"

.hero
  background: #e2d2e4
  .container
    display: flex
    align-items: center
  h1.case-title
    text-transform: none
    font-weight: bold
    color: #fff
    font-size: 1.5rem!important
  .subtitle
    font-family: 'Uni'
    font-style: normal
    font-size: 1.5rem
    font-weight: bold
  .back-btn
    width: 40px
    height: auto

.aufgabe
  padding: 6em 0
  background: #f9f9f9
  h3
    font-family: 'Cardo'
    font-style: normal
    color: $red
  .subtitle
    font-family: 'Uni'
    font-style: normal
    font-size: 1.5rem
    font-weight: bold
  h4
    font-family: 'Cardo'
    color: #666
  ul
    list-style-type: disc

.phone
  .container
    align-items: center
  h2
    font-family: 'Cardo'
    color: $red
    margin-bottom: .5em
  p
    font-weight: bold

.screenshot
  margin: 6rem 0
  h3
    font-weight: bold
    color: $lila
    line-height: 1.2
    margin-bottom: 1em
  .columns
    align-items: center

.puter
  position: relative
  margin-bottom: -1rem
  img.lappie
    position: absolute
    bottom: -5rem
    right: 0
    width: 70vw
  img.puter-bg

.fakten
  background: #333
  color: #fff
  padding-top: 9rem
  padding-bottom: 6rem
  h2
    font-weight: bold
    font-size: 7em
    line-height: .8
  h3
    font-size: 3em
    font-style: italic
    font-weight: bold
    line-height: 1
  .subtitle
    margin-top: -.5em
    color: #fedddd
    font-size: 3em
  p
    font-size: 1.2rem

.no-padding
  padding: 0
</style>
