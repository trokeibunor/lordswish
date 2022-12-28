<template>
  <custom-particle/>
  <div class="Notif isProcessing" v-if="this.isProcessing">
      <img src="../assets/images/loader_gif.gif" alt="" srcset="" />
    </div>
  <div id="wrapper">
    <section id="hero">
      <p id="hi">Hi there! I'm</p>
      <h2 id="name">Lordswish</h2>
      <p id="desc">I Design experiences that solve user problems</p>
      <div class="cta">
        <a href="https://drive.google.com/file/d/1qwO6pvGaDa_MFYTUPZTRx4fT24jMWD79/view?usp=drivesdk" target="_blank" id="resume">Resume</a>
        <a href="#contact" id="hire">Hire me</a>
      </div>
    </section>
    <section id="portfoliio">
      <h3 id="featured">Featured Works</h3>
      <hr />
      <h4 id="case">Case Study</h4>
      <!-- card section -->
      <div class="card-grid">
        <router-link class="cs-card" :to="{name:'caseStudy',params: {id: item?.title}}"  v-for="item in this.projectInfo" :key="item?.title">
          <img
            :src="item?.link"
            class="card-img"
            alt=""
            srcset=""
          />
          <div class="card-desc">
            <h2>{{item?.title}}</h2>
            <!-- <router-link :to="{name:'case',params: {id: item?.title}}">UI/UX Design, UX Research, Motion Design</router-link> -->
            <p class="note">Role : {{item?.role}}</p>
            <p class="note">Scope : {{item?.scope}}</p>
            <p class="small">{{item?.timeToRead}} min(s) Read</p>
          </div>
        </router-link>
      </div>
      <h4 id="case">UI projects</h4>
      <!-- project section -->
      <div class="card-grid">
        <a :href="item?.route" v-for="item in this.uiProject" :key="item?.title" target="_blank" class="project-card">
          <img
            :src="item?.img_link"
            class="card-img"
            alt=""
            srcset=""
          />
          <h2>{{item.title}}</h2>
          <a href="#">{{item.features}}</a>
        </a>
      </div>
    </section>
    <!-- contact section -->
    <section id="contact" ref="contact">
      <h4 id="case" class="positioner">Contact Me</h4>
      <div class="form-grider">
        <img
          id="illustration"
          src="../assets/images/working_girl.svg"
          alt=""
          srcset=""
        />
        <div id="contact-form">
          <div class="form-desc">
            <h3>Get in Touch</h3>
            <p id="approach">
              I’m very approachable and would love to speak to you. Feel free to
              call, send me an email . Follow me in social media or simply
              complete the enquiry form.
            </p>
            <!-- mobile and mail -->
            <a href="tel:+2347046647498"
              ><img src="../assets/images/Phone.svg" alt="" /> +2347046647498</a
            >
            <a id="mail" href="mailto:kinglordswish@gmail.com"
              ><img src="../assets/images/Email.svg" alt="" srcset="" />
              Kinglordswish@gmail.com</a
            >
          </div>
          <form id="form" @submit.prevent="sendMail">
            <h3>Send Me a Message</h3>
            <input type="text" class="form_input" v-model="form.name" name="from_name" placeholder="Name" />
            <input type="email" class="form_input" v-model="form.email" name="reply_to" placeholder="Email" />
            <input type="text" class="form_input" v-model="form.subject" name="subject" placeholder="Subject" />
            <textarea
              v-model="form.message"
              name="message"
              placeholder="Your message"
              rows="8"
            ></textarea>
            <button id="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
    <footer-component />
  </div>
</template>

<script>
import footerComponent from "../components/footerComponent.vue";
import { mapActions, mapState } from "pinia";
import { useCaseStudiesStore } from "../stores/caseStudies";
import {useToast} from 'vue-toastification';
import CustomParticle from "../components/Particle.vue"
import { useMessagesStore } from "../stores/messages";
export default {
  name: "Home-view ",
  data() {
    return {
      form: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
    };
  },
  methods: {
    ...mapActions(useCaseStudiesStore, ['getArticles','getProjects']),
    ...mapActions(useMessagesStore, ['postMessage']),
    toggleLoader(){
      this.processingSwitch()
    },
    sendMail(e){
      if(this.form.name !== "" 
        && this.form.email !== "" 
        && this.form.subject !== "" 
        && this.form.message !== ""){
          try {
            this.postMessage(this.form.name,this.form.email,this.form.subject, this.form.message,e.target)
          } catch (error) {
            console.log(error)
          }finally{
            this.form.name = "";
            this.form.email = "";
            this.form.subject = "";
            this.form.message = "";
          }
        } else{
          const toast = useToast();
          toast.error("Please fill up the form")
        }
    },
  },
  computed: {
    ...mapState(useCaseStudiesStore, ['projectInfo','uiProject']),
    ...mapState(useMessagesStore,['isProcessing'])
  },
  mounted(){
    this.getArticles(),
    this.getProjects()
  },
  components: {
    footerComponent,
    CustomParticle
  },
};
</script>

