import {defineStore} from 'pinia'
import { db } from "@/db"
import {
    doc,
    setDoc,
} from "firebase/firestore";

export const useMessagesStore = defineStore('messages', {
    state: () => ({
        messages: []
    }),
    actions: {
        // Post messages to database
        async postMessage({name, email,subject, message}){
            try {
                await setDoc(doc(db,"messages"),{
                    Name: name,
                    Email: email,
                    Subject: subject,
                    Message: message,
                })
            } catch (error) {
                console.log(error)
            }
        }
    }
})