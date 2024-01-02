<script setup>
  defineProps({
    meme: {
      type: Object,
      default: () => ({ url: 'https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg' }) 
    },
    method: {
      type: Function
    },
    favs: {
      type: Array
    }
  })

</script>

<template>
    <div class="card card-side bg-base-100 shadow-xl m-5 p-5 w-4/12">
    <figure><img :src="meme.url" :alt="meme.name"/></figure>
    <div class="card-body">
      <h2 class="card-title">{{ meme.name }}</h2>
      <p>ID: {{ meme.id }}</p>
      <div class="card-actions justify-end">
        <button
          class="btn btn-primary"
          @click="method(meme.id)"
        >
          {{ favs.includes(meme.id) ? '♥️' : '♡'  }}
        </button>
      </div>
    </div>
  </div>
</template>