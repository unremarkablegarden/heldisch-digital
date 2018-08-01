<template lang="pug">
#home.page
  section.hero.slider
    .hero-body
      img(src='../../assets/img/hero_01.jpg')

  section.section.intro.is-centered
    .container
      .columns
        .column.is-6.is-offset-3
          h2 Willkommen bei HELDISCH digital
          .subtitle Die Digital-Unit der Heldisch Werbeagentur.
          p Wir machen Sie digital. Web, Mobile, App, Social Media. Unsere Arbeit basiert auf Aufmerksamkeit, starken Support und beste Qualität.
          a(href='/denke') Denke

  section.section.project-slider
    .glide
      .glide__track(data-glide-el='track')
        .glide__slides
          .glide__slide
            img(src='../../assets/img/cases/spreequell/thumbnail@2x.png')
            a(href='cases/spreequell') Mehr Zeigen
          .glide__slide
            img(src='../../assets/img/cases/hartmannbund/case_hartmannbund.jpg').figure
            a(href='cases/hartmannbund') Mehr Zeigen
          .glide__slide
            img(src='../../assets/img/cases/asd/thumbnail@2x.png').figure
            a(href='cases/asd') Mehr Zeigen
          .glide__slide
            img(src='../../assets/img/cases/rueckblende/thumbnail@2x.png').figure
            a(href='cases/rueckblende') Mehr Zeigen

      .glide__arrows(data-glide-el='controls')
        button.glide__arrow.glide__arrow--left(data-glide-dir='<') &larr;
        button.glide__arrow.glide__arrow--right(data-glide-dir='>') &rarr;


  section.section
    .container
      .columns
        .column.is-6.is-offset-3
          h3.title KREATION
          .subtitle
            | Der User im Fokus
            br
            | unserer Kreativität.
          p Effiziente Benutzerfreundlichkeit ist unser Weg Aufmerksamkeit zu erzeugen und eine klare Botschaft zu übermitteln. Unser Design dient der Usability, ist elegant und innovativ.
          a(href='/cases') Cases
  section.section.light-grey#leistungen
    .container
      .columns.is-multiline
        .column.is-12
          h3.title WIR BIETEN
          .subtitle
            | Ein Überblick unserer
            br
            | digitalen Strategie.
        .column.is-3
          video(autoplay loop).graphic
            source(src="../../assets/ani_icons/pen_icon.webm", type="video/webm")
            source(src="../../assets/ani_icons/pen_icon.mp4", type="video/mp4")
          h4.title Konzeption &amp; Beratung
          p Digitalisierung bedeutet Veränderung, jedoch für jeden auf unterschiedliche Art und Weise. Workshops mit Strategieentwicklung, Analysen und Prototypen helfen die digitale Idealform Ihrer Organisation zu konzipieren. Wir beraten, planen und unterstützen bei der Einführung des digitalen Projektes.
        .column.is-3
          video(autoplay loop).graphic
            source(src="../../assets/ani_icons/design_icon.webm", type="video/webm")
            source(src="../../assets/ani_icons/design_icon.mp4", type="video/mp4")
          h4.title Design &amp; User Experience
          p Die digitale Welt eines Kunden steht im Einklang mit seinem Image und seiner Zielgruppe. Wir gestalten Websites und Apps und entwerfen digitale und visuelle Identitäten auf Basis gemeinsam erarbeiteter Konzepte.
        .column.is-3
          video(autoplay loop).graphic.screens
            source(src="../../assets/ani_icons/screens_icon.webm", type="video/webm")
            source(src="../../assets/ani_icons/screens_icon.mp4", type="video/mp4")
          h4.title Programmierung &amp; CMS
          p Eine Website ist heutzutage geräteunabhängig und berücksichtigt Aspekte der Suchmaschinenoptimierung. Wir programmieren Websites, Web- Applikationen und andere digitale Objekte immer unter Beachtung der speziellen Kundenbedürfnisse. Dies gilt auch für die Wahl des passenden Content Management System.
        .column.is-3
          video(autoplay loop).graphic
            source(src="../../assets/ani_icons/content_icon.webm", type="video/webm")
            source(src="../../assets/ani_icons/content_icon.mp4", type="video/mp4")
          h4.title Content &amp; Community
          p Man sollte in Sachen Social Media nicht auf jeden sondern auf den richtigen Zug aufspringen. Der passende Social Media Kanal, exakte Planung, die Modellierung der Zielgruppe, kreative Ideen und eine permanente Messung und Optimierung der Maßnahmen führen zum Erfolg.
  section.section
    .container
      .subtitle Unsere Kunden:
      .columns
        .column.is-10.is-offset-1
          img(src='../../assets/img/temp_kunden.png')
  section.section.team#team
    .container
      h3.title Team
      .subtitle Keep family close.
      .columns.is-multiline
        .column.is-3.is-offset-1
          img(src='../../assets/img/team/theo.jpg')
          .name Theo
          p Lorum ipsum bae
        .column.is-3
          img(src='../../assets/img/team/olle.jpg')
          .name Olle
          p Lorum ipsum bae
        .column.is-3
          img(src='../../assets/img/team/tom.jpg')
          .name Tom
          p Lorum ipsum bae
        .column.is-3.is-offset-1
          img(src='../../assets/img/team/marijn.jpg')
          .name Marijn
          p Lorum ipsum bae
        .column.is-3
          img(src='../../assets/img/team/joern.jpg')
          .name Jörn
          p Lorum ipsum bae
        .column.is-3
          img(src='../../assets/img/team/mikael.jpg')
          .name Mikael
          p Lorum ipsum bae
  section.section#kontakt
    img(src='../../assets/img/Map/map_static.jpg')
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

