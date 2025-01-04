<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
   

      <nav>
        <RouterLink v-bind:to="{ name: 'home' }">Home</RouterLink>
        <RouterLink v-bind:to="{ name: 'about' }">About Mr Nate</RouterLink>
        <RouterLink v-bind:to="{ name: 'askSamy' }">Ask Samy</RouterLink>
        <RouterLink v-bind:to="{ name: 'books' }">Books</RouterLink>
        <RouterLink v-bind:to="{ name: 'comingSoon' }">Coming Soon!</RouterLink>
        <RouterLink v-bind:to="{ name: 'forParents' }">Info for Parents</RouterLink>
        <RouterLink v-bind:to="{ name: 'reachOut' }">Reach Out</RouterLink>
        <RouterLink v-bind:to="{ name: 'readAlouds' }">Read Alouds</RouterLink>
      </nav>

  </header>

  <RouterView />
</template>

<style scoped>

</style>
