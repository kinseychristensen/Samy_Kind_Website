<template>
    <div class="page-grid">
      <h1 class="page-title">This is the parents page</h1>
        <img :src="rosellaPic" class="avatar page-avatar"/>
        <div class="avatar-intro">“Hi. My name is Rosella Blossum. I'm one of Samy's friends. I like planting flowers and sharing
        some of the flowers with others. Right now, I would like to share with the parents and teachers 
        about helping kids become engaged in the Samy Kind books. We have coloring pages that children 
        can color. We even have a few fun craft activities that we've done in the books. As we have formed 
        our kindness club, we would like you to form a book club based on our adventures together. You can 
        even teach them about the lessons we've learned and how they can imply in the long run of life.”
        </div>
<div class="page-contents">
    <a href="https://drive.google.com/drive/folders/1zt-fyN8UkTFzFVCOaEymrBrxD6Vwajd0?usp=sharing" class="link-as-button">Coloring Pages</a>


    </div>
  </div>
  </template>
   <script>
   export default {
     data(){
       return {
        rosellaPic: 'https://res.cloudinary.com/dthgudawp/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1736285903/Rosella_Avatar_s5nzt0.png',
       }
     }
   }
   </script>