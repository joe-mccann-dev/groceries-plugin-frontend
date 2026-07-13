<script setup>
import { ref } from 'vue'
// const count = ref(0)
import axios from 'axios'
const items = ref([    axios
        .get('http://127.0.0.1:8000/items')
        .then((response) => {
            console.log(response)
            return response.data
        })]

)

console.log(items)
</script>
<!-- 0
:
{item_id: 1, item_name: 'burgers', quantity: 1}
1
:
{item_id: 2, item_name: 'cheese', quantity: 1} -->
<template>
    <section>
        <div>
            <h1>Groceries App</h1>
            <h2>To Buy</h2>

            <li v-for="item in items">
                {{ item.item_id }}
            </li>

        </div>
    </section>
</template>
