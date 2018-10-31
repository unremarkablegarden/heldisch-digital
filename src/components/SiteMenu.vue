<template lang="pug">
#site-menu(v-bind:class='{ active: isActive }')
  .menu-inner
    img(src='../assets/svg/equal_sign_big_pink.svg').equal_sign
    ul.nav
      li
        router-link(to='/')
          img(src='../assets/svg/close_btn.svg').close-btn
      li
        router-link(to='/') Wir
      li
        router-link(to='/denke') Denke
      li
        router-link(to='/cases') Cases
      li
        router-link(to='/#leistungen') Leistungen
      li
        router-link(to='/#team') Team
      li
        router-link(to='/#kontakt') Kontakt
      li.other-links
        a(href='http://instagram.com/heldisch')
          img(src='../assets/img/insta_icon.jpg').insta.icon
        a(href='http://facebook.com/heldisch')
          img(src='../assets/img/fb_icon.png').fb.icon
      li.other-links.page-links
        a(href='/impressum') Impressum
        a(href='/datenschutz') Datenschutz
</template>

<script>
export default {
  name: 'app',
  data: { isActive: false}
}
</script>

<style lang="sass">
  @import "~bulma/sass/utilities/_all"
  @import "~bulma/sass/base/helpers"

  // #site-menu
  //   background: #fce5e6
  //   position: fixed
  //   width: 100vw
  //   height: 100vh
  //   z-index: 666
  //   transform: translateY(-120vh)
  //   transition: all 400ms
  //   &.is-active
  //     top: 0
  //   .menu-inner
  //     display: flex
  //     align-items: center
  //     justify-content: center
  //     position: absolute
  //     left: 20px
  //     top: 20px
  //     background-color: #fff
  //     width: calc(100vw - 40px)
  //     height: calc(100vh - 40px)
  //     border-radius: 20px
  //     z-index: 101
  //   .equal_sign
  //     position: fixed
  //     width: 35vw
  //     height: auto
  //   ul.nav
  //     text-align: right
  //     z-index: 808
  //     position: fixed
  //     right: 20px
  //     margin-right: 80px
  //     +mobile
  //       position: relative
  //       text-align: center
  //       right: 0
  //       margin: 0
  //     li
  //       display: block
  //       font-size: 11vh
  //       line-height: 1
  //       +mobile
  //         font-size: 7vh
  //         line-height: 1.5
  //       a
  //         color: #555
  //         text-transform: uppercase
  //         font-weight: 900
  //         transition: all 400ms
  //         &:hover
  //           color: #333
  //     li.other-links
  //       text-align: center
  //       font-family: 'Cardo'
  //       font-size: 1.2rem
  //       margin-top: 1em
  //       display: flex
  //       align-items: center
  //       float: right
  //       font-style: italic
  //       +desktop
  //         &.page-links
  //           margin-top: 1.6em
  //       +mobile
  //         float: none
  //         display: block
  //       a
  //         text-transform: none
  //         font-weight: normal
  //         margin-left: 1em
  //         margin-right: .5em
  //   .close-btn
  //     width: 50px
  //     +mobile
  //       position: fixed
  //       top: 2rem
  //       right: 2rem
  //   .icon
  //     width: auto
  //     height: 40px
</style>
