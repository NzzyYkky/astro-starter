/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': [
					'Noto Sans JP',
					'sans-serif',
					'游ゴシック',
					'YuGothic',
					'Hiragino Kaku Gothic Pro',
					'ヒラギノ角ゴ Pro W3',
					'メイリオ',
					'Meiryo',
					'ＭＳ Ｐゴシック',
					'Helvetica',
					'Arial',
					'Verdana'
				],
				'raleway': ['Raleway', 'sans-serif'], // Ralewayフォントを追加
			},
			height: {
				'header': '60px'
			},
			maxWidth: {
				'screen-lg': '1120px',
			},
			zIndex: {
				'header': '999',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				fadeOut: {
					'0%': { opacity: '1' },
					'100%': { opacity: '0' },
				},
			},
			animation: {
				fadeIn: 'fadeIn 0.5s ease-in-out',
				fadeOut: 'fadeOut 0.5s ease-in-out',
			},
		},
	},
	plugins: [],
}
