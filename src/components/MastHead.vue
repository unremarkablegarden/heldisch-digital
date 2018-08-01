<template lang="pug">
#masthead
  #menu-button.is-pulled-right
    a(v-on:click="isActive = true")
      .burger
        .line
        .line
  #site-menu(v-bind:class='{ active: isActive }')
    .menu-inner
      img(src='../assets/svg/equal_sign_big_pink.svg').equal_sign
      ul.nav
        li
          a(v-on:click="isActive = false")
            img(src='../assets/svg/close_btn.svg').close-btn
        li(v-on:click="isActive = false")
          a(href='/') Wir
        li(v-on:click="isActive = false")
          a(href='/denke') Denke
        li(v-on:click="isActive = false")
          a(href='/cases') Cases
        li(v-on:click="isActive = false")
          a(href='/#leistungen') Leistungen
        li(v-on:click="isActive = false")
          a(href='/#team') Team
        li(v-on:click="isActive = false")
          a(href='/#kontakt') Kontakt
        li.other-links
          a(target='_blank' href='http://instagram.com/heldisch')
            img(src='../assets/img/insta_icon.jpg').insta.icon
          a(target= '_blank' href='http://facebook.com/heldisch')
            img(src='../assets/img/fb_icon.png').fb.icon
        li.other-links.page-links
          a(href='/impressum') Impressum
          a(href='/datenschutz') Datenschutz
  #logo.pink
    img(src="../assets/svg/logo.svg", alt="Heldisch Digital")
  #logo.orange
    img(src="../assets/svg/logo-orange.svg", alt="Heldisch Digital")
</template>

<script>
export default {
  name: 'mast-head',
  data: function() {
    return{ isActive: false }
  }
}
</script>

<style lang="sass" scoped>
@import "~bulma/sass/utilities/_all"
@import "~bulma/sass/base/helpers"

#masthead
  padding-top: 3rem
  +mobile
    padding-top: 1rem
#menu-button
  position: absolute
  right: 3rem
  +mobile
    right: 1rem
  border: 3px #FED4D5 solid
  display: flex
  align-items: center
  justify-content: space-around
  flex-direction: column
  width: 60px
  height: 60px
  border-radius: 60px
  transition: all 400ms
  &:hover
    transform: rotateZ(90deg)
    .line:first-child
      transform: rotateZ(25deg)
    .line:last-child
      transform: rotateZ(-25deg)
  .burger
    .line
      transition: all 400ms
      width: 2rem
      height: 5px
      background: #FED4D5
      border-radius: 2.5px
      margin: 0.5rem
#site-menu
  background: #fce5e6
  position: fixed
  width: 100vw
  height: 100vh
  z-index: 666
  top: 120vh
  transition: all 400ms
  &.active
    top: 0
  .menu-inner
    display: flex
    align-items: center
    justify-content: center
    position: absolute
    left: 20px
    top: 20px
    background-color: #fff
    width: calc(100vw - 40px)
    height: calc(100vh - 40px)
    border-radius: 20px
    z-index: 101
  .equal_sign
    position: fixed
    width: 35vw
    height: auto
  ul.nav
    text-align: right
    z-index: 808
    position: fixed
    right: 20px
    margin-right: 80px
    +mobile
      position: relative
      text-align: center
      right: 0
      margin: 0
    li
      display: block
      font-size: 11vh
      line-height: 1
      +mobile
        font-size: 7vh
        line-height: 1.5
      a
        color: #555
        text-transform: uppercase
        font-weight: 900
        transition: all 400ms
        &:hover
          color: #333
    li.other-links
      text-align: center
      font-family: 'Cardo'
      font-size: 1.2rem
      margin-top: 1em
      display: flex
      align-items: center
      float: right
      font-style: italic
      +desktop
        &.page-links
          margin-top: 1.6em
      +mobile
        float: none
        display: block
      a
        text-transform: none
        font-weight: normal
        margin-left: 1em
        margin-right: .5em
  .close-btn
    width: 50px
    +mobile
      position: absolute
      top: 2rem
      right: 2rem
  .icon
    width: auto
    height: 40px
#logo
  text-align: center
  margin-bottom: 2rem
  +mobile
    text-align: left
    margin-left: 1rem
    width: 33.333vw
    margin-bottom: 0
#logo.orange
  display: none

.home
  #masthead
    background: #fff
    #menu-button
      border-color: #FED4D5
      .burger
        border-color: #FED4D5
        .line
          background: #FED4D5
    #logo.pink
      display: block
    #logo.orange
      display: none
.denke
  #masthead
    #menu-button
      border-color: #fbbf2c
      .burger
        border-color: #fbbf2c
        .line
          background: #fbbf2c
    #logo.pink
      display: none
    #logo.orange
      display: block
.rueckblende, .energie-update, .hartmannbund, .asd, .rueckblende, .spreequell
  #masthead
    padding-bottom: 6em !important
    #menu-button
      border-color: #fff !important
    #menu
      border-color: #fff
    .burger .line
      background: #fff!important
  #logo
    display: none
.rueckblende
  #masthead
    background: #E5DF92
.energie-update
  #masthead
    background: #B9D670
.asd
  #masthead
    background: #DEDEDE
    padding-bottom: 3em
.spreequell
  #masthead
    background: #bbdef7
.hartmannbund
  #masthead
    background: #bbdef7
    padding-bottom: 3em
</style>
