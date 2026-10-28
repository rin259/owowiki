// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://owowiki.netlify.app',
	integrations: [
		starlight({
			title: 'OwO 插件使用文档',
			description: 'Luna Bot、Koishi、AstrBot 与语音通话的用户向使用文档。',
			tagline: 'OwO 指令手册',
			lastUpdated: true,
			disable404Route: true,
			locales: {
				root: { label: '简体中文', lang: 'zh-CN' },
			},
			social: [
				{
					icon: 'github',
					label: 'GitHub 仓库',
					href: 'https://github.com/rin259/owowiki',
				},
			],
			customCss: ['/src/styles/custom.css'],
			tableOfContents: {
				minHeadingLevel: 2,
				maxHeadingLevel: 3,
			},
			components: {
				Head: './src/components/Head.astro',
				PageFrame: './src/components/PageFrame.astro',
				PageTitle: './src/components/PageTitle.astro',
			},
			markdown: {
				headingLinks: true,
			},
			sidebar: [
				{
					label: '开始',
					items: [
						{ label: '首页', slug: '' },
						{ label: '免责声明', slug: 'disclaimer' },
					],
				},
				{
					label: '插件教程',
					items: [
						{ label: 'Luna Bot', slug: 'luna-bot' },
						{ label: 'Koishi', slug: 'koishi' },
						{ label: 'AstrBot', slug: 'astrbot' },
					],
				},
				{
					label: '实时语音',
					items: [{ label: '语音通话', slug: 'voice-call' }],
				},
			],
		}),
	],
});
