<template lang="pug">
#home.page
  section.hero.slider
    .hero-body
      //- canvas-video(src='../../assets/video/video_header.webm', :autoplay='true')
      video(autoplay muted loop ref='video' preload='auto').home
        source(src="../../assets/video/video_header.webm", type="video/webm")
        source(src="../../assets/video/video_header.mp4", type="video/mp4")

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
            img(src='../../assets/img/cases/hartmannbund/hartmannbund_slider.jpg').figure
            a(href='cases/hartmannbund') Mehr Zeigen
          .glide__slide
            img(src='../../assets/img/cases/asd/thumbnail@2x.png').figure
            a(href='cases/asd') Mehr Zeigen
          .glide__slide
            img(src='../../assets/img/cases/rueckblende/thumbnail@2x.png').figure
            a(href='cases/rueckblende') Mehr Zeigen
      .glide__arrows(data-glide-el='controls').is-hidden-mobile
        button.glide__arrow.glide__arrow--left(data-glide-dir='<')
          img(src='../../assets/svg/arrow_left.svg').figure
        button.glide__arrow.glide__arrow--right(data-glide-dir='>')
          img(src='../../assets/svg/arrow_right.svg').figure

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
        .leistungen-items.columns(v-if="windowWidth > 480 ")
          .column.is-3
            video(autoplay muted loop ref='video').graphic
              source(src="../../assets/ani_icons/pen_icon.webm", type="video/webm")
              source(src="../../assets/ani_icons/pen_icon.mp4", type="video/mp4")
            h4.title Konzeption &amp; Beratung
            p Digitalisierung bedeutet Veränderung, jedoch für jeden auf unterschiedliche Art und Weise. Workshops mit Strategieentwicklung, Analysen und Prototypen helfen die digitale Idealform Ihrer Organisation zu konzipieren. Wir beraten, planen und unterstützen bei der Einführung des digitalen Projektes.
          .column.is-3
            video(autoplay muted loop ref='video').graphic
              source(src="../../assets/ani_icons/design_icon.webm", type="video/webm")
              source(src="../../assets/ani_icons/design_icon.mp4", type="video/mp4")
            h4.title Design &amp; User Experience
            p Die digitale Welt eines Kunden steht im Einklang mit seinem Image und seiner Zielgruppe. Wir gestalten Websites und Apps und entwerfen digitale und visuelle Identitäten auf Basis gemeinsam erarbeiteter Konzepte.
          .column.is-3
            video(autoplay muted loop ref='video').graphic.screens
              source(src="../../assets/ani_icons/screens_icon.webm", type="video/webm")
              source(src="../../assets/ani_icons/screens_icon.mp4", type="video/mp4")
            h4.title Programmierung &amp; CMS
            p Eine Website ist heutzutage geräteunabhängig und berücksichtigt Aspekte der Suchmaschinenoptimierung. Wir programmieren Websites, Web- Applikationen und andere digitale Objekte immer unter Beachtung der speziellen Kundenbedürfnisse. Dies gilt auch für die Wahl des passenden Content Management System.
          .column.is-3
            video(autoplay muted loop ref='video').graphic
              source(src="../../assets/ani_icons/content_icon.webm", type="video/webm")
              source(src="../../assets/ani_icons/content_icon.mp4", type="video/mp4")
            h4.title Content &amp; Community
            p Man sollte in Sachen Social Media nicht auf jeden sondern auf den richtigen Zug aufspringen. Der passende Social Media Kanal, exakte Planung, die Modellierung der Zielgruppe, kreative Ideen und eine permanente Messung und Optimierung der Maßnahmen führen zum Erfolg.
        .glide_leistungen(v-if="windowWidth < 480 ")
          .glide__track(data-glide-el='track')
            .glide__slides
              .glide__slide
                video(autoplay muted loop ref='video').graphic
                  source(src="../../assets/ani_icons/pen_icon.webm", type="video/webm")
                  source(src="../../assets/ani_icons/pen_icon.mp4", type="video/mp4")
                h4.title Konzeption &amp; Beratung
                p Digitalisierung bedeutet Veränderung, jedoch für jeden auf unterschiedliche Art und Weise. Workshops mit Strategieentwicklung, Analysen und Prototypen helfen die digitale Idealform Ihrer Organisation zu konzipieren. Wir beraten, planen und unterstützen bei der Einführung des digitalen Projektes.
              .glide__slide
                video(autoplay muted loop ref='video').graphic
                  source(src="../../assets/ani_icons/design_icon.webm", type="video/webm")
                  source(src="../../assets/ani_icons/design_icon.mp4", type="video/mp4")
                h4.title Design &amp; User Experience
                p Die digitale Welt eines Kunden steht im Einklang mit seinem Image und seiner Zielgruppe. Wir gestalten Websites und Apps und entwerfen digitale und visuelle Identitäten auf Basis gemeinsam erarbeiteter Konzepte.
              .glide__slide
                video(autoplay muted loop ref='video').graphic.screens
                  source(src="../../assets/ani_icons/screens_icon.webm", type="video/webm")
                  source(src="../../assets/ani_icons/screens_icon.mp4", type="video/mp4")
                h4.title Programmierung &amp; CMS
                p Eine Website ist heutzutage geräteunabhängig und berücksichtigt Aspekte der Suchmaschinenoptimierung. Wir programmieren Websites, Web- Applikationen und andere digitale Objekte immer unter Beachtung der speziellen Kundenbedürfnisse. Dies gilt auch für die Wahl des passenden Content Management System.
              .glide__slide
                video(autoplay muted loop ref='video').graphic
                  source(src="../../assets/ani_icons/content_icon.webm", type="video/webm")
                  source(src="../../assets/ani_icons/content_icon.mp4", type="video/mp4")
                h4.title Content &amp; Community
                p Man sollte in Sachen Social Media nicht auf jeden sondern auf den richtigen Zug aufspringen. Der passende Social Media Kanal, exakte Planung, die Modellierung der Zielgruppe, kreative Ideen und eine permanente Messung und Optimierung der Maßnahmen führen zum Erfolg.

  section.section.clients
    .container
      .subtitle Unsere Kunden:
      .columns.client-logos(v-if="windowWidth > 480 ")
        .column.is-one-fifth
          img(src='../../assets/img/client_logos/01_ASD_Logo.jpg')
          img(src='../../assets/img/client_logos/02_Spreequell_Logo.jpg')
          img(src='../../assets/img/client_logos/03_AEE_Logo.jpg')
          img(src='../../assets/img/client_logos/04_Sparda_Logo.jpg')
          img(src='../../assets/img/client_logos/05_Hartmannbund_Logo.jpg')
        .column.is-one-fifth
          img(src='../../assets/img/client_logos/06_Coldseason_Logo.jpg')
          img(src='../../assets/img/client_logos/07_Ubeeqo_Logo.jpg')
          img(src='../../assets/img/client_logos/08_Rheinlandpfalz_Logo.jpg')
          img(src='../../assets/img/client_logos/09_Schwedische_Handelskammer_Logo.jpg')
          img(src='../../assets/img/client_logos/10_Plan_Logo.jpg')
        .column.is-one-fifth
          img(src='../../assets/img/client_logos/11_AWO_Logo.jpg')
          img(src='../../assets/img/client_logos/12_Nickelodeon_Logo.jpg')
          img(src='../../assets/img/client_logos/13_Koooperationsverbund_Jugendsozialarbeit_Logo.jpg')
          img(src='../../assets/img/client_logos/14_Alternativschule_Berlin_Logo.jpg')
          img(src='../../assets/img/client_logos/15_Greenwind_Logo.jpg')
        .column.is-one-fifth
          img(src='../../assets/img/client_logos/16_OFB_Logo.jpg')
          img(src='../../assets/img/client_logos/17_Accio_Logo.jpg')
          img(src='../../assets/img/client_logos/18_Atout_France_Logo.jpg')
          img(src='../../assets/img/client_logos/19_Kardiologie_Mitte_Logo.jpg')
          img(src='../../assets/img/client_logos/20_FBB_LOGO.jpg')
        .column.is-one-fifth
          img(src='../../assets/img/client_logos/21_Johanniter_Logo.jpg')
          img(src='../../assets/img/client_logos/22_Reinvesta_Logo.jpg')
          img(src='../../assets/img/client_logos/23_Foerderverein_Stattsoper_Unter_den_Linden_Logo.jpg')
          img(src='../../assets/img/client_logos/24_Metagate_Berlin_Logo.jpg')
          img(src='../../assets/img/client_logos/25_Queraufstieg_Berlin_Logo.jpg')
      .glide_client_logos(v-if="windowWidth < 480 ")
        .glide__track(data-glide-el='track')
          .glide__slides
            .glide__slide
              img(src='../../assets/img/client_logos/01_ASD_Logo.jpg')
              img(src='../../assets/img/client_logos/02_Spreequell_Logo.jpg')
              img(src='../../assets/img/client_logos/03_AEE_Logo.jpg')
              img(src='../../assets/img/client_logos/04_Sparda_Logo.jpg')
              img(src='../../assets/img/client_logos/05_Hartmannbund_Logo.jpg')
            .glide__slide
              img(src='../../assets/img/client_logos/06_Coldseason_Logo.jpg')
              img(src='../../assets/img/client_logos/07_Ubeeqo_Logo.jpg')
              img(src='../../assets/img/client_logos/08_Rheinlandpfalz_Logo.jpg')
              img(src='../../assets/img/client_logos/09_Schwedische_Handelskammer_Logo.jpg')
              img(src='../../assets/img/client_logos/10_Plan_Logo.jpg')
            .glide__slide
              img(src='../../assets/img/client_logos/11_AWO_Logo.jpg')
              img(src='../../assets/img/client_logos/12_Nickelodeon_Logo.jpg')
              img(src='../../assets/img/client_logos/13_Koooperationsverbund_Jugendsozialarbeit_Logo.jpg')
              img(src='../../assets/img/client_logos/14_Alternativschule_Berlin_Logo.jpg')
              img(src='../../assets/img/client_logos/15_Greenwind_Logo.jpg')
            .glide__slide
              img(src='../../assets/img/client_logos/16_OFB_Logo.jpg')
              img(src='../../assets/img/client_logos/17_Accio_Logo.jpg')
              img(src='../../assets/img/client_logos/18_Atout_France_Logo.jpg')
              img(src='../../assets/img/client_logos/19_Kardiologie_Mitte_Logo.jpg')
              img(src='../../assets/img/client_logos/20_FBB_LOGO.jpg')
            .glide__slide
              img(src='../../assets/img/client_logos/21_Johanniter_Logo.jpg')
              img(src='../../assets/img/client_logos/22_Reinvesta_Logo.jpg')
              img(src='../../assets/img/client_logos/23_Foerderverein_Stattsoper_Unter_den_Linden_Logo.jpg')
              img(src='../../assets/img/client_logos/24_Metagate_Berlin_Logo.jpg')
              img(src='../../assets/img/client_logos/25_Queraufstieg_Berlin_Logo.jpg')
  section.section.team#team
    .container
      h3.title Team
      .subtitle Keep family close.
      .columns.is-multiline.teammembers(v-if="windowWidth > 480 ")
        .column.is-3
          img(src='../../assets/img/team/theo.jpg')
          .name Theo
          p Head of Heldisch Digital
        .column.is-3
          img(src='../../assets/img/team/lukas.jpg')
          .name Lukas
          p Projekt Management
        .column.is-3
          img(src='../../assets/img/team/tom.jpg')
          .name Tom
          p Web Design
        .column.is-3
          img(src='../../assets/img/team/olle.jpg')
          .name Olle
          p Front-, Backend Development
        .column.is-3
          img(src='../../assets/img/team/marijn.jpg')
          .name Marijn
          p Frontend Development
        .column.is-3
          img(src='../../assets/img/team/mikael.jpg')
          .name Jörn
          p CEO
        .column.is-3
          img(src='../../assets/img/team/joern.jpg')
          .name Mikael
          p CEO
      .glide_team(v-if="windowWidth < 480 ")
        .glide__track(data-glide-el='track')
          .glide__slides
            .glide__slide
              img(src='../../assets/img/team/theo.jpg')
              .name Theo
              p Head of Heldisch Digital
            .glide__slide
              img(src='../../assets/img/team/lukas.jpg')
              .name Lukas
              p Projekt Management
            .glide__slide
              img(src='../../assets/img/team/tom.jpg')
              .name Tom
              p Web Design
            .glide__slide
              img(src='../../assets/img/team/marijn.jpg')
              .name Marijn
              p Frontend Development
            .glide__slide
              img(src='../../assets/img/team/olle.jpg')
              .name Olle
              p Front-, Backend Development
            .glide__slide
              img(src='../../assets/img/team/joern.jpg')
              .name Jörn
              p CEO
            .glide__slide
              img(src='../../assets/img/team/mikael.jpg')
              .name Mikael
              p CEO
  section.section#kontakt.is-paddingless
    iframe(src='https://snazzymaps.com/embed/99871', width='100%', height='560px', style='border:none;')
