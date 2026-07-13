<script setup>
import { ref } from 'vue'
// const count = ref(0)
import axios from 'axios'
const items = ref(
    axios
        .get('http://127.0.0.1:8000/items')
        .then((response) => {
            console.log(response)
        })
)
</script>

<template>
    <section>
        <div>
            <h1>Groceries App</h1>
            <h2>To Buy</h2>
            <ul>

            </ul>
        </div>
    </section>
</template>
