
<template>
  <div class="page-grid">
    <h1 class="page-title">Welcome!</h1>
      <img :src="samyPic" class="avatar page-avatar"/>
      <div class="avatar-intro">"Hello. My name is Samy Kind and this is my sister, Lucy. We are the first main characters that Mr. Nate ever 
      created since he was a child. I would like to introduce you to my friends on this website. They have many 
      fun activities that show you what's so great about this website. Meet my friends by clicking on the posters 
      they're holding. If you want to come back to the homepage, click on mine and Lucy's poster."</div>
      <div class="page-contents"></div>

    </div>
</template>
<script>
export default {
  data(){
    return {
      samyPic: 'https://res.cloudinary.com/dthgudawp/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1736285876/samy_avatar_ciepz3.png',
  }
}
}
</script>