</template>

<script>

import Glide from '@glidejs/glide'

export default {
  name: 'app',
  beforeCreate: function() {
      document.body.className = 'home';
  },
  data: function() {
    return{
      isMobile: false,
      windowWidth: 0,
    }
  },
  methods: {
    getWindowWidth(event) {
       this.windowWidth = document.documentElement.clientWidth
     }
  },
  mounted () {
    $("video").prop("autoplay",true)
    $("video").prop("muted",true)

    this.$nextTick(function() {
     window.addEventListener('resize', this.getWindowWidth)
     //Init
     this.getWindowWidth()
    })
    new Glide('.glide', {
      type: 'carousel',
      perView: 3,
      focusAt: 'center',
      peek: 20,
      breakpoints: {
        800: {
          perView: 2
        },
        480: {
          perView: 1
        }
      }
    }).mount()
    new Glide('.glide_leistungen', {
      type: 'slider',
      perView: 1
    }).mount()
    new Glide('.glide_team', {
      type: 'carousel',
      perView: 1
    }).mount()
    new Glide('.glide_client_logos', {
      type: 'carousel',
      perView: 1
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
  .glide
    img
      margin-bottom: 1em
    .glide__arrow
      border: none
      box-shadow: none
      filter: drop-shadow(0 0 4px #00000060)
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
    padding: 7.5rem 1.5rem
    +mobile
      padding: 3rem 1.5rem
  .section.clients
    .subtitle
      margin-bottom: 4rem
  .section.project-slider
    text-align: center
    padding: .5rem 0
  .section.light-grey
    background: #f9f9f9
    .glide_leistungen
      margin-top: 3em
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
    .teammembers
      margin-top: 5em
    .glide_team
      margin-top: 3rem
  .section.kontakt
    padding: 7.5rem 1.5rem 5rem
  video
    mix-blend-mode: multiply
  video.screens, video.home
    mix-blend-mode: normal
  video.home
    width: 100%
</style>
