<template>
  <section id="project-intro" class="lg:mt-0 mt-4 lg:w-7/12 w-10/12 mx-auto" v-for="item in this?.projectDetail" :key="item.title">
    <picture class="w-full">
      <img  class="w-full rounded pro-img h-auto" :src="item?.link" alt="" srcset="" />
    </picture>
    <div class="desc_tags flex flex-col gap-2 lg:grid lg:grid-cols-3">
      <div class="item my-2">
        <h4 class="font-bold text-md">Project Title</h4>
        <p>{{item?.title}}</p>
      </div>
      <div class="item my-2">
        <h4 class="font-bold text-md">My Role</h4>
        <p>{{item?.role}}</p>
      </div>
      <div class="item my-2">
        <h4 class="font-bold text-md">Team Members</h4>
        <p>{{item?.members}}</p>
      </div>
      <div class="item my-2">
        <h4 class="font-bold text-md">Project Scope</h4>
        <p>{{item?.scope}}</p>
      </div>
      <div class="item my-2">
        <h4 class="font-bold text-md">Duration</h4>
        <p>{{item?.duration}}</p>
      </div>
      <div class="item my-2">
        <h4 class="font-bold text-md">Tools</h4>
        <p>{{item?.tools}}</p>
      </div>
    </div>
    <!-- <p class="text-xl font-bold underline mt-8 mb-2">Project Overview</p> -->
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

<style scoped>
picture{
  background-color: aliceblue;
}
.pro-img{
  width: 100%;
  height: 75vh;
  object-fit: cover;
  margin-top: 2.5rem;
}
@media (max-width: 768px) {
  .pro-img{
    height: 30vh;
  }
}
.content >>> p{
  margin: 1rem 0;
  font-size: 16px;
}
.content >>> h1{
  font-size: 22px;
}
.content >>> h2 {
  font-size: 18px;
}
.content >>> img{
  border-radius: 4px;
}
.content >>> ul{
  list-style: disc;
}
</style>
