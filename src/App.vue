<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <RouterLink v-bind:to="{ name: 'home' }"  id="mini-screen-home"><img :src="samy"/></RouterLink>

      <nav>
        <RouterLink v-bind:to="{ name: 'home' }" class="nav-link"><img :src="samy" class="nav-img"/></RouterLink>
        <RouterLink v-bind:to="{ name: 'books' }" class="nav-link"> <img :src="ashley" class="nav-img"/><a class="nav-button">The Books</a></RouterLink>
        <RouterLink v-bind:to="{ name: 'readAlouds' }" class="nav-link"> <img :src="flicker" class="nav-img"/><a class="nav-button">Read Alouds</a></RouterLink>
        <RouterLink v-bind:to="{ name: 'comingSoon' }" class="nav-link"> <img :src="lenise" class="nav-img"/><a class="nav-button">Coming Soon</a></RouterLink>
        <RouterLink v-bind:to="{ name: 'about' }" class="nav-link"> <img :src="spike" class="nav-img"/><a class="nav-button">About the Author</a></RouterLink>
        <RouterLink v-bind:to="{ name: 'askSamy' }" class="nav-link"> <img :src="parker" class="nav-img"/><a class="nav-button"> Ask Samy</a></RouterLink>
        <RouterLink v-bind:to="{ name: 'forParents' }" class="nav-link"> <img :src="rosella" class="nav-img"/><a class="nav-button">For Parents</a></RouterLink>
        <RouterLink v-bind:to="{ name: 'reachOut' }" class="nav-link"> <img :src="stephanie" class="nav-img"/><a class="nav-button">Reach Out</a></RouterLink>
      </nav>

  </header>

  <RouterView id="main-view"/>
</template>
<script>

export default {
  data(){
    return {
      spike: 'https://res.cloudinary.com/dthgudawp/image/upload/v1736826940/spike_poster_red_tddcd3.png',
      samy: 'https://res.cloudinary.com/dthgudawp/image/upload/v1736826944/samy_poster_red_zea92m.png',
      rosella: 'https://res.cloudinary.com/dthgudawp/image/upload/v1736826938/rosella_poster_red_folp97.png',
      ashley: 'https://res.cloudinary.com/dthgudawp/image/upload/v1736826943/ashley_poster_red_disy7j.png',
      parker: 'https://res.cloudinary.com/dthgudawp/image/upload/v1736826939/parker_poster_red_xj9wzw.png',
      lenise: 'https://res.cloudinary.com/dthgudawp/image/upload/v1736826941/lenise_poster_red_g2lroh.png',
      stephanie: 'https://res.cloudinary.com/dthgudawp/image/upload/v1736826937/stephanie_poster_red_gpobrv.png',
      flicker: 'https://res.cloudinary.com/dthgudawp/image/upload/v1736826942/flicker_poster_red_eruugc.png',


    }
  }
}

</script>




