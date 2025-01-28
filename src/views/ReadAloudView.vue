<template>
    <div class="page-grid">
      <h1 class="page-title">Read Alouds</h1>
    
        <img :src="flickerPic" class="avatar page-avatar"/>
        <div class="avatar-intro">"Hi there. I'm Flicker Dragon, one of Samy's best friends. I like fire and heat, but I like it in careful ways, just 
        the way I like being confident about things in careful ways too. I'm confident to tell you that Mr. Nate has his
        own YouTube channel on read-alouds for each chapter of one book at a time. He has a very fluent voice when it comes
         to reading about us. He can do different voices and tones of how the story goes. He's a very exciting reader. I 
         confidently recommend hearing the way he reads. It's really entertaining.”
      </div>
      <div class="page-contents">
      <ReadAloudGallery/>
    </div>
    </div>
  </template>
  <script>
import ReadAloudGallery from '../components/readAloudGallery.vue'

export default {
  components: {
    ReadAloudGallery,
  },
  data(){
    return {
      flickerPic: 'https://res.cloudinary.com/dthgudawp/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1736285876/flicker_avatar_bock5x.png',
    }
  }
}
</script>
