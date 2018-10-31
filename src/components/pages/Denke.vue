<template lang="pug">
#denke.page
  section.section.title-section
    .title-wrap
      .subtitle Unsere
      h1.title
        | Den
        br
        | ke
  section.section.light-grey
    .columns
      .column.is-6.is-offset-3
        img(src='../../assets/svg/equal_sign.svg').icon
        h3.title Wir machen es möglich
        p Wir – HELDISCH Digital – entwickeln ästhetische und benutzeroptimierte Lösungen mit moderner Technologie.
  section.section.white
    .columns
      .column.is-6.is-offset-3
        p Gemeinsam mit unseren Kunden und Partnern arbeiten wir interdisziplinär im Team. Hierbei behalten wir das Wesentliche im Blick und unterscheiden zwischen trendigen Hypes und langfristigen Veränderungen.
        p
          |
          strong Wir machen es einfach
          br
          | Wir lieben es, Dinge einfach aussehen zu lassen - denn je einfacher, desto intuitiver die Nutzung. Das ist das Ergebnis unserer optimierten Konzepte.
  section.section.light-grey.graph
    .container
      .columns.is-multiline.is-hidden-mobile
        .column.is-10.is-offset-1(v-observe-visibility="visibilityChanged")
          video(muted ref='chartAni').chart_animation
            source(src="../../assets/ani_icons/animated_chart.webm", type="video/webm")
            source(src="../../assets/ani_icons/animated_chart.mp4", type="video/mp4")
        .column.is-4
          h4.title Kick-off
          p Am Anfang steht das Konzept - mit der Konzeptionierung von Web-Projekten und Apps kennen wir uns bestens aus und setzen unsere langjährige Erfahrung für Sie ein.
        .column.is-4
          h4.title Workflow
          p Wir lassen Sie nicht allein - bei der Umsetzung Ihres Projekts begleiten und unterstützen wir Sie.
        .column.is-4
          h4.title Aftermath
          p Auch nach dem Go-live Ihres Projekts sind wir für Sie da, wo Sie uns brauchen.
      .glide_graph.is-hidden-tablet
        .glide__track(data-glide-el='track')
          .glide__slides
            .glide__slide
              //- img(src='../../assets/svg/graph_pt1.svg')
              img(src='../../assets/img/denke/graph_1.png', alt='Web-Konzeption und technische Beratung durch HELDISCH Digital')
              .description
                h4.title Kick-off
                p Am Anfang steht das Konzept - mit der Konzeptionierung von Web-Projekten und Apps kennen wir uns bestens aus und setzen unsere langjährige Erfahrung für Sie ein.
            .glide__slide
              //- img(src='../../assets/svg/graph_pt2.svg')
              img(src='../../assets/img/denke/graph_2.png', alt=' HELDISCH Digital begleitet Sie bei Ihren digitalen Projekten')
              .description
                h4.title Workflow
                p Wir lassen Sie nicht allein - bei der Umsetzung Ihres Projekts begleiten und unterstützen wir Sie.
            .glide__slide
              //- img(src='../../assets/svg/graph_pt3.svg')
              img(src='../../assets/img/denke/graph_3.png', alt='HELDISCH Digital betreut Sie auch nach Fertigstellung Ihrer digitalen Projekte')
              .description
                h4.title Aftermath
                p Auch nach dem Go-live Ihres Projekts sind wir für Sie da, wo Sie uns brauchen.
  section.section.yellow
    .columns
      .column.is-6.is-offset-3
        h3.title Es gibt nicht DIE Lösung oder DEN Weg.
        p Die digitale Landschaft verändert sich täglich. Man muss stets mutig bleiben und eigene, auch neue Wege gehen, um ans Ziel zu kommen. Gehen Sie mit uns.
</template>

<script>
import Glide from '@glidejs/glide'

export default {
  metaInfo: {
    title: 'Agentur für Internetseiten und digitale Projekte in Berlin',
    titleTemplate: '%s — HELDISCH Digital Berlin',
    meta: [
      {
        name: 'description',
        content: 'Agentur für Web Design, Programmierung und Content Management Systeme in Berlin. Wir setzen Ihr digitales Projekt um ✓ Tel.: 030/6165738-0. Fragen Sie uns!'
      },
      {
        name: 'keywords',
        content: 'Web-Projekte, Web-Konzeption, Web-Betreuung, Web-Optimierung, Web-Agentur'
      }
    ]
  },
  name: 'app',
  beforeCreate: function() {
    document.body.className = 'denke';
  },
  data () {
    return {
      // scrolled: false
      isVisible: false,
    }
  },
  methods: {
    visibilityChanged (isVisible, entry) {
      this.isVisible = isVisible
      this.$refs.chartAni.play()
    }
  },
  mounted(){
    new Glide('.glide_graph', {
      type: 'slider',
      perView: 1,
      gap: 0
    }).mount()
  }
}
</script>

<style lang="sass" scoped>
@import "node_modules/@glidejs/glide/src/assets/sass/glide.core"
@import "node_modules/@glidejs/glide/src/assets/sass/glide.theme"
@import "~bulma/sass/utilities/_all"
@import "~bulma/sass/base/helpers"
.page
  text-align: center
  line-height: 1.5
  font-size: 1.4rem
  h3
    color: #111
    font-weight: bold
    line-height: 1.3
  h4
    font-family: 'Cardo'
    text-transform: none
    color: #666
    font-style: italic
  .icon
    width: 4rem
    height: auto
    margin: 2rem
.glide_graph
  .glide__slide
    img
      margin-bottom: 1em
    +mobile
      width: 100vw
      img
        width: 100%
.title-section
  height: calc(100vh - 190px)
  display: flex
  justify-content: center
  align-items: center
  .title-wrap
    transform: translateY(-2rem)
  .subtitle
    font-size: 2.3em
    line-height: 1
  h1.title
    font-size: 8rem !important
    line-height: .9
    letter-spacing: -0.03em
    width: 2em
    margin: -1.5rem auto 0 auto
    color: #fbbf2c
    text-transform: uppercase
section.section
  padding: 8rem 1.5rem
section.title-section
section.light-grey
  background: #f9f9f9
  .column
    margin-bottom: 1em
section.white
  padding: 9rem 1.5rem
  p
    margin-bottom: 3em
section.graph
  font-size: 1rem
  font-weight: bold
  margin-bottom: 1rem
  padding: 8rem 0
  .description
    padding: 0 1.5rem

section.yellow
  background: #fbbf2c
  font-weight: bold
  font-size: 1.4rem
  h3
    color: #fff
    font-size: 2em
section.last
  text-align: left
  font-size: 1rem
  +mobile
    text-align: center
    font-size: 1.2rem
video
  mix-blend-mode: multiply
</style>
