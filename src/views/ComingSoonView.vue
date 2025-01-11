<template>
    <div class="page-grid">
      <h1 class="page-title">What's Mr Nate working on next?</h1>
        <img :src="lenisePic" class="avatar page-avatar"/>
        <div class="avatar-intro">“Hi, My name is Lenise Beautiful. You can call me Lenny. I'm one of Samy's best friends. I love 
        beautiful things in the world. The flowers, the trees, the people, and more. I even love how beautiful 
        it can be to see what comes up next in the future. Speaking of which, I'm super excited to tell you 
        about upcoming books that Mr. Nate is currently writing and drawing. And how his read aloud skills are 
        going on his videos. Check them out! They'll turn out beautiful.”
      </div>
      <div class="page-contents">This page is currently under construction.  Check back again soon!</div>
    </div>
  </template>
  <script>
  export default {
    data(){
      return {
        lenisePic: 'https://res.cloudinary.com/dthgudawp/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1736285903/lenise_avatar_dkv7up.png',
    }
  }
}
  </script>