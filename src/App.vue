// **** INSTALAR DEV TOOLS VUE ****
<script setup>
import { ref } from 'vue';
import BaseCard from './components/BaseCard.vue'

  const memes = ref([])
  // no tiene que ser reactivo
  let allMemes = []
  const favs = ref([])
  const loadData = async () => {
    const response = await fetch('https://api.imgFlip.com/get_memes')
    const { data } = await response.json()
    memes.value = data.memes
    allMemes = [...data.memes]
  }

  loadData()

  const handleInputChange = e => {
    const text = e.target.value
    memes.value = allMemes.filter(m => m.name.toLowerCase().includes(text.toLowerCase()))
  }

  const toggleFav = memeId => {
    const index = favs.value.indexOf(memeId)
    if (index > -1) {
      favs.value.splice(index, 1)
    } else favs.value.push(memeId)
  }

</script>

<template>
  <div class="container">
    <h1 v-custom-size:xl>Memes!</h1>
    <input
      type="text"
      placeholder="search meme"
      v-on:input="handleInputChange"
      class="input input-bordered w-full max-w-xs"
    />
    <section class="section">
      <h2 v-font-size-70 v-if="memes.length === 0">Loading...</h2>
      <BaseCard
        v-else
        v-for="meme in memes" :key="meme.id"
        :meme="meme"
        :method="toggleFav"
        :favs="favs"
      />
    </section>
  </div>
</template>

<style>
  .container {
    width: 100%;
    grid-column-start: 1;
    grid-column-end: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 24px;
  }


  .card:hover {
    transform: scale(1.1);
    transition: all 0.45s ease;
  }

</style>