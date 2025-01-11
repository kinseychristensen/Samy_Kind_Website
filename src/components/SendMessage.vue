<template>
<div id="send-message">
<form>
    <p id="greeting">Dear {{answerer}},</p>
    <input textarea v-model="message" id="message"/>
    <div id="message-info">Your Name: <input type="text" v-model="fromName"/>
    A Grown-Up's Email: <input type="email" v-model="fromEmail"/></div>
</form>
<button @click="sendMessage" id="send-message-button">Send Email</button>
</div>
</template>

<script>
 
 import emailjs from 'emailjs-com';
 
 export default {
    props: ['answerer'],
    name: ['SendMessage'],
   data() {
     return {
       
         emailSent: false,
         message: '',
         fromName: '',
         fromEmail: '',

       serviceId: 'service_erb6b3j',
       templateId: 'template_zqfumhl',
       publicKey: 'MemGTGxuCXEREwrUC',
     };
   },
methods: {
     sendMessage(){
             emailjs.send(this.serviceId, this.templateId, {
                 answerer: this.answerer,
                 message: this.message,
                 from_name: this.fromName,
                 from_email: this.fromEmail,
             }, this.publicKey)
             .then((response) => { 
                 console.log("Email successfully sent!", response.status, response.text)
             },
      (error) => {
         console.log('Failed to send email:', error)
      })   
         this.emailSent = true;

     },
}
 }


</script>