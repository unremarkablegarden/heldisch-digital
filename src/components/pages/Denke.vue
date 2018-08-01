<template lang="pug">
#denke.page
  section.section.title-section
    .subtitle Unsere
    h1.title Denke
  section.section.light-grey
    .columns
      .column.is-6.is-offset-3
        img(src='../../assets/svg/equal_sign.svg').icon
        h3.title Wir machen es möglich
        p Wir - HELDISCH digital - entwickeln ästhetische und benutzeroptimierte Lösungen mit moderner Technologie fürs Web.
  section.section.white
    .columns
      .column.is-6.is-offset-3
        p Gemeinsam mit unseren Kunden und Partnern arbeiten wir interdisziplinär als Team. Hierbei behalten wir das Wesentliche im Blick und unterscheiden zwischen trendigen Hypes und langfristigen Veränderungen.
        p
          |
          strong Wir machen es einfach
          br
          | Wir lieben es, Dinge einfach aussehen zu lassen - je einfacher, desto intuitiver. Das ist das Ergebnis optimierter Konzepte.
  section.section.light-grey.graph
    .container
      .columns.is-multiline
        .column.is-10.is-offset-1.is-hidden-mobile
          video(autoplay loop)
            source(src="../../assets/ani_icons/animated_chart.webm", type="video/webm")
            source(src="../../assets/ani_icons/animated_chart.mp4", type="video/mp4")
        .column.is-4
          img(src='../../assets/svg/graph_pt1.svg').graph.is-hidden-tablet
          h4.title kick-off
          p Wir haben langjährige Erfahrung in der Konzeptionierung von Web-Projekten. Workshop, Strategie, Konzept, Prototyping
        .column.is-4
          img(src='../../assets/svg/graph_pt2.svg').graph.is-hidden-tablet
          h4.title workflow
          p Wir begleiten und beraten Sie über die gesamte Dauer Ihres Projektes. Web-Design, Programmierung, Hosting, Debugging
        .column.is-4
          img(src='../../assets/svg/graph_pt3.svg').graph.is-hidden-tablet
          h4.title aftermath
          p Wir sind auch nach dem Go Live Ihres Projektes für Sie da. Support, Erweiterungen, Veränderungen
  section.section.yellow
    .columns
      .column.is-6.is-offset-3
        h3.title Es gibt nicht DIE Lösung oder DEN Weg.
        p Die digitale Landschaft verändert sich täglich und man muss stets mutig sein und eigene, neue Wege gehen, um ans Ziel zu kommen
  section.section.last
    .columns
      .column.is-8.is-offset-1
        p
        | Du möchtest mit uns arbeiten?
        br
        strong Erzähle uns von deinem Projekt!
      .column.is-3
        Strong Heldisch Digital
        p
          | Gneisnaustraße 44/45
          br
          | 10961 Berlin
          br
          | 030 666 666 666
</template>

<script>
export default {
  name: 'app',
  beforeCreate: function() {
    document.body.className = 'denke';
  }
}
</script>

<style lang="sass" scoped>
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
.title-section
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
.graph
    margin-bottom: 1rem
section.section
  padding: 8rem 1.5rem
section.title-section
section.light-grey
  background: #f9f9f9
  +mobile
    .column
      margin-bottom: 1em
section.white
section.graph
  font-size: 1rem
  font-weight: bold
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
