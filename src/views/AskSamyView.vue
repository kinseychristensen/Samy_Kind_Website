<template>
    <div >
      <h1>This is ask samy page</h1>
      <img :src="parkerPic"/>
      <p>Hi. I'm Parker Garden. I'm one of Samy's friends. I like planting my favorite vegetables 
        and even sharing some of it with my friends. I sometimes ask Samy questions about how his 
        life is going. He even asks me about things. We even ask our other friends questions and we 
        answer to each other. If you have any questions to ask Samy, ask them right away, because he 
        will answer them very soon.”

</p>
<p>Who would you like to ask a question?</p>
<button @click="answerer = 'Samy'">Samy</button>
<button @click="answerer = 'Lucy'">Lucy</button>
<button @click="answerer = 'Flicker'">Flicker</button>
<button @click="answerer = 'Murty'">Murty</button>
<button @click="answerer = 'Spike'">Spike</button>
<button @click="answerer = 'Ashley'">Ashley</button>
<button @click="answerer = 'Evan'">Evan</button>
<button @click="answerer = 'Lenise'">Lenise</button>
<button @click="answerer = 'Parker'">Parker</button>
<button @click="answerer = 'Stephanie'">Stephanie</button>
<button @click="answerer = 'Rosella'">Rosella</button>
<button @click="answerer = 'Mr Nate'">Mr Nate</button>
<SendMessage :answerer="answerer"/>
<QuestionsDisplay/>
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
      parkerPic: '',
    }
   }
 }
</script>
  