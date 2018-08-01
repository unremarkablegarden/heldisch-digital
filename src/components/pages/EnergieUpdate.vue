<template lang="pug">
#energie-update.page
  section.hero
    .hero-body.no-padding
      .columns
        .column.is-4.is-offset-1.desktop-title.is-hidden-mobile
          a(href="/cases#energie-update")
            img.back-btn(src='../../assets/svg/back_btn.svg')
          h1.case-title Agentur für erneuerbare Energien
          .subtitle Energie Update!
        .column.is-10.hero-image
          img(src='../../assets/img/cases/energie-update/hero@2x.png').is-pulled-right.hero-img
        .mobile-title.is-hidden-desktop
          img.back-btn(src='../../assets/svg/back_btn.svg')
          h1.case-title Agentur für erneuerbare Energien
          .subtitle Energie Update!
  section.section.aufgabe
    .container
      .columns
        .column.is-6.is-offset-3
          h3 Aufgabe
          .subtitle Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit. Nam dapibus nisl vitae elit fringilla rutrum.
      .columns
        .column.is-3.is-offset-3
          h4 Lösung
          p Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque.   Ut porta viverra est, ut dignissim elit. Nam dapibus nisl vitae elit fringilla rutrum.
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
  section.section.intro2
    .container.columns
      .column.is-4.is-offset-2
        h2 It's a date, doctor
        p Die jährlich stattfindende Hauptversammlung ist das höchste Beschlussgremium des energie-updatees, bei dem die rund 70 Delegierten den Haushalt des Verbandes beschließen und die Ziele des kommenden Geschäftsjahres verhandeln.
      .column.is-4.is-offset-1
        img(src='../../assets/img/cases/energie-update/placeholder_01@2x.png')
  section.section.showcase
    .columns
      .column.is-5.is-offset-1
        img(src='../../assets/img/cases/energie-update/placeholder_02@2x.png')
      .column.is-4
        h3 Nachhaltig: keine unnötig gedruckten Papiere mehr.
        p Diese App ermöglicht es den bis zu 130 Teilnehmern dieses Top-Events, auf die üblichen Printmaterialien, die eine solche Veranstaltung mit sich bringt, gänzlich zu verzichten.
  section.section.showcase
    .columns
      .column.is-4.is-offset-2
        h3 Übersichtlich: keine unnötige Verwirrung.
        p Die Teilnehmer finden in dieser App alle relevanten Dokumente und Informationen wie Tagesprogramm, Akteure und können zwischen diesen schnell hin- und herswitchen.
      .column.is-5
        img(src='../../assets/img/cases/energie-update/placeholder_03@2x.png')
  section.section.showcase
    .container.columns
      .column.is-4.is-offset-1
        img(src='../../assets/img/cases/energie-update/placeholder_04@2x.png')
      .column.is-4
        h3 Wegweisend: alle relevanten Adressen aufm Schrim
        p Darüberhinaus findet der Teilnehmer alle wichtigen Standorte der Veranstaltungen inkl. Map und Routenplaner. Die App kann außerdem mit Bild- u. Videomaterial befüllt werden, das während der laufenden Versammlung erstellt wird und den Usern tagesaktuell zur Verfügung steht.
  section.section.fakten-image.no-padding
    img(src='../../assets/img/cases/energie-update/mock_up_bottom@2x.png').bottom-img
    img(src='../../assets/img/cases/energie-update/image_bottom_bg.jpg').bottom-img-bg
  section.section.fakten
    .columns
      .column.is-3.is-offset-1
        h2
          | FAK
          br
          | TEN
      .column.is-4
        h3 90.000
        .subtitle Ausdrucke
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
  name: 'energie-update',
  beforeCreate: function() {
      document.body.className = 'energie-update';
  }
}
</script>

<style lang="sass" scoped>
@import "~bulma/sass/utilities/_all"
@import "~bulma/sass/base/helpers"
$grassy-green: #B9D670

.hero
  background: $grassy-green
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
    color: $grassy-green
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
