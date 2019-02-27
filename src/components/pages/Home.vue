<template lang="pug">
#home.page
  section.hero.slider
    .hero-body
      video(v-if="!isMobile()" autoplay muted loop ref='video' preload='auto').home
        source(src="../../assets/video/video_header.webm", type="video/webm")
        source(src="../../assets/video/video_header.mp4", type="video/mp4")
      img(v-if="isMobile()" src='../../assets/img/monitor_weit_900.jpg')
  section.section.intro.is-centered
    .container
      .columns
        .column.is-8.is-offset-2
          h2 Willkommen bei HELDISCH Digital
          .subtitle Die Digital Unit von HELDISCH, der Agentur für Kommunikation
          p
            | Wir machen Sie digital! Ob Web, Mobile, App oder Social Media -
            br
            | Unsere Arbeit verbindet Aufmerksamkeit und
            br
            | starken Support mit bester Qualität.
          a(href='/denke') Denke

  section.section.project-slider
    .glide
      .glide__track(data-glide-el='track')
        .glide__slides
          .glide__slide
            img(src='../../assets/img/cases/spreequell/thumbnail@2x.jpg')
            a(href='cases/spreequell', alt='Kampagnen-Website für Spreequell von HELDISCH Digital') Mehr zeigen
          .glide__slide
            img(src='../../assets/img/cases/hartmannbund/hartmannbund_slider.jpg', alt='Website für den Hartmannbund Vertretung der rzte Deutschlands von HELDISCH Digital').figure
            a(href='cases/hartmannbund') Mehr zeigen
          .glide__slide
            img(src='../../assets/img/cases/asd/thumbnail@2x.jpg', alt='Responsive Website für die Wirtschaftskanzlei Arnecke Sibeth Dabelstein von HELDISCH Digital').figure
            a(href='cases/arnecke-sibeth-dabelstein/') Mehr zeigen
          .glide__slide
            img(src='../../assets/img/cases/rueckblende/thumbnail@2x.jpg', alt='Webplattform für Landesvertretung Rheinland-Pfalz von HELDISCH Digital').figure
            a(href='cases/rueckblende') Mehr zeigen
          .glide__slide
            img(src='../../assets/img/cases/tonton/heldisch-digital-tonton-et-fils-webshop-thumb.jpg', alt='HELDISCH digital Design Web-Shop Tonton et Fils').figure
            a(href='cases/tonton') Mehr zeigen
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
            | unserer Kreativität
          p Benutzerfreundlichkeit erzeugt Aufmerksamkeit. Unser innovatives Design spricht den User an und bringt Ihre Botschaft klar rüber.
          a(href='/cases') Cases
  section.section.light-grey#leistungen
    .container
      .columns.is-multiline
        .column.is-12
          h3.title WIR BIETEN
          .subtitle
            | Digitale Strategien komplett
        .leistungen-items.columns(v-if="windowWidth > 480 ")
          .column.is-3
            img(src="../../assets/ani_icons/pen_icon.gif", alt="Konzeption & Beratung: Web-Konzeption und Web-Beratung von HELDISCH Digital")
            //-video(autoplay muted loop ref='video').graphic
              source(src="../../assets/ani_icons/pen_icon.webm", type="video/webm")
              source(src="../../assets/ani_icons/pen_icon.mp4", type="video/mp4")
            h4.title Konzeption &amp; Beratung
            p Digitalisierung bedeutet Veränderung – für jeden auf unterschiedliche Art. Die digitale Idealform Ihrer Organisation finden Sie mit uns. In Workshops und anhand von Analysen und Prototypen entwickeln wir mit Ihnen eine digitale Strategie, die für Sie passt – und setzen diese gemeinsam um.
          .column.is-3
            img(src="../../assets/ani_icons/design_icon.gif", alt="Design & User Experience: Web-Design und UX-Design von HELDISCH Digital")
            //-video(autoplay muted loop ref='video').graphic
              source(src="../../assets/ani_icons/design_icon.webm", type="video/webm")
              source(src="../../assets/ani_icons/design_icon.mp4", type="video/mp4")
            h4.title Design &amp; User Experience
            p Das digitale Erscheinungsbild einer Organisation ist ihr Gesicht nach außen. Wir gestalten auf Basis der gemeinsam erarbeiteten Konzepte Ihre Website und Apps so, dass Ihre digitale Identität die Zielgruppe anspricht.
          .column.is-3
            img(src="../../assets/ani_icons/screens_icon.gif", alt="Programmierung & CMS: Programmierung und Content Management Systeme von HELDISCH Digital")
            //-video(autoplay muted loop ref='video').graphic.screens
              source(src="../../assets/ani_icons/screens_icon.webm", type="video/webm")
              source(src="../../assets/ani_icons/screens_icon.mp4", type="video/mp4")
            h4.title Programmierung &amp; CMS
            p Wir lassen uns von Kundenbedürfnissen leiten – bei der Auswahl des passenden Content Management Systems ebenso wie bei der Suchmaschinenoptimierung. Wir programmieren Websites, Apps und andere digitale Objekte immer nach Ihren Wünschen und für einen geräteunabhängigen Gebrauch.
          .column.is-3
            img(src='../../assets/ani_icons/content_icon.gif', alt="Content & Community: Erstellung Content für Web und Social Media von HELDISCH Digital")
            //- video(autoplay muted loop ref='video').graphic
              source(src="../../assets/ani_icons/content_icon.webm", type="video/webm")
              source(src="../../assets/ani_icons/content_icon.mp4", type="video/mp4")
            h4.title Content &amp; Community
            p Man sollte in Sachen Social Media nicht auf jeden, sondern auf den richtigen Zug aufspringen. So führen exakte Planung, der passende Social Media Kanal, die Ausrichtung auf die Zielgruppe sowie eine permanente Analyse und Optimierung der Maßnahmen zum langfristigen Erfolg.
        .glide_leistungen(v-if="windowWidth < 480 ")
          .glide__track(data-glide-el='track')
            .glide__slides
              .glide__slide
                img(src="../../assets/ani_icons/pen_icon.gif", alt="Konzeption & Beratung: Web-Konzeption und Web-Beratung von HELDISCH Digital")
                //-video(autoplay muted loop ref='video').graphic
                  source(src="../../assets/ani_icons/pen_icon.webm", type="video/webm")
                  source(src="../../assets/ani_icons/pen_icon.mp4", type="video/mp4")
                h4.title Konzeption &amp; Beratung
                p Digitalisierung bedeutet Veränderung – für jeden auf unterschiedliche Art. Die digitale Idealform Ihrer Organisation finden Sie mit uns. In Workshops und anhand von Analysen und Prototypen entwickeln wir mit Ihnen eine digitale Strategie, die für Sie passt – und setzen diese gemeinsam um.
              .glide__slide
                img(src="../../assets/ani_icons/design_icon.gif", alt="Design & User Experience: Web-Design und UX-Design von HELDISCH Digital")
                //- video(autoplay muted loop ref='video').graphic
                  source(src="../../assets/ani_icons/design_icon.webm", type="video/webm")
                  source(src="../../assets/ani_icons/design_icon.mp4", type="video/mp4")
                h4.title Design &amp; User Experience
                p Das digitale Erscheinungsbild einer Organisation ist ihr Gesicht nach außen. Wir gestalten auf Basis der gemeinsam erarbeiteten Konzepte Ihre Website und Apps so, dass Ihre digitale Identität die Zielgruppe anspricht.
              .glide__slide
                img(src="../../assets/ani_icons/screens_icon.gif", alt="Programmierung & CMS: Programmierung und Content Management Systeme von HELDISCH Digital")
                //- video(autoplay muted loop ref='video').graphic.screens
                  source(src="../../assets/ani_icons/screens_icon.webm", type="video/webm")
                  source(src="../../assets/ani_icons/screens_icon.mp4", type="video/mp4")
                h4.title Programmierung &amp; CMS
                p Wir lassen uns von Kundenbedürfnissen leiten – bei der Auswahl des passenden Content Management Systems ebenso wie bei der Suchmaschinenoptimierung. Wir programmieren Websites, Apps und andere digitale Objekte immer nach Ihren Wünschen und für einen geräteunabhängigen Gebrauch.
              .glide__slide
                img(src='../../assets/ani_icons/content_icon.gif', alt="Content & Community: Erstellung Content für Web und Social Media von HELDISCH Digital")
                //- video(autoplay muted loop ref='video').graphic
                  source(src="../../assets/ani_icons/content_icon.webm", type="video/webm")
                  source(src="../../assets/ani_icons/content_icon.mp4", type="video/mp4")
                h4.title Content &amp; Community
                p Man sollte in Sachen Social Media nicht auf jeden, sondern auf den richtigen Zug aufspringen. So führen exakte Planung, der passende Social Media Kanal, die Ausrichtung auf die Zielgruppe sowie eine permanente Analyse und Optimierung der Maßnahmen zum langfristigen Erfolg.

  section.section.clients
    .container
      .subtitle Unsere Kunden:
      .columns.client-logos(v-if="windowWidth > 480 ")
        .column.is-one-fifth
          img(src='../../assets/img/client_logos/01_ASD_Logo.jpg', alt='Responsive Website für die Wirtschaftskanzlei Arnecke Sibeth Dabelstein')
          img(src='../../assets/img/client_logos/02_Spreequell_Logo.jpg', alt='Gewinnspiele für Web für Spreequell')
          img(src='../../assets/img/client_logos/03_AEE_Logo.jpg', alt='Umsetzung Websites für die Agentur für Erneuerbare Energien von HELDISCH Digital')
          img(src='../../assets/img/client_logos/04_Sparda_Logo.jpg', alt='Web-Designs und Web-Banner für die Sparda Bank von HELDISCH Digital')
          img(src='../../assets/img/client_logos/05_Hartmannbund_Logo.jpg', alt='Websites, App, Newsletter für den Hartmannbund die Vertretung der Äzte Deutschlands')
        .column.is-one-fifth
          img(src='../../assets/img/client_logos/06_Coldseason_Logo.jpg', alt='Web Shop und Web-Design für Coldseason')
          img(src='../../assets/img/client_logos/07_Ubeeqo_Logo.jpg', alt='Web-Konzeption für carsharing UBEEQO')
          img(src='../../assets/img/client_logos/08_Rheinlandpfalz_Logo.jpg', alt='Entwicklung Webplattform für Landesvertretung Rheinland-Pfalz beim Bund von HELDISCH Digital')
          img(src='../../assets/img/client_logos/09_Schwedische_Handelskammer_Logo.jpg', alt='Umsetzung einer Internetseite für die Schwedische Handelskammer in Deutschland')
          img(src='../../assets/img/client_logos/10_Plan_Logo.jpg', alt='Web Banner und Web Design für Plan International Deutschland durch HELDISCH Digital')
        .column.is-one-fifth
          img(src='../../assets/img/client_logos/11_AWO_Logo.jpg', alt='Websites und Serverumzug für die Bundesakademie der Arbeiterwohlfahrt')
          img(src='../../assets/img/client_logos/12_Nickelodeon_Logo.jpg', alt='Umsetzung Digitale Tools und Web-Gewinnspiele für TV Sender Nickelodeon')
          img(src='../../assets/img/client_logos/13_Koooperationsverbund_Jugendsozialarbeit_Logo.jpg', alt='Gestaltung und Programmierung einer Website für den Kooperationsverbund Jugendsozialarbeit von HELDISCH Digital')
          img(src='../../assets/img/client_logos/14_Alternativschule_Berlin_Logo.jpg', alt='Entwicklung und Umsetzung von interaktiven Web Tools und Web Gaming, E-Learning von HELDISCH Digital')
          img(src='../../assets/img/client_logos/15_Greenwind_Logo.jpg', alt='Umsetzung Websites und Newsletter sowie Web Filme für Green Wind Energy, Green Wind Operations und Green Wind Offshore')
        .column.is-one-fifth
          img(src='../../assets/img/client_logos/16_OFB_Logo.jpg', alt='Website für Immobilien und Projektentwicklung')
          img(src='../../assets/img/client_logos/17_Accio_Logo.jpg', alt='Programmierung Internetpräsenz für die Wirtschaftsförderung Kataloniens in Deutschland')
          img(src='../../assets/img/client_logos/18_Atout_France_Logo.jpg', alt='Umsetzung von Websites sowie Web Apps für die französische Zentrale für Tourismus in Deutschland')
          img(src='../../assets/img/client_logos/19_Kardiologie_Mitte_Logo.jpg', alt='Umsetzung Web Design für die Kardiologie in Mitte von HELDISCH Digital')
          img(src='../../assets/img/client_logos/20_FBB_LOGO.jpg', alt='Umsetzung einer barrierefreien Internetseite für das Forschungsinstitut Betriebliche Bildung')
        .column.is-one-fifth
          img(src='../../assets/img/client_logos/21_Johanniter_Logo.jpg', alt='Onepager und Recruiting für die Johanniter')
          img(src='../../assets/img/client_logos/22_Reinvesta_Logo.jpg', alt='Aufsetzen Multi Websites und Anbindung an Immobilienscout24 für Reinvesta Immobilien GmbH von HELDISCH Digital')
          img(src='../../assets/img/client_logos/23_Foerderverein_Stattsoper_Unter_den_Linden_Logo.jpg', alt='Umsetzung eines Web Shops für die Staatsoper unter den Linden von HELDISCH Digital')
          img(src='../../assets/img/client_logos/24_Metagate_Berlin_Logo.jpg', alt='Gestaltung und Programmierung der Internetpräsenz von Metagate')
          img(src='../../assets/img/client_logos/25_Queraufstieg_Berlin_Logo.jpg', alt='Gestaltung und programmierung einer Website nach BITV 2.0 für das Projekt Queraufstieg Berlin')
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
          img(src='../../assets/img/team/Theo-Madsiridis-Head-Of-Heldisch-Digital.jpg', alt='Theo Matsiridis Head of HELDISCH Digital Berlin')
          .name Theo
          p Head of HELDISCH Digital
        .column.is-3
          img(src='../../assets/img/team/Lukas-Pietruschka-Projektmanagement-Heldisch-Digital.jpg', alt='Lukas Projekt Management bei HELDISCH Digital Berlin')
          .name Lukas
          p Projekt Management
        .column.is-3
          img(src='../../assets/img/team/Eva-Michaeli-Projektmanagement-Heldisch-Digital.jpg', alt='Eva Michaeli Projekt Management bei HELDISCH Digital Berlin')
          .name Eva
          p Projekt Management
        .column.is-3
          img(src='../../assets/img/team/Tom-Riemann-Web-Design-Heldisch-Digital.jpg', alt='Web Design bei HELDISCH Digital Berlin')
          .name Tom
          p Web Design
        .column.is-3
          img(src='../../assets/img/team/Olle-Frontend-Backend-Development-Heldisch-Digital.jpg', alt='')
          .name Olle
          p Front-, Backend Development
        .column.is-3
          img(src='../../assets/img/team/Marijn-Frontend-Development-Heldisch-Digital.jpg', alt='')
          .name Marijn
          p Frontend Development
        .column.is-3
          img(src='../../assets/img/team/Joern-Kriebel-CEO-Heldisch-Digital.jpg', alt='Jörn Kriebel CEO bei HELDISCH Digital Berlin')
          .name Jörn
          p CEO
        .column.is-3
          img(src='../../assets/img/team/Mikael-Oskarsson-CEO-Heldisch-Digital.jpg', alt='Mikael Oskarsson CEO bei HELDISCH Digital Berlin')
          .name Mikael
          p CEO
      .glide_team(v-if="windowWidth < 480 ")
        .glide__track(data-glide-el='track')
          .glide__slides
            .glide__slide
              img(src='../../assets/img/team/Theo-Madsiridis-Head-Of-Heldisch-Digital.jpg')
              .name Theo
              p Head of HELDISCH Digital
            .glide__slide
              img(src='../../assets/img/team/Lukas-Pietruschka-Projektmanagement-Heldisch-Digital.jpg')
              .name Lukas
              p Projekt Management
            .glide__slide
              img(src='../../assets/img/team/Tom-Riemann-Web-Design-Heldisch-Digital.jpg')
              .name Tom
              p Web Design
            .glide__slide
              img(src='../../assets/img/team/Eva-Michaeli-Projektmanagement-Heldisch-Digital.jpg')
              .name Eva
              p Projekt Management
            .glide__slide
              img(src='../../assets/img/team/Marijn-Frontend-Development-Heldisch-Digital.jpg')
              .name Marijn
              p Frontend Development
            .glide__slide
              img(src='../../assets/img/team/Olle-Frontend-Backend-Development-Heldisch-Digital.jpg')
              .name Olle
              p Front-, Backend Development
            .glide__slide
              img(src='../../assets/img/team/Joern-Kriebel-CEO-Heldisch-Digital.jpg')
              .name Jörn
              p CEO
            .glide__slide
              img(src='../../assets/img/team/Mikael-Oskarsson-CEO-Heldisch-Digital.jpg')
              .name Mikael
              p CEO
  section.section#kontakt.is-paddingless
    iframe(src='https://snazzymaps.com/embed/99871', width='100%', height='560px', style='border:none;')
