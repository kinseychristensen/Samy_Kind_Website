<template>
 <div v-for="book in bookData" v-bind:key="book.bookOrder" :value="book.bookOrder">
<button @click="currentBook = book.bookOrder">{{book.bookTitle}}</button>
    </div>
    ___________________________


<div v-for="book in bookData" v-bind:key="book.bookOrder" :value="book.bookOrder">
    <div v-if="currentBook == book.bookOrder">
    Cover: {{ book.bookCover }}
    {{ book.bookTitle }}
    Synopsis: {{ book.description }}
    Amazon Link: {{ book.amazonLink }}

    Mr Nate's Notes: {{ book.nateNotes }}
    Reviews
    <div v-for="review in book.reviews" :key="review.review">
        {{ review.review }}
        <p> - {{ review.reviewer }}</p>
    </div>
    <SendMessage/>
</div>
</div>
 

</template>
<script>
import SendMessage from './SendMessage.vue';
import {bookData} from '../BooksData.js';

export default {
    components: {
        SendMessage,
    },
    data() {
        return {
        bookData,
        currentBook: 0,
    }
}
}
</script>