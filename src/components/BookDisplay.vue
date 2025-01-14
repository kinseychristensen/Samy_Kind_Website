<template>
    <h2 id="books-choose">Click on a book to learn more about it!</h2>
    <div id="cover-flex">
 <div v-for="book in bookData" v-bind:key="book.bookOrder" :value="book.bookOrder">
<button @click="currentBook = book.bookOrder"><img :src="book.bookCover" id="tiny-cover"></button>
    </div>
</div>
    

<div v-for="book in bookData" v-bind:key="book.bookOrder" :value="book.bookOrder">
    <div v-if="currentBook == book.bookOrder" class="book-grid" :style="{backgroundColor: getBackgroundColor(book.bookOrder) }">
    <img :src="book.bookCover" class="full-cover">
    <h1 class="title-of-book">{{ book.bookTitle }}</h1>
   <div class="synopsis"> {{ book.description }}</div>
   <a :href="book.amazonLink" class="buy-it">Buy the Book on Amazon!</a>

    <div class="nate-notes"><img :src="mrNatePic" class="avatar" id="about-image"/>{{ book.nateNotes }}</div>
    <h3 class="reviews-title">Reviews</h3>
    <div class="review-flex">
    <div v-for="review in book.reviews" :key="review.id" class="indiv-review">
        <p>{{ review.review }}</p>
        <p class="reviewer"> - {{ review.reviewer }}</p>
    <img :src="review.picUrl" class="review-pic" v-if="review.picUrl != ''"/>
</div>
    </div>

    <button @click="showReview = true" class="send-review">Write a Review</button>
<div v-if="showReview" class="new"> <SendReview :bookTitle="book.bookTitle"/></div>

</div>
</div>
 

</template>
<script>

import {bookData} from '../BooksData.js';
import SendReview from './SendReview.vue';

export default {
    components: {
  
        SendReview,
    },
    data() {
        return {
        bookData,
        currentBook: 0,
        showReview: false,
        mrNatePic: 'https://res.cloudinary.com/dthgudawp/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1736602055/nate_jzvk2g.png',
    }
}, methods: {
    getBackgroundColor(bookOrder) {
        const colors={
        1: '#add8e6', 
        2: '#ffb6c1',
        3: '#ffdbbb',
        4: '#ffffc5',
        5: '#d1ffbd',
    };
    return colors[bookOrder] || '#ffffff'; // Default color if not mapped
  },
    }
}
</script>