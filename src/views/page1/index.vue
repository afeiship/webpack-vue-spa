<template>
  <div class="page1-view">
    <h1>Page1 content</h1>
    <div class="bd">{{msg}}</div>


    <el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
  </div>
</template>

<script>
import {ReduxAppBase} from 'next-vue-redux';
import { Button, Select } from 'element-ui';
export default {
  name: 'page1',
  components:{
    Button, Select
  },
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
