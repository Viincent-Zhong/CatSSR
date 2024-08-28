<script setup>

import './style.css'
import axios from 'axios'
import { ref, onMounted } from 'vue';

const catUrls = ref([]);
const loading = ref(false);

const fetchCatImage = async () => {
  loading.value = true;
  try {
    const catData = await axios.get('https://api.thecatapi.com/v1/images/search?limit=3'
    );
    catUrls.value = catData.data.slice(0, 3).map((cat) => cat.url);
    console.log('catData : ', catData)
    loading.value = false;
  } catch (error) {
    console.error('Error : ', error)
  }
}

onMounted(() => {
  if (catUrls.value.length === 0) {
    fetchCatImage();
  }
})

</script>

<template>
  <div>
    <h1 class="cat-title">Cute cats being showed around</h1>
    <button class="cat-generate" @click="fetchCatImage">Generate new cat images</button>
    <div class="loading" v-if="loading">Loading...</div>
    <div class="cat-list">
      <div v-for="catUrl in catUrls">
        <img class="cat-img" :src="catUrl" alt="Cats">
      </div>
    </div>
  </div>
</template>
