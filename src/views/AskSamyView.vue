<template>
    <div >
      <h1>This is ask samy page</h1>
      <p>Hi. I'm Parker Garden. I'm one of Samy's friends. I like planting my favorite vegetables 
        and even sharing some of it with my friends. I sometimes ask Samy questions about how his 
        life is going. He even asks me about things. We even ask our other friends questions and we 
        answer to each other. If you have any questions to ask Samy, ask them right away, because he 
        will answer them very soon.”

</p>
<SendMessage/>
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
   }
 }
</script>
  