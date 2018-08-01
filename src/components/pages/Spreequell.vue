<template lang="pug">
#spreequell.page
  section.hero
    .hero-body.no-padding
      .columns
        .column.is-4.is-offset-1.desktop-title.is-hidden-mobile
          a(href="/cases#spreequell")
            img.back-btn(src='../../assets/svg/back_btn.svg')
          h1.case-title Spreequell
          .subtitle Volle Pulle Leben
        .column.is-10.hero-image
          img(src='../../assets/img/cases/spreequell/heldisch-digital-berlin-websitegestatung-spreequell.png').is-pulled-right.hero-img
        .mobile-title.is-hidden-desktop
          img.back-btn(src='../../assets/svg/back_btn.svg')
          h1.case-title Spreequell
          .subtitle Stark für Ärtze
  section.section.aufgabe
    .container
      .columns
        .column.is-6.is-offset-3
          h3 Aufgabe
          .subtitle Entwicklung, Gestaltung und Programmierung einer Website passend zur parallel laufenden Print- Kampagne mit der Möglichkeit, sich als User sein eigenes Flaschen-Label zu generieren und im Rahmen eines Gewinnspiels einzusenden.
      .columns
        .column.is-3.is-offset-3
          h4 Umzetzung
          p Gestaltung und Programmierung einer responsiven Website mit einem mehrstufigen Flaschen- Label-Generator
        .column.is-3.is-offset-1
          h4 Features
          ul
            li CMS Graphcool
            li Responsive
            li Integriertes Tracking
            li Google Firebase
            li Lazy load
            li Labelgenerator

  section.section.intro2
    .container.columns
      .column.is-4.is-offset-2
        h2 Volle Pulle Technik
        p Die jährliche Spreequell- Kampagne „Volle Pulle Leben“ wird stets digital begleitet. Auf der Kampagnen-Website können Besucher ihr eigenes Flaschen-Label kreieren und für einen guten Zweck einreichen.
      .column.is-4.is-offset-1
        img(src='../../assets/img/cases/spreequell/heldisch-digital-berlin-website-cms-spreequell-1.png' alt='Heldisch Website Spreequell')
  section.section.showcase
    .columns
      .column.is-5.is-offset-1
        img(src='../../assets/img/cases/spreequell/heldisch-digital-berlin-websitegestatung-spreequell-2.png' alt='Heldisch Website Content Management System Spreequell')
      .column.is-4
        h3 Gestaltung eines eigenen Flaschen- Labels:
        p Auswahl des gewünschten Geschmacks (Farbe), der Mundform sowie Eingabe eines Spruches. Automatische Anpassung der Schriftgröße je nach Textlänge. Die besten Sprüche wurden in Supermärkten
  section.section.showcase
    .columns
      .column.is-4.is-offset-2
        h3 Handling der Einsendungen:
        p Übersichtliche Darstellung der eingesendeten Daten mit der Möglichkeit diese zu korrigieren und freizuschalten. Der Teilnehmer bekommt automatisch eine Benachrichtigung via E-Mail, sobald seine Einsendung freigeschaltet wird.
      .column.is-5
        img(src='../../assets/img/cases/spreequell/heldisch-digital-berlin-website-cms-spreequell-3.png' alt='Heldisch Website Spreequell')
  section.section.showcase
    .columns
      .column.is-5
        img(src='../../assets/img/cases/spreequell/heldisch-digital-berlin-websiteprogrammierung-spreequell-4.png' alt='Heldisch Website Spreequell')
      .column.is-4
        h3 Trinken für den guten Zweck:
        p Mit jeder freigeschalteten Einsendung wird 1 € an ausgewählte Jugendprojekte gespendet. Der Counter auf der Startseite zeigt die tagesaktuelle Spendensumme an..

  section.section.fakten-image.no-padding
    img(src='../../assets/img/cases/spreequell/mock_up_bottom@2x.png').bottom-img
    img(src='../../assets/img/cases/spreequell/image_bottom_bg.jpg').bottom-img-bg
  section.section.fakten
    .columns
      .column.is-3.is-offset-1
        h2
          | FAK
          br
          | TEN
      .column.is-4
        h3 2.000
        .subtitle Einsendungen
        p Die kreativsten Labels wurden produziert und in Umlauf gebracht.
      .column.is-4
        h3 4.000
        .subtitle Euro
        p Über 4.000,00 € Euro wurden über den Labelgenerator eingenommen und an zwei Berliner Jugendprojekte gespendet.
  section.section.last
    .columns
      .column.is-8.is-offset-1
        p
        | Du möchtest mit uns arbeiten?
        br
        strong Erzähle uns von deinem Projekt!
      .column.is-3
        strong Heldisch Digital
        p
          | Gneisnaustraße 44/45
          br
          | 10961 Berlin
          br
          | 030 666 666 666
</template>

<script>
export default {
  name: 'Spreequell',
  beforeCreate: function() {
      document.body.className = 'spreequell';
  }
}
</script>

<style lang="sass" scoped>
@import "~bulma/sass/utilities/_all"
@import "~bulma/sass/base/helpers"
@import "../../assets/sass/variables.sass"


.hero
  background: $light-blue
  .container
    display: flex
    align-items: center
  img.hero-img
    margin-bottom: -6vw
    +mobile
      margin-bottom: 1em
  h1.case-title
    text-transform: none
    font-weight: 500
    color: #fff
    font-size: 1.5rem!important
    line-height: 1.2
  .subtitle
    font-family: 'Uni'
    font-style: normal
    font-size: 1.5rem
    font-weight: 500
  .back-btn
    width: 40px
    height: auto
  +mobile
    .columns
      margin: 0
    .hero-image
      padding: 0
  .mobile-title
    margin: 1em
  .desktop-title
    align-self: center
.aufgabe
  // padding: 6em 0
  background: #f9f9f9
  h3
    font-family: 'Cardo'
    font-style: normal
    color: $red
    margin-bottom: .3em
  .subtitle
    font-family: 'Uni'
    font-style: normal
    font-size: 1.5rem
    font-weight: 500
    margin-bottom: .5em
    color: #555
    +mobile
      font-size: 1.2rem
      line-height: 1.4
  h4
    font-family: 'Cardo'
    color: #666
    margin-bottom: .3em

  ul
    list-style-type: disc
    margin-left: 1em

.intro2
  font-size: 1.4rem
  line-height: 1.4
  .container
    align-items: center
  h2
    font-family: 'Cardo'
    color: $red
    margin-bottom: .5em
    font-style: italic
  p
    font-weight: 500
    +mobile
      font-size: 1.2rem

.showcase
  font-size: 1.3rem
  h3
    font-size: 1.6em
    font-weight: 900
    color: $blue
    line-height: 1.2
    margin-bottom: 1em
  .columns
    align-items: center
.fakten-image
  position: relative
  margin-bottom: -1rem
  img.bottom-img
    position: absolute
    bottom: -5rem
    right: 0
    width: 50vw
    +mobile
      width: 75vw
.fakten
  background: #333
  color: #fff
  padding-top: 9rem
  padding-bottom: 6rem
  h2
    font-weight: 900
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
section.last
  +mobile
    text-align: center
    font-size: 1.2rem
</style>
