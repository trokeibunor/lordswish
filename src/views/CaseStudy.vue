<template>
  <section id="project-intro">
    <picture>
      <img src="https://picsum.photos/200" alt="" srcset="" />
    </picture>
    <div class="desc_tags">
      <div class="item">
        <h4>Project Title</h4>
        <p>{{projectInfo.projectTitle}}</p>
      </div>
      <div class="item">
        <h4>My Role</h4>
        <p>{{projectInfo.myRole}}</p>
      </div>
      <div class="item">
        <h4>Team Members</h4>
        <p>{{projectInfo.teamMembers}}</p>
      </div>
      <div class="item">
        <h4>Project Scope</h4>
        <p>{{projectInfo.projectScope}}</p>
      </div>
      <div class="item">
        <h4>Duration</h4>
        <p>{{projectInfo.duration}}</p>
      </div>
      <div class="item">
        <h4>Tools</h4>
        <p>{{projectInfo.tools}}</p>
      </div>
    </div>
  </section>
  <section id="project-overview">   
  </section>
  <footer-component/>
</template>

<script>
import footerComponent from "../components/footerComponent.vue"
export default {
  name: "caseStudy",
  data() {
    return {
      projectInfo: {
        projectTitle: "",
        myRole: "",
        teamMembers: "",
        projectScope: "",
        duration: "",
        tools: "",
      },
      projectOverview: ""
    };
  },
  components: {
    footerComponent
  }
};
</script>

<style lang="scss" scoped>
// universal setup
// End of universal setup
// First section
#project-intro {
  .desc_tags {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
  }
}
</style>
