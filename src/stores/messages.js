import {defineStore} from 'pinia'
import { db } from "@/db"
import {
    collection,
    addDoc,
    serverTimestamp,
} from "firebase/firestore";
import emailjs from 'emailjs-com';
import { useToast } from 'vue-toastification';

export const useMessagesStore = defineStore('messages', {
    state: () => ({
        messages: [],
        isProcessing: false,
        mailData:{
            service_ID: "service_yvgjibc",
            template_ID: "template_ms0xoqp",
            userID: "YgFr_HC_CEEFSDd2a",
        },
    }),
    actions: {
        // Post messages to database
        async postMessage(name, email,subject, message,target){
            this.isProcessing = true;
            try {
                emailjs.sendForm(
                    this.mailData.service_ID,
                    this.mailData.template_ID,
                    target,
                    this.mailData.userID,{
                        from_name: name,
                        subject: subject,
                        message: message,
                        reply_to: email,
                      }
                )
                await addDoc(collection(db,"messages"),{
                    Name: name,
                    Email: email,
                    Subject: subject,
                    Message: message,
                    receivedAt: serverTimestamp()
                });
            } catch (error) {
                console.log(error)
            } finally{
                this.isProcessing = false;
                const toast = useToast()
                toast.info("Email has been sent")
            }
            
        }
    }
})