<template lang="pug">
#cases.page
  section.section.title-section
    .subtitle Unser
    h1.title Werk
  section.section.intro
    .columns
      .column.is-6.is-offset-3
        img(src='../../assets/svg/equal_sign.svg').icon
        p Effiziente Benutzerfreundlichkeit ist unser Weg Aufmerksamkeit zu erzeugen und eine klare Botschaft zu übermitteln. Unser Design dient der Usability, ist elegant und innovativ.
  section.section.project.spreequell#spreequell
    .columns
      .column.is-4.is-offset-2
        .content
          a(href="/cases/spreequell")
            img(src='../../assets/svg/fwd_btn.svg').icon
          .project-head
            h3 Spreequell
            .subtitle Volle Pulle Leben
          hr
          p Entwicklung, Gestaltung und Programmierung einer Kampagnen-Website.
      .column.is-6.image
        .triangle
        img(src='../../assets/img/spreequell.jpg')
  section.section.project.hartmannbund#hartmannbund
    .columns
      .column.is-4.is-offset-2
        .content
          a(href='/cases/hartmannbund')
            img(src='../../assets/svg/fwd_btn.svg').icon
          .project-head
            h3 Hartmannbund
            .subtitle Verband der Ärzte Deutschlands e.V.
          hr
          p Entwicklung, Gestaltung und Programmierung einer Event-App
      .column.is-6.image
        .triangle
        img(src='../../assets/img/cases/hartmannbund/case_hartmannbund.jpg')
  section.section.project.asd#asd
    .columns
      .column.is-4.is-offset-2
        .content
          a(href='cases/asd')
            img(src='../../assets/svg/fwd_btn.svg').icon
          .project-head
            h3 Arnecke Siebeth Dabelstein
            .subtitle Die Wirtschaftskanzlei
          hr
          p Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit.
      .column.is-6.image
        .triangle
        img(src='../../assets/img/cases/asd/case_asd.jpg')
  section.section.project.rueckblende#rueckblende
    .columns
      .column.is-4.is-offset-2
        .content
          a(href= '/cases/rueckblende')
            img(src='../../assets/svg/fwd_btn.svg').icon
          .project-head
            h3 LV Rheinland-Pfalz
            .subtitle Vertretung des Landes Rheinland-Pfalz beim Bund und bei der Europäischen Union
          hr
          p Entwicklung, Gestaltung und Programmierung einer Foto-Web-Plattform
      .column.is-6.image
        .triangle
        img(src='../../assets/img/cases/rueckblende/case_rlpz.jpg')
  //- section.section.project.energie-update#energie-update
  //-   .columns
  //-     .column.is-4.is-offset-2
  //-       .content
  //-         a(href='/cases/energie-update')
  //-           img(src='../../assets/svg/fwd_btn.svg').icon
  //-         .project-head
  //-           h3 Agentur für erneuerbare Energien
  //-           .subtitle Energie Update!
  //-         hr
  //-         p Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit.
  //-     .column.is-6.image
  //-       .triangle
  //-       img(src='../../assets/img/cases/energie-update/case_EU.jpg')


  section.section.last
    .columns
      .column.is-8.is-offset-1
        p
        | Du möchtest mit uns arbeiten?
        br
        strong Erzähle uns von deinem Projekt!
      .column.is-3
        strong Erzähle uns von deinem Projekt!
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
    document.body.className = 'cases';
  }
}
</script>

<style lang="sass" scoped>
@import "~bulma/sass/utilities/_all"
@import "~bulma/sass/base/helpers"
@import "../../assets/sass/variables.sass"

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
  text-align: center
  margin-bottom: 0
  padding: 5em 1.5rem!important
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
  .columns
    +mobile
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

.triangle
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

.spreequell .triangle
  border-top-color: $spreequell
.asd .triangle
  border-top-color: $asd
.rueckblende .triangle
  border-top-color: $rueckblende
.energie-update .triangle
  border-top-color: $energie-update
.hartmannbund .triangle
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

section.section
  padding: 8rem 1.5rem

section.last
  text-align: left
  font-size: 1rem
  +mobile
    text-align: center
    font-size: 1.2rem
</style>
