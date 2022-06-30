<template>
  <div id="wrapper">
    <div class="content">
      <p id="head">About Me</p>
      <p>
        Experienced product designer with over 2-3 years of experience
        interested in creating end-to-end user experience, empathizing and
        designing products based on user needs and business goals directly
        responsible for delivering all aspects of design, from defining customer
        needs to delivering concepts, prototypes and UI specifications.design
        usable and intuitive web, mobile and other digital products for
        companies and individuals.
      </p>
      <p>
        I have worked worked with different companies and worked on different
        projects to deliver value to both users and business owners.
      </p>
      <a href="./assets/resumeugo.pdf">View My Resume</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#wrapper {
  background: linear-gradient(144.11deg, #c961de 13.74%, #2954a3 90.91%);
  border-radius: 20rem;
  text-align: center;
  position: absolute;
  z-index: 50;
  width: 35rem;
  height: 35rem;
  margin: 0px auto;
  left: 31.5%;
  bottom: 0.5rem;
  .content {
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
    padding-top: 15%;
    margin: 0% auto;
    width: 80%;
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
</style>
