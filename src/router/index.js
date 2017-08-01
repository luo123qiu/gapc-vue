import Vue from 'vue'
import Router from 'vue-router'
import CarList from '@/view/CarList'
import Post from '@/view/Post'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'CarList',
            component: CarList
        }, {
            path: '/post',
            name: 'Post',
            component: Post
        }
    ]
})