import Glide from '@glidejs/glide'

export default {
  name: 'app',
  mounted () {

    new Glide('.glide', {
      type: 'carousel',
      perView: 3,
      focusAt: 'center',
      breakpoints: {
        800: {
          perView: 2
        },
        480: {
          perView: 1
        }
      }
    }).mount()
  }
}
</script>

<style lang="sass">
  #masthead
    background: #fff
    #menu-button
      border-color: #FED4D5 !important
      .burger
        border-color: #FED4D5 !important
        .line
          background: #FED4D5!important
    #logo.pink
      display: block
    #logo.orange
      display: none
</style>

<style lang="sass" scoped>
  @import "node_modules/@glidejs/glide/src/assets/sass/glide.core"
  @import "node_modules/@glidejs/glide/src/assets/sass/glide.theme"
  @import "~bulma/sass/utilities/_all"
  @import "~bulma/sass/base/helpers"

  .page
    font-size: 1.2rem
  a
    font-family: 'Cardo'
    color: #666
    box-shadow: inset 0 -12px 0 #FED4D5
    font-size: 1.2em
    font-style: italic
  .slider
    background: linear-gradient(135deg, #facbd3 0%,#feebe0 100%)
    .hero-body
      padding: 0
      line-height: 0
      img
        width: 100vw
  h3.title
    color: #ff615d
    font-size: 3.5em
    line-height: 1
    margin-bottom: .7em
    +mobile
      font-size: 3.2em
  h4.title
    color: #ff615d
    text-transform: none
    font-family: 'Cardo'
    font-size: 1.5em
  .subtitle
    font-size: 1.8em
    line-height: 1.1
    +mobile
      font-size: 1.6em
  .intro
    font-size: 1.3rem
    h2
      font-weight: bold
      color: #111
      line-height: 1.2
      margin-bottom: 0.5em
    .subtitle
      font-size: 1.2em
      line-height: 1.3
  .section
    text-align: center
  .section.project-slider
    text-align: center
    padding: 4em 0
  .section.light-grey
    background: #f9f9f9
    img.graphic
      height: 150px
      margin: 2em 0
    h4, p
      text-align: center
      +desktop
        text-align: left
    p
      font-size: 1rem
      font-weight: bold
      margin-top: 2em
      +desktop
        padding-right: 5rem
  .section.team
    background: #f9f9f9
    img
      margin-bottom: 1em
    .name
      font-family: 'Cardo'
      font-size: 1.8rem
      margin-bottom: 0.2em
    p
      font-size: 1rem
  section.last
    text-align: left
    font-size: 1rem
    +mobile
      text-align: center
      font-size: 1.2rem
  video
    mix-blend-mode: multiply
  video.screens
    mix-blend-mode: normal
</style>
