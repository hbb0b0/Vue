/* 引入vue和主页 */
import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
/* 实例化一个vue */
var app = new Vue({
    el: '#app',
    // store,
    router,
    render: h => h(App),
    created: function() {}
})