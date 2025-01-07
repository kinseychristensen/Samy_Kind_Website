<script setup>

</script>

<template>
  <main>
    <h1>this is the home page</h1>

    <div>
      <img :src="samyPic"/>
      Hello. My name is Samy Kind and this is my sister, Lucy. We are the first main characters that Mr. Nate ever 
      created since he was a child. I would like to introduce you to my friends on this website. They have many 
      fun activities that show you what's so great about this website. Meet my friends by clicking on the posters 
      they're holding. If you want to come back to the homepage, click on mine and Lucy's poster.


    </div>
  </main>
</template>
<script>
export default {
  data(){
    return {
      samyPic: 'https://res.cloudinary.com/dthgudawp/image/upload/v1736285876/samy_avatar_ciepz3.png',
    }
  }
}
</script>