<template>
   <div v-for="query in questionData" :key="query.question">
   Dear {{ query.answerer }},
    {{ query.question }}
     - {{ query.asker }}
     <div>
        {{ query.answer }}
         - {{ query.answerer }}
   </div>
   </div>
</template>
<script>
import { questionData } from '@/QuestionsData';
export default {
    data(){
        return {
            questionData,
        }
    }
}



</script>