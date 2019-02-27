<template lang="pug">
#tonton.page
  section.hero
    .hero-body.no-padding
      .columns
        .column.is-3.is-offset-1.desktop-title.is-hidden-mobile
          a(href="/cases#tonton")
            img.back-btn(src='../../assets/svg/back_btn.svg')
          h1.case-title Tonton et Fils
          .subtitle Gestaltung und Aufsetzen eine Webshops
        .column.is-8.hero-image
          img(src='../../assets/img/cases/tonton/heldisch-digital-Tonton-et-fils-webshop_hero.png' alt="HELDISCH digital Design Web-Shop Tonton et Fils 1").is-pulled-right.hero-img
        .mobile-title.is-hidden-desktop
          img.back-btn(src='../../assets/svg/back_btn.svg')
          h1.case-title Tonton et Fils
          .subtitle Gestaltung und Aufsetzen eine Webshops
  section.section.aufgabe
    .container
      .columns
        .column.is-6.is-offset-3
          h3 Aufgabe
          .subtitle Konzept, Kreation und Aufsetzen eines webshops inkl. diverser Apps dessen Look dem CI des Kunden gerecht wird.
      .columns
        .column.is-3.is-offset-3
          h4 Umsetzung
          p Gestaltung, Aufsetzen und Einrichten eines webshops
        .column.is-2.is-offset-1
          h4 Features
          ul
            li CMS (Shopify)
            li Responsive
            li Back-in-Stock Notification
            li Customized size charts
            li Einbettung Newslettersystem (MailChimp)
  section.section.showcase
    .container.columns
      .column.is-3.is-offset-1
        h3 Rugged but Clean
        p Maximaler Raum für das Wesentliche - die Produkte. Kein Geschnörkel.
      .column.is-6.is-offset-1
        img(src='../../assets/img/cases/tonton/heldisch-digital-tonton-et-fils-webshop-section-1.png' alt="HELDISCH digital Design Web-Shop Tonton et Fils 2")
  section.section.showcase
    .columns
      .column.is-5.is-offset-1
        img(src='../../assets/img/cases/tonton/heldisch-digital-tonton-et-fils-webshop-section-2.png' alt="HELDISCH digital Design Web-Shop Tonton et Fils 3")  
      .column.is-4.is-offset-1
        h3 Klare Linien
        p Der geradlinige und schlichte Stil der Produkte muss sich auch im Design des Shops widerspiegeln.
  section.section.showcase
    .columns
      .column.is-3.is-offset-1
        h3 Mit Liebe zum Detail 1
        p Gestaltung und Einbettung individualisierter size charts 
      .column.is-6.is-offset-1
        img(src='../../assets/img/cases/tonton/heldisch-digital-tonton-et-fils-webshop-section-3.png' alt="HELDISCH digital Design Web-Shop Tonton et Fils 4")
        
  section.section.showcase.last
    .container.columns
      .column.is-5.is-offset-1
        img(src='../../assets/img/cases/tonton/heldisch-digital-tonton-et-fils-webshop-section-4.png' alt="HELDISCH digital Design Web-Shop Tonton et Fils 5")
      .column.is-4.is-offset-1
        h3 Mit Liebe zum Detail 2
        p Aufnahme und Integration des Corporate Designs
  
  section.section.fakten-image.no-padding
    img(src='../../assets/img/cases/tonton/heldisch-digital-tonton-et-fils-webshop-bottom.png').bottom-img
    img(src='../../assets/img/cases/tonton/background-bottom.jpg').bottom-img-bg
  section.section.fakten
    .columns
      .column.is-3.is-offset-1
        h2
          | FAK
          br
          | TEN
      .column.is-4
        h3 100%
        .subtitle Rugged Style
        p Tonton et Fils verfolgt ein Credo: Kaufe ein Kleidungsstück und trage es ein Leben lang und reiche es an die folgenden Generationen weiter.
      .column.is-4
        h3 100%
        .subtitle Made in France
        p So wird das Kleidungsstück immer schöner… Stichworte: Patina. Beste Qualität. Hochwertige Stoffe. Handarbeit und Haltbarkeit. 
</template>

<script>
export default {
  metaInfo: {
    title: 'Webshop Tonton et Fils | HELDISCH digital',
    //titleTemplate: '%s — HELDISCH Digital',
    meta: [
      {
        name: 'description',
        content: 'Umsetzung des Webshops von Tonton et Fils. Sie brauchen Unterstützung in Sachen e-commerce? Rufen Sie an! 030/6165738-10'
      },
      {
        name: 'keywords',
        content: 'webshop, e-commerce, shopify'
      }
    ]
  },
  name: 'tonton',
  beforeCreate: function() {
      document.body.className = 'tonton';
  }
}
</script>

<style lang="sass" scoped>
@import "~bulma/sass/utilities/_all"
@import "~bulma/sass/base/helpers"
$red: #ff615d
$text-green: #16294c
$dark-blue: #15294e

.hero
  background: $dark-blue
  height: calc(100vh - 155px)
  +mobile
    height: calc(100vh - 125px)
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
  +tablet
    .columns
      margin: 0
    .hero-image
      padding: 0  
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
    color: $text-green
    line-height: 1.2
    margin-bottom: 1em
  .columns
    align-items: center
  +tablet
    &.last
      margin-bottom: 4rem
.fakten-image
  position: relative
  margin-bottom: -1rem
  img.bottom-img
    position: absolute
    bottom: 10rem
    right: 0
    width: 75vw
    +mobile
      width: 100vw
      bottom: 0
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
