<template>
  <div>
    <section id="hero">
      <p id="hi">Hi there! I'm</p>
      <h2 id="name">Lordswish</h2>
      <p id="desc">I Design experiences that solve user problems</p>
      <div class="cta">
        <button id="resume">Resume</button>
        <button id="hire">Hire me</button>
      </div>
    </section>
    <section id="featuredworks">
      <h3 id="featured">Featured Works</h3>
      <hr />
    </section>
  </div>
</template>

<script>
export default {
  name: "Home-view ",
};
</script>

<style lang="scss" scoped>
#hero {
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  width: 40%;
  height: fit-content;
  text-align: center;
  gap: 32px;
  #hi {
    font-weight: 500;
    line-height: 143.2%;
    /* or 24px */
  }
  #name {
    font-weight: 700;
    font-size: 60px;
    line-height: 130%;
  }
  #desc {
    font-weight: 500;
    font-size: 17px;
    line-height: 165%;
  }
  .cta {
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    button {
      cursor: pointer;
    }
    #resume {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 10px;
      gap: 10px;
      color: #252525;
      width: 200px;
      height: 50px;
      /* white */
      background: #ffffff;
      box-shadow: 0px 10px 20px rgba(8, 12, 33, 0.15);
      border-radius: 30px;
      outline: none;
      border: none;
    }
    #resume:hover {
      background: rgb(219, 218, 218);
    }
    #hire {
      /* Hire me button */
      box-sizing: border-box;
      /* Auto layout */
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0px;
      color: #ffffff;
      width: 200px;
      height: 50px;
      background: rgba(255, 255, 255, 0.3);
      box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
      border-radius: 30px;
      border: none;
    }
    #hire:hover {
      background: rgba(255, 255, 255, 0.137);
    }
  }
}
#featuredworks {
  width: 60%;
  margin: 4rem auto 2rem auto;
  #featured {
    text-align: center;
    text-decoration: underline;
    margin-bottom: 20px;
    hr {
      color: #fff;
    }
  }
}
</style>
