<template lang="pug">
#hartmannbund.page
  section.hero
    .hero-body.no-padding
      .columns
        .column.is-4.is-offset-1.desktop-title.is-hidden-mobile
          a(href="/cases#hartmannbund")
            img.back-btn(src='../../assets/svg/back_btn.svg')
          h1.case-title Hartmannbund
          .subtitle Verband der Ärzte Deutschlands e.V.
        .column.is-10.hero-image
          img(src='../../assets/img/cases/hartmannbund/heldisch-digital-berlin-Hartmannbund-website-Event-App.png' alt="heldisch-digital-Hartmannbund-website-Event-App").is-pulled-right.hero-img
        .mobile-title.is-hidden-desktop
          img.back-btn(src='../../assets/svg/back_btn.svg')
          h1.case-title Hartmannbund
          .subtitle Stark für Ärtze
  section.section.aufgabe
    .container
      .columns
        .column.is-6.is-offset-3
          h3 Aufgabe
          .subtitle Entwicklung, Gestaltung und Programmierung einer Event-App, die die Teilnehmer der Hartmannbund-Events durch die jeweilige Veranstaltung führt, die notwendigen Lehrunterlagen und Informationen liefert.
      .columns
        .column.is-3.is-offset-3
          h4 Umzetzung
          p Gestaltung und Programmierung einer responsiven Multi-Microsite
        .column.is-2.is-offset-1
          h4 Features
          ul
            li CMS keystone
            li Responsive
            li Multiple
            li ...
  section.section.intro2
    .container.columns
      .column.is-4.is-offset-2
        h2 Erweiterbares Grundmenü:
        p Events können leicht erstellt, archiviert und/oder gelöscht werden.
      .column.is-4.is-offset-1
        img(src='../../assets/img/cases/hartmannbund/heldisch-digital-berlin-Hartmannbund-website-Event-App-1.png' alt="Heldisch digital Berlin Hartmannbund Website Event App 1")
  section.section.showcase
    .columns
      .column.is-5.is-offset-1
        img(src='../../assets/img/cases/hartmannbund/heldisch-digital-berlin-Hartmannbund-website-Event-App-2.png' alt="Heldisch digital Berlin Hartmannbund Website Event App 2")
      .column.is-4
        h3 Erstellung der Events:
        p Jedes Event erhält automatisch seine eigenen URL und kann in seinem eigenen Content Management System bearbeitet werden.
  section.section.showcase
    .columns
      .column.is-4.is-offset-2
        h3 Übersichtlich: keine unnötige Verwirrung.
        p Die Teilnehmer finden in dieser App alle relevanten Dokumente und Informationen wie Tagesprogramm, Akteure und können zwischen diesen schnell hin- und herswitchen.
      .column.is-5
        img(src='../../assets/img/cases/hartmannbund/heldisch-digital-berlin-Hartmannbund-website-Event-App-3.png' alt="Heldisch digital Berlin Hartmannbund Website Event App 3")
  section.section.showcase
    .container.columns
      .column.is-4.is-offset-1
        img(src='../../assets/img/cases/hartmannbund/heldisch-digital-berlin-Hartmannbund-website-Event-App-4.png' alt="Heldisch digital Berlin Hartmannbund Website Event App 4")
      .column.is-4.is-offset-1
        h3 Alle Informationen auf einem Blick:
        p Die App liefert das Programm, Informationen zu den einzelnen Workshops und Rednern, Adressen sowie Zugang zu den Lehr-Unterlagen, die nicht mehr ausgedruckt werden müssen. Nach dem Event können sich die Besucher der Veranstaltung im dafür vorgesehenen Media-Bereich Fotos und Filme anschauen, die während der Veranstaltung entstanden sind.
  section.section.fakten-image.no-padding
    img(src='../../assets/img/cases/hartmannbund/hand_bottom.png').bottom-img
    img(src='../../assets/img/cases/hartmannbund/image_bottom_bg.jpg').bottom-img-bg
  section.section.fakten
    .columns
      .column.is-3.is-offset-1
        h2
          | FAK
          br
          | TEN
      .column.is-4
        h3 20.000
        .subtitle Teilnehmer
        p Im Laufe der Zeit wurden mehr als 20 Events mit der App generiert. Bei durchschnittlich 100 Besuchern pro Event und zahlreichen Informationen,
      .column.is-4
        h3 300.000
        .subtitle Ausdrucke
        p die u.a. als PDF in der App bereitgestellt werden, konnten bereits über 300.000 Seiten Papier <i>eingespart</i> werden.
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
  name: 'Hartmannbund',
  beforeCreate: function() {
      document.body.className = 'hartmannbund';
  }
}
</script>

<style lang="sass" scoped>
@import "~bulma/sass/utilities/_all"
@import "~bulma/sass/base/helpers"
$red: #ff615d
$light-blue: #bbdef7

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
    color: $light-green
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
