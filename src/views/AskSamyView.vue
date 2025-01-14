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
      <button @click="choice = 1" class="link-as-button">Ask a Question!</button>
      <button @click="choice = 2" class="link-as-button">See Answers from Samy and his Friends</button></div>

<div class="page-contents">





<div v-if="choice == 1" id="ask-questions">
<h2>Who would you like to ask a question?</h2>
<div id="ask-samy-flex">
<div v-for="character in characters" :key="character"><button @click="answerer=character" class="button-for-ask-samy">
  <img :src="characterPics[character]" class="avatar" />
  {{ character }}</button>

</div>
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
 import { characterPics } from '@/CharacterAvatarData';
 export default  {
   components: {
     SendMessage,
     QuestionsDisplay
   },
   data(){
    return {
      answerer: 'Samy',
     characterPics,
     characters: ['Samy', 'Parker', 'Flicker', 'Spike', 'Ashley', 'Lenise', 'Stephanie', 'Rosella', 'Evan', 'Lucy', 'Murty', 'StellaRose', 'MrNate'
     ],
      choice: 0,
      parkerPic: 'https://res.cloudinary.com/dthgudawp/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1736602040/parker_avatar_fl6nxm.png',

    }
   }
 }
</script>
  