<script setup lang="ts">
import { ref } from 'vue'

interface JourneyContainer{
    image: string
    alt: string
    location: string
}

const journeys = ref<JourneyContainer[]>([
    {
        image: "src/assets/image/thatluang.jpeg",
        alt: "that luang",
        location: "That Luang, Vientiane"
    },
    {
        image: "src/assets/image/patuxai.jpg",
        alt: "patuxai",
        location: "Patuxai, Vientiane"
    },
    {
        image: "src/assets/image/watxiengthong.jpeg",
        alt: "wat xieng thong",
        location: "Wat Xieng Thong, Luangprabang"
    },
    {
        image: "src/assets/image/kuangsi.jpeg",
        alt: "kuang si waterfall",
        location: "Kuang si Waterfall, Luangprabang"
    },
    {
        image: "src/assets/image/HawPraBang.jpg",
        alt: "haw pra bang",
        location: "Haw Pra Bang, Luangprabang"
    },
    {
        image: "src/assets/image/watphu.jpeg",
        alt: "wat phu",
        location: "Wat Phu, Champasack"
    },
])
</script>

<template>
    <div class="py-20 px-4 m-auto">
      <h2 class="text-4xl font-extrabold text-blue-500 mb-4 text-center">Start Your Journey</h2>
      <p class="text-base italic text-blue-300 mb-20 text-center">The most search countries in September</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 md:gap-4">
        <div class="bg-base-200 mx-auto" v-for="(card, idx) in journeys" :key="idx">
          <img :src="card.image" :alt="card.alt" class="h-[20rem] w-[34rem] object-fill"/>
          <div class="p-4 text-left flex items-center gap-2 cursor-pointer">
            <i class="ri-map-pin-2-fill text-xl"></i>
            <span class="italic">{{card.location}}</span>
          </div>
        </div>
      </div>
    </div>
</template>

