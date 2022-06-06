<template>
  <nav>
    <img
      src="./assets/images/illustration_top.svg"
      alt=""
      class="illustration"
      srcset=""
    />
    <nav-link>
      <p id="name">LORD'SWISH.</p>
      <div>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <a href="#">Portfolio</a>
        <a href="#">Contact me</a>
      </div>
    </nav-link>
  </nav>
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  components: {
    RouterLink,
    RouterView,
  },
};
</script>

<style lang="scss">
@import "@/assets/base.css";
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
body {
  background-attachment: fixed;
  font-family: "Poppins", sans-serif;
  background-color: hsla(239, 62%, 15%, 1);
  color: #fff;
}
#app {
  min-width: 100vw;
  min-height: 100vh;
  max-height: 100%;
  height: fit-content;
}
#app::before {
  box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.2);
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
}
</style>
