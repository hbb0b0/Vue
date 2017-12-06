import Vue from 'vue';
import VueRouter from 'vue-router';
import Foo from "./component/Foo.vue";
import Bar from "./component/Bar.vue";
Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: "/foo", component: Foo },
        { path: "/bar", component: Bar }

    ]
});

export default router