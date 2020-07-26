import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}
const routes = [{
		path: '/',
		redirect: '/staff',
	},
	{
		path: '/',
		name: 'Home',
		component: () => import('@/views/Home'),
		children: [{
				path: '/staff',
				name: 'Staff',
				component: () => import('@/views/Staff'),
			},
			{
				path: '/access',
				name: 'Access',
				component: () => import('@/views/Access'),
			},
			{
				path: '/area',
				name: 'Region',
				component: () => import('@/views/Region'),
			},
			{
				path: '/monitor',
				name: 'Monitor',
				component: () => import('@/views/Monitor'),
			},
		],
	},
]

const router = new VueRouter({
	routes,
})
// 路由守卫做登录判断
// router.beforeEach((to, from, next) => {
// 	if (to.path === '/') {
// 		next()
// 	} else {
// 		const token = sessionStorage.getItem('token')
// 		if (!token) {
// 			next('/')
// 		} else {
// 			next()
// 		}
// 	}
// })

export default router