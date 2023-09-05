<script setup lang="ts">
import NavbarComponent from './components/NavbarComponent.vue';
import HomeComponent from './components/HomeComponent.vue'
import JourneyComponent from './components/JourneyComponent.vue';
import BannerComponent from './components/BannerComponent.vue'
import DisplayComponent from './components/DisplayComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <div>
    <header class="sticky top-0">
      <NavbarComponent/>
    </header>
    <section>
      <HomeComponent/>
      <JourneyComponent/>
      <BannerComponent/>
      <DisplayComponent/>
    </section>
    <footer>
      <FooterComponent/>
    </footer>
  </div>
</template>