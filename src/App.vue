<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
   

      <nav>
        <RouterLink v-bind:to="{ name: 'home' }" class="nav-link"><img :src="samy" class="nav-img"/></RouterLink>
        <RouterLink v-bind:to="{ name: 'about' }" class="nav-link"> <img :src="spike" class="nav-img"/></RouterLink>
        <RouterLink v-bind:to="{ name: 'askSamy' }" class="nav-link"> <img :src="parker" class="nav-img"/></RouterLink>
        <RouterLink v-bind:to="{ name: 'books' }" class="nav-link"> <img :src="ashley" class="nav-img"/></RouterLink>
        <RouterLink v-bind:to="{ name: 'comingSoon' }" class="nav-link"> <img :src="lenise" class="nav-img"/> </RouterLink>
        <RouterLink v-bind:to="{ name: 'forParents' }" class="nav-link"> <img :src="rosella" class="nav-img"/> Info for Parents</RouterLink>
        <RouterLink v-bind:to="{ name: 'reachOut' }" class="nav-link"> <img :src="stephanie" class="nav-img"/> Reach Out</RouterLink>
        <RouterLink v-bind:to="{ name: 'readAlouds' }" class="nav-link"> <img :src="flicker" class="nav-img"/> Read Alouds</RouterLink>
      </nav>

  </header>

  <RouterView />
</template>
<script>

export default {
  data(){
    return {
      spike: 'https://res.cloudinary.com/dthgudawp/image/upload/v1736285915/spike_poster_qzkagv.png',
      samy: 'https://res.cloudinary.com/dthgudawp/image/upload/v1736285876/samy_poster_cfoq1w.png',
      rosella: 'https://res.cloudinary.com/dthgudawp/image/upload/v1736285904/Rosella_Poster_naivel.png',
      ashley: 'https://res.cloudinary.com/dthgudawp/image/upload/v1736285904/ashley_poster_k2rgu4.png',
      parker: '',
      lenise: 'https://res.cloudinary.com/dthgudawp/image/upload/v1736285876/lenise_poster_fwliz4.png',
      stephanie: '',
      flicker: 'https://res.cloudinary.com/dthgudawp/image/upload/v1736285876/flicker_poster_wafqqn.png',


    }
  }
}

</script>

<style scoped>

</style>
