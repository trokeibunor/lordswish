<template>
  <nav>
    <img
      src="./assets/images/illustration_top.svg"
      alt=""
      class="illustration rotating"
      srcset=""
    />
    <nav-link>
      <p id="name" v-on:click="isdropped">LORD'SWISH.</p>
      <div>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <!-- <a href="/#portfolio">Portfolio</a> -->
        <RouterLink to="/#contact">Contact me</RouterLink>
      </div>
      <!-- for mobile menu -->
      <div id="sideMenu" v-if="!dropped" v-on:click="isNotDropped">
        <img src="./assets/images/mobileMenu.svg" alt="" />
      </div>
      <div id="sideMenu" v-if="dropped" v-on:click="isdropped">
        <img src="./assets/images/menu-dropped.svg" alt="" />
      </div>
    </nav-link>
  </nav>
  <!-- Mobile drop down -->
  <div class="dropdown shadow-md" v-if="dropped">
    <div @click="linker('/', 'home')" :class="{active: currentPage == 'home' }">Home</div>
    <div @click="linker('/about', 'about')" :class="{active: currentPage == 'about' }">About Me</div>
    <!-- <div @click="linker('/#portfolio', 'portfolio' , 'portfolio')" :class="{active: currentPage == 'portfolio' }">Portfolio</div> -->
    <div @click="linker('/#contact', 'contact', 'contact')" :class="{active: currentPage == 'contact' }">Contact Me</div>
  </div>
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  data() {
    return {
      dropped: false,
      currentPage: 'home'
    };
  },
  components: {
    RouterLink,
    RouterView,
  },
  methods: {
    isdropped: function () {
      this.dropped = false;
    },
    isNotDropped: function () {
      this.dropped = true;
    },
    linker(link, page){
      this.currentPage = page;
      this.$router.push(link);
      this.dropped = false;
    }
  },
};
</script>

<style lang="scss">
@import "@/assets/base.css";
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
$media-desktop: "only screen and (max-width : 1024px)";
$media-tablet: "only screen and (max-width : 768px)";
$media-mobile: "only screen and (max-width : 600px)";
$media-mobile-sm: "only screen and (max-width : 480px)";
$media-desktop-strict: "only screen and (min-width: 768px)";
body {
  background-attachment: fixed;
  font-family: "Poppins", sans-serif;
  background-color: hsla(239, 62%, 15%, 1);
  color: #fff;
  overflow-x: hidden;
}
body::-webkit-scrollbar {
  width: 1em;
}
 
body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
 
body::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}
@-webkit-keyframes rotating /* Safari and Chrome */ {
  from {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotating {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.rotating {
  -webkit-animation: rotating 20s linear infinite;
  -moz-animation: rotating 20s linear infinite;
  -ms-animation: rotating 20s linear infinite;
  -o-animation: rotating 20s linear infinite;
  animation: rotating 20s linear infinite;
}
#app {
  min-width: 100vw;
  min-height: 100vh;
  max-height: 100%;
  height: fit-content;
}
#app::before {
  box-shadow: inset 0 0 100% rgba(255, 255, 255, 0.2);
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-x: none;
}
nav {
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: hsla(239, 62%, 15%, 1);
  position: sticky;
  top: 0;
  left: 0;
  z-index: 90;
  padding-bottom: 16px;
}
nav {
  img {
    position: absolute;
    z-index: 10;
  }
}
nav-link {
  min-width: 60%;
  margin: 0px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 2%;
  div {
    display: flex;
  }
  a {
    color: #fff;
    text-decoration: none;
    font-size: 14px;
    margin: 0px 16px;
  }
  #sideMenu {
    display: none;
  }
}
.dropdown {
  display: none;
}
@media #{$media-mobile} {
  nav {
    position: sticky;
    top: 0;
    background-color: #0f103f;
    z-index: 500;
  }
  nav img {
    // position: inherit;
    max-width: 20vw;
    max-height: 20vh;
    z-index: -10;
  }
  nav-link {
    width: 90%;
    padding-top: 8%;
    #name{
      margin-left: 2rem;
    }
  }
  nav-link div {
    display: none;
  }
  nav-link #sideMenu {
    display: block;
    width: 24px;
    height: 24px;
  }
  .dropdown {
    position: fixed;
    z-index: 500;
    width: 100%;
    height: auto;
    background: #fff;
    display: flex;
    flex-direction: column;
    div {
      text-decoration: none;
      color: #0f103f;
      font-size: 18px;
      font-weight: 500;
      margin: 8px;
      padding: 8px;
    }
    .active {
      color: #fff !important;
      background-color: #0f103f !important;
    }
  }
}
</style>