</template>

<script>

import Glide from '@glidejs/glide'

export default {
  metaInfo: {
    title: 'HELDISCH Digital | Agentur für Websites & mehr aus Berlin',
    meta: [
      {
        name: 'description',
        content: 'Agentur für Websites, digitale Projekte, Apps in Berlin, Tel.: 030/6165738-0, E-Mail: 404@heldisch-digital.com, jetzt anrufen und informieren!'
      },
      {
        name: 'keywords',
        content: 'Digitalagentur, Web Design, Websites, userfreundlich, Usability, UX-Design, App'
      }
    ]
  },
  name: 'app',
  beforeCreate: function() {
      document.body.className = 'home';
  },
  data: function() {
    return{
      //isMobile: false,
      windowWidth: 0,
    }
  },
  methods: {
    getWindowWidth(event) {
      this.windowWidth = document.documentElement.clientWidth
    },
    isMobile: function() {
     	var check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
      return check;
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
    background: #f2aeb7
    .hero-body
      padding: 0
      line-height: 0
      +tablet
        height: calc(100vh - 190px)
      img
        width: 100vw
      video
        +tablet
          position: absolute
        bottom: 0
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
      filter: drop-shadow(0 0 4px #000000)
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
  // video
  //   mix-blend-mode: multiply
  // video.screens, video.home
  //   mix-blend-mode: normal
  video.home
    width: 100%
</style>
