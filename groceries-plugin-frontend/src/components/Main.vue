<script setup>
import { ref, onMounted } from 'vue'
// const count = ref(0)
import axios from 'axios'

const items = ref({})
const groceryToAdd = ref('')
const groceryQuantity = ref(1)
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

const addItem = async (groceryToAdd, groceryQuantity) => {
    try {
        const response = await axios.post(`http://127.0.0.1:8000/items/${groceryToAdd}/${groceryQuantity}`)
    } catch(err) {
        alert(`failed to add item: error ${err.message}`)
    } finally {
        fetchItems()
    }
}

onMounted(fetchItems)
</script>

<template>
    <section>
        <div>
            <h1>Groceries App</h1>
            <section>
                <h2>To Buy</h2>
                <div v-if="loading">loading items . . .</div>
                <div v-else-if="error">{{ error }}</div>
                <div v-else>
                    <ul v-for="(list, key, index) in items">
                        <li v-for="item in list">
                            <div>{{ item.item_name }} <span>[{{ item.quantity }}]</span></div>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    </section>
    <section>
        <h2>Add Item</h2>
        <div>
            <label for="groceryToAdd">Item to add to grocery list: {{ groceryToAdd }}</label>
            <input id="groceryToAdd" v-model="groceryToAdd" placeholder="type item to add here">
            <label for="groceryQuantity">Quantity (pending): {{ groceryQuantity }}</label>
            <input id="groceryQuantity" type="number" v-model="groceryQuantity" min="1" max="144">
            <button @click="addItem(groceryToAdd, groceryQuantity)">Add Item</button>
        </div>

    </section>
</template>
