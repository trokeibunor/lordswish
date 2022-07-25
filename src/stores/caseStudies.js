import { defineStore } from 'pinia'
import { db } from "@/db"
import {
    doc,
    getDoc,
    getDocs,
    collection,
  } from "firebase/firestore";

export const useCaseStudiesStore = defineStore({
  id: 'caseStudies',
  state: () => ({
    projectInfo : [],
    projectDetail: []
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
    async getSingleDoc(title){
      const docRef = doc(db,"projects",title);
      const docSnap = await getDoc(docRef);
      this.projectDetail = [];
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        this.projectDetail.push(docSnap.data())
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }
  }
})