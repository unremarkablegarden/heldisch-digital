<template lang="pug">
#cases.page
  section.section.title-section
    .title-wrap
      .subtitle Unser
      h1.title Werk
  section.section.intro
    .columns
      .column.is-4.is-offset-4
        img(src='../../assets/svg/equal_sign.svg').icon
        p Effiziente Benutzerfreundlichkeit ist unser Weg, Aufmerksamkeit zu erzeugen und eine klare Botschaft zu übermitteln. Unser Design dient der Usability, ist elegant und innovativ.
  section.section.project.spreequell.hero#spreequell
    .columns
      .column.is-5.is-offset-1
        .content
          a(href="/cases/spreequell")
            img(src='../../assets/svg/fwd_btn.svg').icon
          .project-head
            a(href="/cases/spreequell")
              h3 Spreequell
              .subtitle Volle Pulle Leben
          hr
          p Entwicklung, Gestaltung und Programmierung einer Kampagnen-Website
      .column.is-5.is-offset-1.image
        // .triangle.is-hidden-mobile
        img(src='../../assets/img/cases/mockups/sq_mockup.png')
  section.section.project.hartmannbund.hero#hartmannbund
    .columns
      .column.is-5.is-offset-1
        .content
          a(href='/cases/hartmannbund')
            img(src='../../assets/svg/fwd_btn.svg').icon
          .project-head
            a(href='/cases/hartmannbund')
              h3 Hartmannbund
              .subtitle Verband der Ärzte Deutschlands e.V.
          hr
          p Entwicklung, Gestaltung und Programmierung einer Event-App
      .column.is-5.is-offset-1.image
        // .triangle.is-hidden-mobile
        img(src='../../assets/img/cases/mockups/hb_mockup.png')
  section.section.project.asd.hero#arnecke-sibeth-dabelstein
    .columns
      .column.is-5.is-offset-1
        .content
          a(href='/cases/arnecke-sibeth-dabelstein')
            img(src='../../assets/svg/fwd_btn.svg').icon
          .project-head
            a(href='/cases/arnecke-sibeth-dabelstein')
            h3 Arnecke Siebeth Dabelstein
            .subtitle Die Wirtschaftskanzlei
          hr
          p Entwicklung, Gestaltung und Programmierung einer Website
      .column.is-5.is-offset-1.image
        // .triangle.is-hidden-mobile
        img(src='../../assets/img/cases/mockups/asd_mockup.png')
  section.section.project.rueckblende.hero#rueckblende
    .columns
      .column.is-5.is-offset-1
        .content
          a(href='/cases/rueckblende')
            img(src='../../assets/svg/fwd_btn.svg').icon
          .project-head
            a(href='/cases/rueckblende')
              h3 LV Rheinland-Pfalz
              .subtitle Vertretung des Landes Rheinland-Pfalz beim Bund und bei der Europäischen Union
          hr
          p Entwicklung, Gestaltung und Programmierung einer Foto-Web-Plattform
      .column.is-5.is-offset-1.image
        // .triangle.is-hidden-mobile
        img(src='../../assets/img/cases/mockups/rlpz_mockup.png')
  section.section.project.tonton.hero#tonton
    .columns
      .column.is-5.is-offset-1
        .content
          a(href='/cases/tonton')
            img(src='../../assets/svg/fwd_btn.svg').icon
          .project-head
            a(href='/cases/tonton')
              h3 Ton Ton et Fils
              .subtitle Les vêtements de labeur à la française.
          hr
          p Gestaltung und Aufsetzen eine e-shops
      .column.is-5.is-offset-1.image
        // .triangle.is-hidden-mobile
        img(src='../../assets/img/cases/tonton/heldisch-digital-tonton-et-fils-webshop-cases.png')
  //- section.section.project.energie-update#energie-update
  //-   .columns
  //-     .column.is-5.is-offset-1
  //-       .content
  //-         a(href='/cases/energie-update')
  //-           img(src='../../assets/svg/fwd_btn.svg').icon
  //-         .project-head
  //-           h3 Agentur für erneuerbare Energien
  //-           .subtitle Energie Update!
  //-         hr
  //-         p Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit.
  //-     .column.is-6.image
  //-       // .triangle.is-hidden-mobile
  //-       img(src='../../assets/img/cases/energie-update/case_EU.jpg')


