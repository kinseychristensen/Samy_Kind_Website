<template>
    <div class="page-grid" >
      <h1 class="page-title">The Samy Kind Book Series</h1>
      <img :src="ashleyPic" class="avatar page-avatar"/>
      <div class="avatar-intro">Hi, My name is Ashley Morgan. I'm one of Samy's best friends. I secretly have a crush on him, because he is so 
        kind in many ways. But I try to be careful about showing how much I like him, because some things make him 
        uncomfortable, but I'm also fond of books. I like to read books, so I would like to introduce you to the books that
        Mr. Nate has written, drawn and published. They each tell different stories about me, Samy and our friends. I will 
        tell you what they're about and Mr. Nate will tell you why he wrote them. </div>
      <div class="page-contents">
        <BookDisplay/></div>



    </div>
  </template>
  <script>
import BookDisplay from '../components/BookDisplay.vue';

export default{

  components: {
    BookDisplay,
  }, 
  data(){
    return {
      ashleyPic: 'https://res.cloudinary.com/dthgudawp/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1736285904/ashley_avatar_bezw75.png',
    }
  }
}
</script>
