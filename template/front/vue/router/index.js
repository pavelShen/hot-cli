
import Vue from 'vue';
import VueRouter from 'vue-router';


import Foo from '../components/foo';
import Bar from '../components/bar';


Vue.use(VueRouter);


const router = new VueRouter({
    mode: 'history',
    base: '/vue/',
    routes: [
        {
            path: '/foo',
            component: Foo
        }, {
            path: '/bar',
            component: Bar
        }
    ]
});

export default router
