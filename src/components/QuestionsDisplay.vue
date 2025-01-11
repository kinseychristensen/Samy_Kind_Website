<template>
    <div id="questions-display">
   <div v-for="query in questionData" :key="query.question" class="question-flex">
  <div class="question"> 
    <p id="question-greeting">Dear {{ query.answerer }},</p>
        
    <p id="question-message">{{ query.question }}</p>  
    <p id="question-salutation">     - {{ query.asker }}</p></div>

     <div class="answer">
    <p id="answer-greeting">
        Hi {{ query.asker }}!</p>
    <p id="answer-message">{{ query.answer }}</p> 
    <p id ="answer-salutation"> - {{ query.answerer }}</p>  
    <img :src="characterPics[query.answerer]" class="avatar message-avatar"/>
   </div>
   </div>
</div>
</template>
<script>
import { questionData } from '@/QuestionsData';
import { characterPics } from '@/CharacterAvatarData';
export default {
    data(){
        return {
            questionData,
            characterPics,
             
            
        }
    },
   
}



</script>