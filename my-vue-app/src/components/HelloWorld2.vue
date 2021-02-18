<template>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Documentation</a> |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button @click="state.count++">count is: {{ state.count }}</button>
  <p>
    Edit
    <code>components/HelloWorld2.vue</code> to test hot module replacement.
  </p>
</template>

<script>
export default {
  props: ['msg'],
  data() {
    return {
      state: {
        count: 0
      }
    }
  },
  created() {
    console.log("HelloWorld2 component setup is complete.");
  },
  mounted() {
    console.log("HelloWorld2 component is mounted.");
    this.state.count = 199;
  }
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
