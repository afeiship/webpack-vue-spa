// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app'
import router from './router'
import {ReduxBoot} from 'next-vue-redux';


Vue.config.productionTip = false

ReduxBoot.run(App,{
  router,
  vue:Vue,
  el:'#app'
});