</template>

<script>
export default {
  metaInfo: {
    title: 'Web-Referenzen der Agentur HELDISCH Digital aus Berlin',
    meta: [
      {
        name: 'description',
        content: 'Web-Projekte und Referenzen der Agentur HELDISCH Digital in Berlin. Wir helfen Ihnen bei der Umsetzung Ihrer Online-Projekte ✓ Kontaktieren Sie uns!'
      },
      {
        name: 'keywords',
        content: 'Web-Projekte, Online, Usability, Website, App, Web-Plattform, Webdesign, Programmierung'
      }
    ]
  },
  name: 'app',
  beforeCreate: function() {
      document.body.className = 'cases';
  }
}
</script>

<style lang="sass" scoped>
@import "~bulma/sass/utilities/_all"
@import "~bulma/sass/base/helpers"

$spreequell: #4e92df
$asd: #DEDEDE
$rueckblende: #E5DF92
$energie-update: #B9D670
$hartmannbund: #bbdef7
$tonton: #15294e

.page
  line-height: 1.5
  font-size: 1.4rem
  h3
    color: #111
    font-weight: bold
  h4
    font-family: 'Cardo'
    text-transform: none
    color: #666
  .icon
    width: 4rem
    height: auto
    margin: 2rem

.title-section
  height: calc(100vh - 190px)
  display: flex
  justify-content: center
  align-items: center
  text-align: center
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
    color: #fedddd
    text-transform: uppercase

.section.intro
  text-align: center
  padding: 5rem 1.5rem 10rem
  background: #f9f9f9
  +mobile
    padding: 5rem 1.5rem

.section.project
  padding: 0
  height: 100vh
  display: flex
  position: sticky
  justify-content: center
  top: 0
  box-shadow: 0 -20px 10px -5px #33333307
  a:hover
    cursor: pointer
    h3
      opacity: .9
    .subtitle
      opacity: .9
  .columns
    +tablet
      margin: 0
  .column
    display: flex
    align-items: center
  .column.image
    padding: 0 0 0 2em
    +mobile
      padding: 0

  .content
    +mobile
      display: flex
      align-items: center
      padding: 2em .5em
  .icon
    margin: 0
    width: 40px
    +mobile
      width: 55px
  h3
    margin-top: .5em
    margin-bottom: 0
    color: #fff
    font-size: 1.6rem
    font-weight: 900
    +mobile
      font-size: 1.1rem
      margin-top: 0
  .subtitle
    color: #555
    font-family: 'Uni'
    font-style: normal
    font-weight: 900
    font-size: 1.6rem
    +mobile
      font-size: 1.1rem
  hr
    width: 4em
    height: 4px
    border-radius: 4px
    border-color: #555
    background: #555
    +mobile
      display: none
  p
    font-size: 1.2rem
    font-style: italic
    +mobile
      display: none
  .content
    +mobile
      display: flex
  .project-head
    +mobile
      margin-left: 1em

// .triangle.is-hidden-mobile
  content: ''
  width: 0
  height: 0
  border-left: 20px solid transparent
  border-right: 20px solid transparent
  border-top: 20px solid #f9f9f9
  position: absolute
  left: 50%
  top: 0
  transform: translatex(-50%)
  +desktop
    left: 35px
    top: 50%
    transform: rotate(-90deg)

.spreequell // .triangle.is-hidden-mobile
  border-top-color: $spreequell
.asd // .triangle.is-hidden-mobile
  border-top-color: $asd
.rueckblende // .triangle.is-hidden-mobile
  border-top-color: $rueckblende
.energie-update // .triangle.is-hidden-mobile
  border-top-color: $energie-update
.hartmannbund // .triangle.is-hidden-mobile
  border-top-color: $hartmannbund

.spreequell
  background: $spreequell
.asd
  background: $asd
.rueckblende
  background: $rueckblende
.energie-update
  background: $energie-update
.hartmannbund
  background: $hartmannbund
.tonton
  background: $tonton

section.section
  padding: 8rem 1.5rem

section.last
  text-align: left
  font-size: 1rem
  +mobile
    text-align: center
    font-size: 1.2rem
</style>
