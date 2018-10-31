<template lang="pug">
#asd.page
  section.hero
    .hero-body.no-padding
      .columns
        .column.is-5.is-offset-1.desktop-title.is-hidden-mobile
          a(href="/cases#asd")
            img.back-btn(src='../../assets/svg/back_btn.svg')
          h1.case-title Arnecke Siebeth Dabelstein
          .subtitle Die Wirtschaftskanzlei
        .column.is-8.hero-image
          img(src='../../assets/img/cases/asd/heldisch-digital-berlin-arnecke-sibeth-dabelstein-website.png' alt="Heldisch digital Berlin Arnecke Sibeth Dabelstein Website").is-pulled-right.hero-img
        .mobile-title.is-hidden-desktop
          img.back-btn(src='../../assets/svg/back_btn.svg')
          h1.case-title Arnecke Siebeth Dabelstein
          .subtitle Die Wirtschaftskanzlei
  section.section.aufgabe
    .container
      .columns
        .column.is-6.is-offset-3
          h3 Aufgabe
          .subtitle Entwicklung, Gestaltung und Programmierung einer suchmaschinenoptimierten Website im Zuge der Kanzlei-Fusion von Arnecke Sibeth und Dabelstein & Passehl unter Beachtung der verschiedenen ursprünglichen Corporate Designs
      .columns
        .column.is-3.is-offset-3
          h4 Umzetzung
          p Gestaltung und Programmierung einer zweisprachigen responsiven Website
        .column.is-4
          h4 Features
          ul
            li CMS Wordpress
            li Diverse integrierte SEO-Tools
            li Automatisierter sowie manueller language switcher
            li Schnittstelle zu den Social Media Kanälen
            li Lazy load
            li Random-Funktionen
            li Schnittstelle für automatisierten Upload von Publikationen
            li Integriertes Tracking
  section.section.intro2
    .container.columns
      .column.is-4.is-offset-2
        h2 Treffen sich drei Anwälte in der Bar ...
        p Wenn drei international tätige Anwaltskanzleien beschließen zu fusionieren und unter einer gemeinsamen Dachmarke zu aggieren, dann passiert sowas ...
      .column.is-4.is-offset-1
        img(src='../../assets/img/cases/asd/heldisch-digital-berlin-arnecke-sibeth-dabelstein-website-1.png' alt="Heldisch digital Berlin Arnecke Sibeth Dabelstein Website 1")
  section.section.showcase
    .columns
      .column.is-5.is-offset-1
        img(src='../../assets/img/cases/asd/heldisch-digital-berlin-arnecke-sibeth-dabelstein-website-2.png' alt="Heldisch digital Berlin Arnecke Sibeth Dabelstein Website 2")
      .column.is-4
        h3 Intuitive Navigation, klarer Look
        p Strukturierte Darstellung einer Vielzahl von Informationen, Anwälte, Kompetenzen, Publikationen, News, ...
  section.section.showcase
    .columns
      .column.is-4.is-offset-2
        h3 Für die Zukunft: Career & Recruiting
        p Ein besonderes Augenmerk wurde auf die Gewinnung von jungen Talenten gerichtet. Die eingesetzten Funktionen sowie der entsprechende Content basieren auf Analysen von Recruiting-Experten.
      .column.is-5
        img(src='../../assets/img/cases/asd/heldisch-digital-berlin-arnecke-sibeth-dabelstein-website-3.png' alt="Heldisch digital Berlin Arnecke Sibeth Dabelstein Website 3")

  section.section.fakten-image.no-padding
    img(src='../../assets/img/cases/asd/heldisch-digital-berlin-arnecke-sibeth-dabelstein-website-4.png' alt="Heldisch digital Berlin Arnecke Sibeth Dabelstein Website 4").bottom-img
    img(src='../../assets/img/cases/asd/image_bottom_bg.jpg' alt="Heldisch digital Berlin Arnecke Sibeth Dabelstein Website 5").bottom-img-bg
  section.section.fakten
    .columns
      .column.is-3.is-offset-1
        h2
          | FAK
          br
          | TEN
      .column.is-4
        h3 300
        .subtitle Anwaltseiten
        p Die Herausforderung dieses Projektes war angesichts von über 300 Anwaltsprofilen, 6 Standorten und einer Vielzahl von Kompetenzen eine
      .column.is-4
        h3 6
        .subtitle Standorte
        p Website zu entwickeln, die benutzerfreundlich ist und den ästhetischen Ansprüchen dieses Segmentes gerecht wird.
</template>

<script>
export default {
  name: 'Asd',
  beforeCreate: function() {
      document.body.className = 'asd';
  }
}
</script>

<style lang="sass" scoped>
@import "~bulma/sass/utilities/_all"
@import "~bulma/sass/base/helpers"
$red: #ff615d
$light-green: #d0e4e0
$light-blue: #bbdef7
$dark-blue: #1A4667
$blue: #2C90E9
$light-grey: #DEDEDE

.hero
  background: $light-grey
  height: calc(100vh - 155px)
  +mobile
    height: calc(100vh - 125px)
  .container
    display: flex
    align-items: center
  img.hero-img
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
  padding: 8rem 1.5rem
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
    color: $dark-blue
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
    width: 70vw
    +mobile
      width: 75vw
.bottom-img-bg
  width: 100%
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
