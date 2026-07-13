<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const items = ref([])
const loading = ref(false)
const error = ref(null)

const fetchItems = async () => {
    console.log('Fetching items...')
    loading.value = true
    error.value = null

    try {
        const response = await axios.get('http://127.0.0.1:8000/items')
        if (Array.isArray(response.data)) {
            items.value = response.data
            console.log('Items fetched successfully:', items.value)
        } else {
            error.value = 'Invalid data format'
            console.error('Invalid data format', response.data)
        }
    } catch(err) {
        error.value = 'Failed to load items: ' + err.message
        console.error('Error fetching items:', err)
    } finally {
        loading.value = false
    }
}

onMounted(fetchItems)
</script>

<template>
  <section>
    <div>
      <h1>Groceries App</h1>
      <h2>To Buy</h2>

      <div v-if="loading">Loading items . . .</div>
      <div v-else-if="error">{{ error }}</div>

      <div v-else>
        <ul>
          <li v-for="item in items" :key="item.item_id">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
