import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: '3000'
	},
	resolve: {
		alias: [
			{
				find: '/~/',
				replacement: `/src/assets/`,
			},
			{
				find: '@/',
				replacement: `/src/`,
			},
		],
	},
	plugins: [
		vue({
			refTransform: true,
			refSugar:true
		}),
	],
})
