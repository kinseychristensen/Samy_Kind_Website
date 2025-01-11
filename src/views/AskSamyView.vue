<template>
    <div class="page-grid">
      <h1 class="page-title">Ask Samy (and his friends!)</h1>
      <img :src="parkerPic" class="avatar page-avatar"/>
      <div class="avatar-intro">Hi. I'm Parker Garden. I'm one of Samy's friends. I like planting my favorite vegetables 
        and even sharing some of it with my friends. I sometimes ask Samy questions about how his 
        life is going. He even asks me about things. We even ask our other friends questions and we 
        answer to each other. If you have any questions to ask Samy, ask them right away, because he 
        will answer them very soon.” 
      <p></p>
      <button @click="choice = 1">Ask a Question!</button>
      <button @click="choice = 2">See Answers from Samy and his Friends</button></div>

<div class="page-contents">





<div v-if="choice == 1" id="ask-questions">
<h2>Who would you like to ask a question?</h2>
<div id="ask-samy-flex">
<button @click="answerer = 'Samy'" class="button-for-ask-samy"><img :src="samyPic" class="avatar"/> Samy</button>
<button @click="answerer = 'Lucy'" class="button-for-ask-samy"><img :src="samyPic" class="avatar"/>Lucy</button>
<button @click="answerer = 'Flicker'" class="button-for-ask-samy"> <img :src="flickerPic" class="avatar"/>Flicker</button>
<button @click="answerer = 'Murty'" class="button-for-ask-samy"> <img :src="samyPic" class="avatar"/>Murty</button>
<button @click="answerer = 'Spike'" class="button-for-ask-samy"> <img :src="spikePic" class="avatar"/>Spike</button>
<button @click="answerer = 'Ashley'" class="button-for-ask-samy"> <img :src="ashleyPic" class="avatar"/>Ashley</button>
<button @click="answerer = 'Evan'" class="button-for-ask-samy"> <img :src="samyPic" class="avatar"/>Evan</button>
<button @click="answerer = 'Lenise'" class="button-for-ask-samy"> <img :src="lenisePic" class="avatar"/>Lenise</button>
<button @click="answerer = 'Parker'" class="button-for-ask-samy"> <img :src="parkerPic" class="avatar"/>Parker</button>
<button @click="answerer = 'Stephanie'" class="button-for-ask-samy"> <img :src="stephaniePic" class="avatar"/>Stephanie</button>
<button @click="answerer = 'Rosella'" class="button-for-ask-samy"> <img :src="rosellaPic" class="avatar"/>Rosella</button>
<button @click="answerer = 'Mr Nate'" class="button-for-ask-samy"> <img :src="mrNatePic" class="avatar"/>Mr Nate</button>
</div>
<SendMessage :answerer="answerer"/>
</div>


<div v-if="choice == 2">

<QuestionsDisplay/>
</div>

    </div>
    </div>
  </template>
 <script>
 import SendMessage from '@/components/SendMessage.vue';
 import QuestionsDisplay from '@/components/QuestionsDisplay.vue';
 export default  {
   components: {
     SendMessage,
     QuestionsDisplay
   },
   data(){
    return {
      answerer: 'Samy',
      parkerPic: 'https://res.cloudinary.com/dthgudawp/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1736602040/parker_avatar_fl6nxm.png',
      samyPic: 'https://res.cloudinary.com/dthgudawp/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1736285876/samy_avatar_ciepz3.png',
      flickerPic: 'https://res.cloudinary.com/dthgudawp/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1736285876/flicker_avatar_bock5x.png',
      spikePic: 'https://res.cloudinary.com/dthgudawp/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1736285914/spike_avatar_qocxmg.png',
      ashleyPic: 'https://res.cloudinary.com/dthgudawp/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1736285904/ashley_avatar_bezw75.png',
      lenisePic: 'https://res.cloudinary.com/dthgudawp/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1736285903/lenise_avatar_dkv7up.png',
      stephaniePic: 'https://res.cloudinary.com/dthgudawp/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1736346271/stephanie_avatar_ifqodc.png',
      rosellaPic: 'https://res.cloudinary.com/dthgudawp/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1736285903/Rosella_Avatar_s5nzt0.png',
      mrNatePic: 'https://res.cloudinary.com/dthgudawp/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1736602055/nate_jzvk2g.png',
      choice: 0,

    }
   }
 }
</script>
  