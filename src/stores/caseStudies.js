import { defineStore } from 'pinia'
import { db } from "@/db"
import {
    getDocs,
    collection,
  } from "firebase/firestore";

export const useCaseStudiesStore = defineStore({
  id: 'caseStudies',
  state: () => ({
    projectInfo : []
  }),
  actions: {
    // Get articles
    async getArticles() {
        const querySnapshot = await getDocs(collection(db, "projects"));
        this.projectInfo = [];
        querySnapshot.forEach((doc) => {
          const dataObject = doc.data();
          // Actions can mutate state in pinia
          // mutate projects
          this.projectInfo.push({ ...dataObject });
          console.log(this.projectInfo)
        });
      },
    //   get single article.
  }
})