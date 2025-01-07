<template>
Email Sent: {{ emailSent }}

<form>
    <p>New Review for {{ bookTitle }}</p>
    <input textarea v-model="review"/>
    Your Name: <input type="text" v-model="reviewer"/>
    A Grown-Up's Email: <input type="email" v-model="reviewEmail"/>
</form>


    <button @click="addImage = true">Add an Image</button>
<div v-if="addImage">
    <!-- Show image upload section -->
    <p>Upload Image Section</p>
    <button v-on:click="upload">Open Upload Widget</button>
    
  </div>

  <!-- Image preview or additional UI can be added here -->
  <div v-if="showPreview" id="submitting-photo-grid">
    <h3>Image Uploaded: </h3>
    <img :src="picUrl" alt="Uploaded Image" id="submitting-photo"/>
    <p id="submitting-warning">All photos must be reviewed by an admin before posting.</p>

  </div>
  <button @click="sendMessage">Send Email</button>

</template>


<script>

import emailjs from 'emailjs-com';

export default {
  props: ['bookTitle'],
  data() {
    return {
      emailSent: false,
        picUrl: '',
      addImage: false, 
      showPreview: false,
      reviewer: '',
      reviewEmail: '',
      review: '',
      serviceId: 'service_erb6b3j',
       templateId: 'template_elqrr9r',
       publicKey: 'MemGTGxuCXEREwrUC',
    };
  },
  methods: {
    sendMessage(){
             emailjs.send(this.serviceId, this.templateId, {
                 reviewer: this.reviewer,
                 review: this.review,
                 from_email: this.reviewEmail,
                 bookTitle: this.bookTitle,
                 picUrl: this.picUrl,
             }, this.publicKey)
             .then((response) => { 
                 console.log("Email successfully sent!", response.status, response.text)
             },
      (error) => {
         console.log('Failed to send email:', error)
      })   
         this.emailSent = true;

     },


    upload() {
      this.myWidget.open();  // Open the Cloudinary upload widget
      this.addImage = false;
      this.showPreview = true;  // Hide upload form after opening widget
    },
    cancelUpload() {
      this.addImage = false;  // Hide the upload form if the user cancels
    },
},



mounted() {
    // Create Cloudinary widget
    this.myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: 'dthgudawp', 
        uploadPreset: 'ReviewImage',
        multiple: false,
      },
      (error, result) => {
        if (error) {
          console.error("Upload failed: ", error);
          this.handleError(error, "uploading");
        }
        if (result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
          this.picUrl = result.info.url;
          this.$store.commit('SET_NOTIFICATION', 'Image uploaded successfully!');
        }
      }
    );
  }
};
</script>