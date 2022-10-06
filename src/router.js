import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			name: 'Home',
			path: '/',
			components: {
				Navbar,
				Footer,
				default: () => import('@/views/Home.vue'),
			},
		},
		{
			name: 'Intro',
			path: '/intro',
			components: {
				Navbar,
				Footer,
				default: () => import('@/views/Intro.vue'),
			},
		},
		{
			name: 'Form',
			path: '/form',
			components: {
				Navbar,
				Footer,
				default: () => import('@/views/form.vue'),
			},
		},
		{
			name: 'News',
			path: '/news',
			components: {
				Navbar,
				Footer,
				default: () => import('@/views/News.vue'),
			},
		},
		{
			name: 'Info',
			path: '/:name',
			components: {
				Navbar,
				Footer,
				default: () => import('@/views/Info.vue'),
			},
		},
	],
});
