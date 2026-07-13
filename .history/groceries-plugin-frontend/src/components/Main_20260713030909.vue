<script setup>
import { ref, onMounted } from 'vue'
// const count = ref(0)
import axios from 'axios'
const items = ref({})
const loading = ref(false)
const error = ref(null)

const fetchItems = async () => {
    loading.value = true
    error.value = null
    try {
        const response = await axios.get('http://127.0.0.1:8000/items')
        items.value = response.data
    } catch(err) {
        error.value = 'Failed to load items: ' + err.message
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

            <div v-if="loading">loading items . . .</div>
            <div v-else-if="error">{{ error }}</div>

            <div v-else>
                <ul v-for="(list, key, index) in items">
                    <div >
                        <li v-for="item in list">
                            {{ item.quantity }} {{ item.item_name }}
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    </section>
</template>
