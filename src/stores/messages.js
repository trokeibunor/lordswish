import {defineStore} from 'pinia'
import { db } from "@/db"
import {
    collection,
    addDoc,
    serverTimestamp,
} from "firebase/firestore";

export const useMessagesStore = defineStore('messages', {
    state: () => ({
        messages: []
    }),
    actions: {
        // Post messages to database
        async postMessage({name, email,subject, message}){
            try {
                console.log(name, email, subject, message)
                await addDoc(collection(db,"messages"),{
                    Name: name,
                    Email: email,
                    Subject: subject,
                    Message: message,
                    receivedAt: serverTimestamp()
                });
            } catch (error) {
                console.log(error)
            }
        }
    }
})