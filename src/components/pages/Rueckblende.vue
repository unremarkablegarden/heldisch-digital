<template lang="pug">
#rueckblende.page
  section.hero
    .hero-body.no-padding
      .columns
        .column.is-5.is-offset-1.desktop-title.is-hidden-mobile
          a(href="/cases#rueckblende")
            img.back-btn(src='../../assets/svg/back_btn.svg')
          h1.case-title LV Rheinland-Pfalz
          .subtitle Vertretung des Landes Rheinland-Pfalz beim Bund und bei der Europäischen Union
        .column.is-9.hero-image
          img(src='../../assets/img/cases/rueckblende/heldisch-digital-berlin-LV-Rheinland-Pfalz-website.png' alt="(heldisch-digital-berlin-LV-Rheinland-Pfalz-website").is-pulled-right.hero-img
        .mobile-title.is-hidden-desktop
          img.back-btn(src='../../assets/svg/back_btn.svg')
          h1.case-title LV Rheinland-Pfalz
          .subtitle Vertretung des Landes Rheinland-Pfalz beim Bund und bei der Europäischen Union
  section.section.aufgabe
    .container
      .columns
        .column.is-6.is-offset-3
          h3 Aufgabe
          .subtitle Entwicklung, Gestaltung und Programmierung einer Web-Plattform zum Bewerben des jährlich stattfindenden Fotografie- und Karikatur-Wettbewerbs „Rückblende“ sowie Umsetzung eines User-Interfaces zum selbständigen Upload von Dateien durch die Künstler
      .columns
        .column.is-3.is-offset-3
          h4 Umsetzung
          p Entwicklung, Gestaltung und Programmierung einer Web-Plattform mit diversen Filtermöglichkeiten und Schaffung eines User-Accountsystems zum selbständigen Datei-Upload
        .column.is-2.is-offset-1
          h4 Weg
          ul
            li CMS WordPress
            li Responsive
            li Lazy load
            li Diverse Filtermöglichkeiten
            li Login-Bereich Künstler

  section.section.intro2
    .container.columns
      .column.is-4.is-offset-2
        h2 Art comes first
        p Der jährlich stattfindende Fotografie- und Karikatur-Wettbewerb „Rückblende“ bietet deutschen Künstlern seit 2006 eine Plattform für politische Kunst.
      .column.is-4.is-offset-1
        img(src='../../assets/img/cases/rueckblende/heldisch-digital-berlin-LV-Rheinland-Pfalz-website-1.png' alt="Heldisch digital Berlin LV Rheinland-Pfalz Website 1")
  section.section.showcase
    .columns
      .column.is-5.is-offset-1
        img(src='../../assets/img/cases/rueckblende/heldisch-digital-berlin-LV-Rheinland-Pfalz-website-2.png' alt="Heldisch digital Berlin LV Rheinland-Pfalz Website 2")
      .column.is-4
        h3 Der Wettbewerb: Einfach übersichtlich
        p Darstellung aller Einreichungen sortiert nach Kategorie, Künstler und Gewinner

  section.section.showcase
    .columns
      .column.is-4.is-offset-2
        h3 Ein Archiv für alle: Filter, Fächer, Slider
        p Das Finden einer bestimmten Karikatur oder einer Fotografie in einem Archiv mit mehr als 25.000 Einreichungen leicht gemacht. Sogar mobil.
      .column.is-5
        img(src='../../assets/img/cases/rueckblende/heldisch-digital-berlin-LV-Rheinland-Pfalz-website-3.png' alt="Heldisch digital Berlin LV Rheinland-Pfalz Website 3")
  section.section.showcase
    .container.columns
      .column.is-4.is-offset-1
        img(src='../../assets/img/cases/rueckblende/heldisch-digital-berlin-LV-Rheinland-Pfalz-website-4.png' alt="Heldisch digital Berlin LV Rheinland-Pfalz Website 4")
      .column.is-4
        h3 Für jeden Künstler ein eigenes Atelier
        p Fotografen und Karikaturisten legen eigenständig Nutzer-Accounts an, um ihre Werke hochzuladen, zu benennen und einzureichen.
  section.section.fakten-image.no-padding
    img(src='../../assets/img/cases/rueckblende/heldisch-digital-berlin-LV-Rheinland-Pfalz-website-5.png' alt="Heldisch digital Berlin LV Rheinland-Pfalz Website 5").bottom-img
    img(src='../../assets/img/cases/rueckblende/image_bottom_bg.jpg').bottom-img-bg
  section.section.fakten
    .columns
      .column.is-3.is-offset-1
        h2
          | FAK
          br
          | TEN
      .column.is-4
        h3 15.500
        .subtitle Fotografien
        p Die Herausforderung dieses Projektes war in erster Linie die automatisierte Übertragung von mehr als 25.000 Datensätzen und ihren einzelnen
      .column.is-4
        h3 10.000
        .subtitle Karikaturen
        p Ausprägungen auf einen hierfür speziell eingerichteten Server und deren Darstellung auf der neu entwickelten Web-Plattform.
</template>

<script>
export default {
  metaInfo: {
    title: 'Website Rückblende LV Rheinland-Pfalz',
    titleTemplate: '%s — HELDISCH Digital Berlin',
    meta: [
      {
        name: 'description',
        content: 'Umsetzung Web-Plattform Foto-Event Rückblende der LV Rheinland-Pfalz inkl. CMS. Sie planen ein ähnliches Online-Projekt? Rufen Sie an! Tel.: 030/6165738-0'
      },
      {
        name: 'keywords',
        content: 'Foto-Web-Plattform, responsive, CMS WordPress, User-Accounts, Upload-Bereich, Programmierung'
      }
    ]
  },
  name: 'rueckblende',
  beforeCreate: function() {
    document.body.className = 'rueckblende';
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
$puke-green: #E5DF92
$dark-red: #871D33

.hero
  background: $puke-green
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
    color: $dark-red
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
