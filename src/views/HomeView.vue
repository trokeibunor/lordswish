<template>
  <div id="wrapper">
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
      <h4 id="case">Case Study</h4>
      <!-- card section -->
      <div class="card-grid">
        <div class="cs-card">
          <img
            src="https://picsum.photos/200/300"
            class="card-img"
            alt=""
            srcset=""
          />
          <div class="card-desc">
            <h2>Kofamed</h2>
            <a href="#">UI/UX Design, UX Research, Motion Design</a>
            <p class="note">
              I am a creative UI/UX designer, I help individuals and companies
              to design intuitive and usable digital products.
            </p>
          </div>
        </div>
        <div class="cs-card">
          <img
            src="https://picsum.photos/200/300"
            class="card-img"
            alt=""
            srcset=""
          />
          <div class="card-desc">
            <h2>Kofamed</h2>
            <a href="#">UI/UX Design, UX Research, Motion Design</a>
            <p class="note">
              I am a creative UI/UX designer, I help individuals and companies
              to design intuitive and usable digital products.
            </p>
          </div>
        </div>
        <div class="cs-card">
          <img
            src="https://picsum.photos/200/300"
            class="card-img"
            alt=""
            srcset=""
          />
          <div class="card-desc">
            <h2>Kofamed</h2>
            <a href="#">UI/UX Design, UX Research, Motion Design</a>
            <p class="note">
              I am a creative UI/UX designer, I help individuals and companies
              to design intuitive and usable digital products.
            </p>
          </div>
        </div>
        <div class="cs-card">
          <img
            src="https://picsum.photos/200/300"
            class="card-img"
            alt=""
            srcset=""
          />
          <div class="card-desc">
            <h2>Kofamed</h2>
            <a href="#">UI/UX Design, UX Research, Motion Design</a>
            <p class="note">
              I am a creative UI/UX designer, I help individuals and companies
              to design intuitive and usable digital products.
            </p>
          </div>
        </div>
        <div class="cs-card">
          <img
            src="https://picsum.photos/200/300"
            class="card-img"
            alt=""
            srcset=""
          />
          <div class="card-desc">
            <h2>Kofamed</h2>
            <a href="#">UI/UX Design, UX Research, Motion Design</a>
            <p class="note">
              I am a creative UI/UX designer, I help individuals and companies
              to design intuitive and usable digital products.
            </p>
          </div>
        </div>
        <div class="cs-card">
          <img
            src="https://picsum.photos/200/300"
            class="card-img"
            alt=""
            srcset=""
          />
          <div class="card-desc">
            <h2>Kofamed</h2>
            <a href="#">UI/UX Design, UX Research, Motion Design</a>
            <p class="note">
              I am a creative UI/UX designer, I help individuals and companies
              to design intuitive and usable digital products.
            </p>
          </div>
        </div>
      </div>
      <h4 id="case">UI projects</h4>
      <!-- project section -->
      <div class="card-grid">
        <div class="project-card">
          <img
            src="https://picsum.photos/200/400"
            class="card-img"
            alt=""
            srcset=""
          />
          <div class="card-desc">
            <h2>Medical Landing Page</h2>
            <a href="#">UI, Motion design, Animation</a>
          </div>
        </div>
        <div class="project-card">
          <img
            src="https://picsum.photos/200/400"
            class="card-img"
            alt=""
            srcset=""
          />
          <div class="card-desc">
            <h2>Medical Landing Page</h2>
            <a href="#">UI, Motion design, Animation</a>
          </div>
        </div>
        <div class="project-card">
          <img
            src="https://picsum.photos/200/400"
            class="card-img"
            alt=""
            srcset=""
          />
          <div class="card-desc">
            <h2>Medical Landing Page</h2>
            <a href="#">UI, Motion design, Animation</a>
          </div>
        </div>
        <div class="project-card">
          <img
            src="https://picsum.photos/200/400"
            class="card-img"
            alt=""
            srcset=""
          />
          <div class="card-desc">
            <h2>Medical Landing Page</h2>
            <a href="#">UI, Motion design, Animation</a>
          </div>
        </div>
      </div>
    </section>
    <!-- contact section -->
    <section id="contact">
      <h4 id="case">Contact Me</h4>
      <div class="form-grider">
        <img src="../assets/images/working_girl.svg" alt="" srcset="" />
        <form id="contact-form"></form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home-view ",
};
</script>

<style lang="scss" scoped>
#wrapper {
  max-width: 100vw;
}
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
// reuseables
#case {
  margin: 32px 0px;
  text-decoration: underline;
  font-weight: 700;
  font-size: 18px;
  line-height: 130%;
}
// End of Reuseables
#featuredworks {
  width: 60%;
  margin: 4rem auto 4rem auto;
  #featured {
    font-size: 24px;
    line-height: 130%;
    /* identical to box height, or 39px */

    text-decoration-line: underline;
    text-align: center;
    text-decoration: underline;
    margin-bottom: 20px;
    hr {
      color: #fff;
    }
  }
}
.card-grid {
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 48px;
  margin: 16px 0px;
  .cs-card {
    display: flex;
    width: 100%;
    flex-direction: column;
    .card-img {
      width: 100%;
      object-fit: cover;
      height: 250px;
      border-radius: 20px 20px 0px 0px;
    }
    .card-desc {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding: 0px 0px 0px 16px;
      gap: 16px;
      background: #0f2b5f;
      border-radius: 0px 0px 20px 20px;
      h2 {
        margin: 8px 0px;
        font-weight: 700;
        font-size: 20px;
        line-height: 130%;
        color: #ffffff;
      }
      a {
        margin: 2px 0px;
        font-size: 16px;
        line-height: 143.2%;
        color: #c961de;
        text-decoration: none;
      }
      p {
        margin: 8px 0px 16px;
        font-size: 16px;
        line-height: 143.2%;
        color: #c4c4c4;
      }
    }
  }
  .project-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    .card-img {
      width: 100%;
      object-fit: cover;
      border-radius: 20px 20px 0px 0px;
      height: 400px;
    }
    .card-desc {
      h2 {
        margin: 8px 0px;
        font-weight: 700;
        font-size: 20px;
        line-height: 130%;
        color: #ffffff;
      }
      a {
        margin: 2px 0px;
        font-size: 16px;
        line-height: 143.2%;
        color: #c961de;
        text-decoration: none;
      }
    }
  }
}
#contact {
  text-align: center;
  width: 60%;
  margin: 4rem auto 4rem auto;
  .form-grider {
    display: grid;
    grid-template-areas:
      "svg nothing"
      "form form";
    img {
      display: grid;
      grid-area: "img";
      width: auto;
      height: 15rem;
    }
    #contact-form {
      display: grid;
      grid-area: "form";
      background-color: rgba(47, 47, 138, 0.6);
      border: 1px solid;
      border-image-source: linear-gradient(
        117.73deg,
        #ffffff 6.04%,
        #000000 99.35%
      );
      backdrop-filter: blur(20px);
      /* Note: backdrop-filter has minimal browser support */
      border-radius: 30px;
    }
  }
}
</style>
