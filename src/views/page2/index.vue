<template>
  <div class="page2-view">
    <h1>Page2 content</h1>
    <div class="bd">{{msg}}</div>
    <hello />
  </div>
</template>

<script>
import {ReduxAppBase} from 'next-vue-redux';
import Hello from 'components/hello';
export default {
  name: 'page1',
  data () {
    return {
      msg: 'Welcome to Your page2.js App'
    }
  },
  components:{
    Hello
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
