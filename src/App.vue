<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
   

      <nav>
        <RouterLink v-bind:to="{ name: 'home' }" class="nav-link"><img :src="samy" class="nav-img"/></RouterLink>
        <RouterLink v-bind:to="{ name: 'books' }" class="nav-link"> <img :src="ashley" class="nav-img"/></RouterLink>
        <RouterLink v-bind:to="{ name: 'readAlouds' }" class="nav-link"> <img :src="flicker" class="nav-img"/></RouterLink>
        <RouterLink v-bind:to="{ name: 'comingSoon' }" class="nav-link"> <img :src="lenise" class="nav-img"/></RouterLink>
        <RouterLink v-bind:to="{ name: 'about' }" class="nav-link"> <img :src="spike" class="nav-img"/></RouterLink>
        <RouterLink v-bind:to="{ name: 'askSamy' }" class="nav-link"> <img :src="parker" class="nav-img"/></RouterLink>
        <RouterLink v-bind:to="{ name: 'forParents' }" class="nav-link"> <img :src="rosella" class="nav-img"/></RouterLink>
        <RouterLink v-bind:to="{ name: 'reachOut' }" class="nav-link"> <img :src="stephanie" class="nav-img"/></RouterLink>
      </nav>

  </header>

  <RouterView />
</template>
<script>

export default {
  data(){
    return {
      spike: 'https://res.cloudinary.com/dthgudawp/image/upload/v1736347836/spike_poster_text_r5rcuj.png',
      samy: 'https://res.cloudinary.com/dthgudawp/image/upload/v1736347837/samy_poster_text_uiw4vj.png',
      rosella: 'https://res.cloudinary.com/dthgudawp/image/upload/v1736348054/rosella_poster_text_a1tutm.png',
      ashley: 'https://res.cloudinary.com/dthgudawp/image/upload/v1736347835/ashley_poster_text_aagz5c.png',
      parker: 'https://res.cloudinary.com/dthgudawp/image/upload/v1736602052/parker_poster_text_g0sz4m.png',
      lenise: 'https://res.cloudinary.com/dthgudawp/image/upload/v1736347836/lenise_poster_text_zbjgvt.png',
      stephanie: 'https://res.cloudinary.com/dthgudawp/image/upload/v1736347836/stephanie_poster_text_gsoog1.png',
      flicker: 'https://res.cloudinary.com/dthgudawp/image/upload/v1736348640/flicker_poster_text_hmzj7n.png',


    }
  }
}

</script>

<style scoped>

</style>
