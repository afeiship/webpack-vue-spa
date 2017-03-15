<template>
  <div class="page1-view">
    <h1>Page1 content</h1>
    <div class="bd">{{msg}}</div>
  </div>
</template>

<script>
import {ReduxAppBase} from 'next-vue-redux';
export default {
  name: 'page1',
  data () {
    return {
      msg: 'Welcome to Your page1.js App'
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
