/* eslint-disable prettier/prettier */
<template>
  <!-- Footer Section -->
  <footer>
    <div class="footer-menu">
      <a href="#" class="menu-item">
        <font-awesome-icon icon="home" />
        Home
      </a>
      <router-link to="about" class="menu-item">
        <font-awesome-icon icon="user" />
        About Me
      </router-link>
      <a href="" class="menu-item">
        <font-awesome-icon icon="bag-shopping" />
        Portfolio
      </a>
      <a href="#" class="menu-item">
        <font-awesome-icon icon="phone" />
        Contact Me
      </a>
    </div>
    <ul class="social-link">
      <li>
        <a href="#"><img src="../assets/images/Instagram.svg" alt="" /></a>
      </li>
      <li>
        <a href="#"><img src="../assets/images/Twitter.svg" alt="" /></a>
      </li>
      <li>
        <a href="#"><img src="../assets/images/Linkedin.svg" alt="" /></a>
      </li>
      <li>
        <a href="#"><img src="../assets/images/Facebook.svg" alt="" /></a>
      </li>
      <li>
        <a href="#"><img src="../assets/images/BehanceIcon.svg" alt="" /></a>
      </li>
      <li>
        <a href="#"><img src="../assets/images/medium.svg" alt="" /></a>
      </li>
    </ul>
    <hr class="footer-divider" />
    <ul class="terms">
      <li><a href="#">Terms</a></li>
      -
      <li><a href="#">Privacy Policy</a></li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: "footerComponent",
};
</script>
<style lang="scss" scoped>
$media-desktop: "only screen and (max-width : 1024px)";
$media-tablet: "only screen and (max-width : 768px)";
$media-mobile: "only screen and (max-width : 600px)";
$media-mobile-sm: "only screen and (max-width : 480px)";
$media-desktop-strict: "only screen and (min-width: 768px)";
footer {
  width: 100vw;
  height: 45vh;
  background: rgba(28, 28, 101, 1);
  display: flex;
  flex-direction: column;
  .footer-menu {
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    .menu-item {
      text-decoration: none;
      color: #fff;
      margin: 32px 16px;
      padding-top: 40px;
      svg {
        margin-right: 4px;
      }
    }
  }
  .social-link {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    li {
      margin: 0px 8px;
      a {
        img {
          max-width: 32px;
          max-height: 32px;
          width: 32px;
        }
      }
    }
  }
  .footer-divider {
    color: #ffffff26;
    width: 90%;
    margin: auto;
  }
  .terms {
    list-style: none;
    display: flex;
    flex-direction: row;
    width: 90%;
    justify-content: flex-end;
    margin: 4px auto;
    li {
      margin: 0px 8px;
      a {
        text-decoration: none;
        color: #ffffffb2;
      }
    }
  }
}
@media #{$media-mobile} {
  footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 16px;
    height: auto;
    .footer-menu {
      flex-direction: column;
      gap: 8px;
      .menu-item {
        display: flex;
        margin: 8px 4px;
        padding: 0px;
        text-align: left;
        align-items: baseline;
      }
    }
    .social-link {
      display: grid;
      grid-template-columns: auto auto;
      grid-template-rows: auto;
    }
  }
}
</style>