<style lang="scss" scoped>
$media-desktop: "only screen and (max-width : 1024px)";
$media-tablet: "only screen and (max-width : 768px)";
$media-mobile: "only screen and (max-width : 600px)";
$media-mobile-sm: "only screen and (max-width : 480px)";
$media-desktop-strict: "only screen and (min-width: 768px)";
#wrapper {
  margin-top: 8rem;
  max-width: 100vw;
}
// Notification Style
.Notif {
  background-color: #0000008c;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1500;
  display: flex;
}
.isProcessing {
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img{
    width: 50px;
  }
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
@media #{$media-mobile} {
  #hero {
    margin-top: 5vh;
    width: 80%;
    gap: 20px;
    #hi {
      line-height: 120%;
    }
    #name {
      font-size: 42px;
    }
    #desc {
      font-weight: 400;
    }
    .cta {
      flex-direction: column;
      align-items: center;
      gap: 20px;
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
#portfoliio {
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
@media #{$media-mobile} {
  #portfoliio {
    width: 90%;
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
    text-decoration: none;
    display: flex;
    width: 100%;
    flex-direction: column;
    .card-img {
      width: 100%;
      object-fit: fill;
      height: 250px;
      border-radius: 20px 20px 0px 0px;
    }
    .card-desc {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding: 0px 0px 16px 16px;
      gap: 8px;
      background: #0f2b5f;
      border-radius: 0px 0px 20px 20px;
      min-height: 9.8rem;
      h2 {
        margin: 8px 0px;
        font-weight: 700;
        font-size: 16px;
        line-height: 120%;
        color: #ffffff;
        max-height: 50px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      a {
        margin: 2px 0px;
        font-size: 16px;
        line-height: 143.2%;
        color: #c961de;
        text-decoration: none;
      }
      .note {
        margin: 2px 0px;
        font-size: 14px;
        line-height: 100%;
        color: #c4c4c4;
      }
      .small{
        margin: 2px 0px;
        font-size: 12px;
        line-height: 100%;
        color: #c4c4c4;
        background-color:#0b1e42;
        border-radius: 12px;
        padding: 6px 10px;
        display: flex;
        justify-self: flex-end;
      }

    }
  }
  .project-card {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: #0f2b5f;
    padding: 8px;
    border-radius: 8px;
    width: 100%;
    .card-img {
      width: 100%;
      object-fit: cover;
      border-radius: 20px 20px 0px 0px;
      height:  200px;
      border-radius: 8px;
    }
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
@media #{$media-mobile} {
  .card-grid {
    grid-template-columns: none;
    grid-template-rows: auto auto;
  }
}
#contact {
  text-align: center;
  width: 60%;
  margin: 4rem auto 4rem auto;
  .positioner {
    margin-bottom: 15rem;
  }
  .form-grider {
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: left;
    img#illustration {
      width: auto;
      height: 40rem;
      position: absolute;
      z-index: 10;
      right: 75%;
      bottom: 57%;
    }
    #contact-form {
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding: 32px;
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
      #form {
        display: flex;
        flex-direction: column;
        input[type="text"],
          input[type="email"] {
            margin: 8px 0px !important; 
            padding: auto !important;
            height: auto;
            background: rgba(255, 255, 255, 0.3);
            box-shadow: 0px 10px 20px rgba(7, 7, 26, 0.15);
            border-radius: 10px;
            border: none;
            outline: none;
            color: #fff;
            font-weight: 400;
            font-size: 15px;
            line-height: 143.2%;
            padding: 10px 0px 10px 16px;
            margin: 8px 0px;
          }
        textarea {
          background: rgba(255, 255, 255, 0.3);
          box-shadow: 0px 10px 20px rgba(7, 7, 26, 0.15);
          border-radius: 10px;
          outline: none;
          border: none;
          padding: 10px 20px;
          margin: 8px 0px;
          color: #fff;
          font-family: "Poppins";
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
        }
        #submit {
          margin: 8px 0px;
          width: fit-content;
          height: fit-content;
          padding: 8px 16px;
          border: none;
          font-family: "Poppins";
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 130%;
          /* or 21px */
          /* black */
          background: #ffffff;
          box-shadow: 0px 10px 20px rgba(7, 7, 26, 0.15);
          border-radius: 10px;
          color: #252525;
          cursor: pointer;
        }
        #submit:hover {
          background: rgba(255, 255, 255, 0.692);
        }
      }
    }
    h3 {
      font-weight: 700;
      font-size: 20px;
      line-height: 140%;
      margin: 8px 0px;
    }
    p#approach {
      margin: 48px 0px 48px 0px;
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;
      width: 70%;
    }
    a {
      margin: 8px 0px;
      display: flex;
      flex-direction: row;
      text-decoration: none;
      color: #fff;
      img {
        max-width: 25px;
        max-height: 25px;
        margin-right: 8px;
      }
    }
    a#mail {
      margin-bottom: 48px;
    }
  }
}
@media #{$media-mobile} {
  #contact {
    width: 90%;
    .positioner {
      margin-bottom: 2rem;
    }
    p#approach {
      width: 50%;
    }
    .form-grider {
      img#illustration {
        height: 20rem;
        right: 30%;
        bottom: 75%;
      }
      #contact-form {
        margin-top: 10rem;
        display: grid;
        grid-template-columns: none;
        grid-template-rows: auto auto;
        padding: 8px 4px;
        .form-desc{
          h3 {
            width: 90%;
            margin: 16px;
          }
          p#approach {
            margin: 24px ;
            width: 90%;
          }
        }
        form {
          width: 90%;
          margin: 1px auto;
          input[type="text"],
          input[type="email"] {
            margin: 8px 0px;
            width: 100%;
            padding: auto;
            height: auto;
            background: rgba(255, 255, 255, 0.3);
            box-shadow: 0px 10px 20px rgba(7, 7, 26, 0.15);
            border-radius: 10px;
            border: none;
            outline: none;
            color: #fff;
            font-weight: 400;
            font-size: 15px;
            line-height: 143.2%;
          }
          textarea {
            padding: 0px;
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
