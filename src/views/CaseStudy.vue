<template>
  <section id="project-intro" class="lg:mt-0 mt-4 lg:w-7/12 w-10/12 mx-auto" v-for="item in this?.projectDetail" :key="item.title">
    <picture class="w-full">
      <img  class="w-full rounded pro-img h-auto" :src="item?.link" alt="" srcset="" />
    </picture>
    <div class="desc_tags flex flex-col gap-2 lg:grid lg:grid-cols-3">
      <div class="item my-2">
        <h4 class="font-bold text-lg">Project Title</h4>
        <p>{{item?.title}}</p>
      </div>
      <div class="item my-2">
        <h4 class="font-bold text-lg">My Role</h4>
        <p>{{item?.role}}</p>
      </div>
      <div class="item my-2">
        <h4 class="font-bold text-lg">Team Members</h4>
        <p>{{item?.members}}</p>
      </div>
      <div class="item my-2">
        <h4 class="font-bold text-lg">Project Scope</h4>
        <p>{{item?.scope}}</p>
      </div>
      <div class="item my-2">
        <h4 class="font-bold text-lg">Duration</h4>
        <p>{{item?.duration}}</p>
      </div>
      <div class="item my-2">
        <h4 class="font-bold text-lg">Tools</h4>
        <p>{{item?.tools}}</p>
      </div>
    </div>
    <p class="text-xl font-bold underline mt-8 mb-2">Project Overview</p>
    <div v-html="item?.content" class="content mt-4 mb-8">
    </div>
  </section>
  <section id="project-overview">   
  </section>
  <footer-component/>
</template>

<script>
import footerComponent from "../components/footerComponent.vue";
import { mapActions, mapState } from "pinia";
import { useCaseStudiesStore } from "../stores/caseStudies";
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
      projectOverview: "",
      project: ""
    };
  },
  components: {
    footerComponent
  },
  methods: {
    ...mapActions(useCaseStudiesStore,['getSingleDoc'])
  },
  computed: {
    ...mapState(useCaseStudiesStore, ['projectDetail'])
  },
  mounted(){
    this.getSingleDoc(this.$route.params.id);
  }
};
</script>

<style lang="scss" scoped>
.pro-img{
  height: 75vh;
  max-height: 600px;
}
@media (max-width: 768px) {
  .pro-img{
    height: 35vh;
  }
}
.content > p{
  padding: 2rem 0;
}
.content > img{
  border-radius: 4px;
}
</style>
