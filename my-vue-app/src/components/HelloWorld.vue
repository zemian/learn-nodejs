<template>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Documentation</a> |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button @click="state.count++">count is: {{ state.count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script setup>
import { defineProps, reactive, onMounted } from 'vue'

defineProps({
  msg: String
})

const state = reactive({ count: 0 })

// https://v3.vuejs.org/guide/composition-api-lifecycle-hooks.html
onMounted(() => {
  console.log("HelloWorld component is mounted.");
  state.count = 99;
})

console.log("HelloWorld component setup is complete.");
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
