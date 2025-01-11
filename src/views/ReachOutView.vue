<template>
    <div class="page-grid">
      <h1 class="page-title">This is the reach out page</h1>
        <img :src="stephaniePic" class="avatar page-avatar"/>
        <div class="avatar-intro">“Hi. My name is Stephanie Sugarplum. I'm one of Samy's best friends. I love anything that deals with sweetness. 
        It would be sweet if you can reach out to Mr. Nate by sending him a message on his different social media links. He's 
        always looking forward to hearing your feedback on what you think of all his hard work on these books. Kids, you can 
        send him an email or write a letter to him. He wants to hear from you.”
For parents and teachers, you can look onto his Facebook account to see his posts. You can go to his YouTube channel to hear him 
read the stories out loud. You can even go to Amazon to order the books on Paperback and Kindle. You can even send a letter or email 
to Mr. Nate about how much your kids love the books and how it has changed your lives. You can also say that you're looking forward
to the next Samy Kind adventure."
</div>
<div class="page-contents">
      links to amazon youtube and email
  
    <SendMessage :answerer="answerer"/>
 </div>
</div>
 </template>
  <script>
  import SendMessage from '@/components/SendMessage.vue';
  export default  {
    components: {
      SendMessage,
    },
    data(){
      return {
      answerer: 'Mr Nate',
      stephaniePic: 'https://res.cloudinary.com/dthgudawp/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1736346271/stephanie_avatar_ifqodc.png',
    }
  },
}
  
</script>
  