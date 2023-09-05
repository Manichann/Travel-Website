<script setup lang="ts">
import { ref } from 'vue'

interface MenuList {
  name: string
  link: string
}

const menus = ref<MenuList[]>([
  {
    name: 'Home',
    link: 'home'
  },
  {
    name: 'Blog',
    link: 'blog'
  },
  {
    name: 'Offers',
    link: 'offer'
  },
  {
    name: 'Services',
    link: 'service'
  },
  {
    name: 'Contact',
    link: 'contact'
  }
])
</script>

<template>
  <div class="navbar w-full h-16 fixed justify-between">
    <div class="">
      <a href="#" class="text-white text-[1.5rem]">Travel.co</a>
    </div>
    <div>
      <ul class="" v-for="(menu, idx) in menus" :key="idx">
        <li class="hidden md:flex lg:flex px-10 hover:text-blue-400 text-white"><a :href="`${menu.link}`">{{ menu.name }}</a></li>
      </ul>
    </div>
  </div>
</template>
