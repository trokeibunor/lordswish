<template>
  <div class="container">
    <div id="wrapper">
      <div class="contentz">
        <p id="head">About Me</p>
        <p>
          Experienced product designer with over 2-3 years of experience
          interested in creating end-to-end user experience, empathizing and
          designing products based on user needs and business goals directly
          responsible for delivering all aspects of design, from defining
          customer needs to delivering concepts, prototypes and UI
          specifications.design usable and intuitive web, mobile and other
          digital products for companies and individuals.
        </p>
        <p>
          I have worked worked with different companies and worked on different
          projects to deliver value to both users and business owners.
        </p>
        <a href="https://firebasestorage.googleapis.com/v0/b/lordwish-portfolio.appspot.com/o/resumeugo.pdf?alt=media&token=9a4cd104-ace9-47f8-ac6c-c1a090ce06a5" target="_blank"
          >View My Resume</a
        >
      </div>
    </div>
  </div>
  <footer-component />
</template>

<script>
import footerComponent from "../components/footerComponent.vue";
export default {
  name: "aboutView",
  components: {
    footerComponent,
  },
};
</script>

<style lang="scss" scoped>
$media-desktop: "only screen and (max-width : 1024px)";
$media-tablet: "only screen and (max-width : 768px)";
$media-mobile: "only screen and (max-width : 600px)";
$media-mobile-sm: "only screen and (max-width : 480px)";
$media-desktop-strict: "only screen and (min-width: 768px)";
.container {
  width: 100vw;
  #wrapper {
    background: linear-gradient(144.11deg, #c961de 13.74%, #2954a3 90.91%);
    width: 100vw;
    height: fit-content;
    // margin-top: 1rem;
    .contentz {
      display: block;
      width: 50%;
      margin: auto;
      padding: 5rem 0;
      #head {
        text-align: center;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 130%;
        /* or 40px */
        text-decoration-line: underline;
        color: #ffffff;
      }
      p {
        font-size: 14px;
        margin: 16px 0px;
        text-align: left;
      }
      a {
        text-align: center;
        background: #ffffff;
        box-shadow: 0px 10px 20px rgba(8, 12, 33, 0.15);
        border-radius: 30px;
        text-decoration: none;
        font-weight: 400;
        font-size: 12px;
        line-height: 143.2%;
        color: #252525;
        padding: 8px 16px;
      }
    }
  }
}
@media #{$media-mobile}{
  .container{
    #wrapper{
      margin-top: 0;
      .contentz{
        padding: 4rem 0 7rem 0;
        width: 90%;
      }
    }
  }
}
</style>
